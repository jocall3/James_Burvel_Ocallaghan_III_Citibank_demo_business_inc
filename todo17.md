
# The Creator's Codex - Integration Plan, Part 17/10
## Module Integrations: The Data & Geospatial Suite

This document provides the exhaustive, code-complete integration plan for the data-centric modules: **Analytics**, **BI (Business Intelligence)**, **IoT Hub**, and **Maps**. The goal is to show how these modules connect to external, best-in-class data platforms.

---

## 1. Analytics Module: The Augur's Scrying Pool
### Core Concept
The Analytics module provides the query engine. To be truly powerful, it must be able to run queries not just on its internal data store, but also on a modern cloud data warehouse like Snowflake.

### Key API Integrations

#### a. Snowflake SQL API
- **Purpose:** Allow users of the Analytics module to write and execute queries directly against a Snowflake data warehouse.
- **Architectural Approach:** The backend of the Analytics module will use the Snowflake Node.js driver to securely connect and execute queries. It will manage connection pooling and credentials. The frontend will pass the SQL query to the backend, which then proxies it to Snowflake.
- **Code Examples:**
  - **TypeScript (Backend Query Service):**
    ```typescript
    // services/snowflake_query_runner.ts
    import snowflake from 'snowflake-sdk';

    const connection = snowflake.createConnection({
        account: process.env.SNOWFLAKE_ACCOUNT!,
        username: process.env.SNOWFLAKE_USER!,
        password: process.env.SNOWFLAKE_PASSWORD!,
        warehouse: 'COMPUTE_WH',
        database: 'DEMOBANK_ANALYTICS',
        schema: 'PUBLIC',
    });

    // Connect to Snowflake
    connection.connect((err, conn) => {
        if (err) {
            console.error('Unable to connect to Snowflake: ' + err.message);
        } else {
            console.log('Successfully connected to Snowflake.');
        }
    });

    export async function runSnowflakeQuery(sqlText: string): Promise<any[]> {
        return new Promise((resolve, reject) => {
            connection.execute({
                sqlText,
                complete: (err, stmt, rows) => {
                    if (err) {
                        console.error('Failed to execute statement due to the following error: ' + err.message);
                        reject(err);
                    } else {
                        console.log('Successfully executed statement.');
                        resolve(rows || []);
                    }
                }
            });
        });
    }
    ```

---

## 2. BI Module: The Lead Cartographer
### Core Concept
The BI module is for visualization. A key enterprise integration is embedding its dashboards into other platforms, and allowing other platforms (like Tableau) to connect to its data sources.

### Key API Integrations

#### a. Tableau Embedding API v3
- **Purpose:** Allow dashboards created within the Demo Bank BI module to be securely embedded in other web applications (like a company's internal portal).
- **Architectural Approach:** The BI module will provide a "Share" or "Embed" option for each dashboard. This will generate a small HTML/JavaScript snippet containing a JWT (JSON Web Token) for authentication. The external application can use this snippet to embed the dashboard.
- **Code Examples:**
  - **HTML/JavaScript (Generated Embed Snippet):**
    ```html
    <!-- Snippet to be pasted into an external web page -->
    <script type="module" src="https://embedding.tableauusercontent.com/tableau.embedding.3.latest.js"></script>

    <tableau-viz
      id="tableau-viz"
      src="https://your-tableau-server/views/DemoBankDashboard/ExecutiveKPIs"
      token="<GENERATED_JWT_FOR_AUTHENTICATION>"
      toolbar="hidden"
      device="desktop">
    </tableau-viz>
    ```
  - **Python (Backend JWT Generation for Tableau):**
    ```python
    # services/tableau_jwt_generator.py
    import jwt
    import uuid
    import datetime
    import os

    TABLEAU_SECRET_ID = os.environ.get("TABLEAU_SECRET_ID")
    TABLEAU_SECRET_VALUE = os.environ.get("TABLEAU_SECRET_VALUE")
    TABLEAU_CLIENT_ID = os.environ.get("TABLEAU_CLIENT_ID")
    TABLEAU_USERNAME = "service_account@demobank.com" # The user to embed as

    def generate_tableau_jwt():
        payload = {
            'iss': TABLEAU_CLIENT_ID,
            'sub': TABLEAU_USERNAME,
            'aud': 'tableau',
            'iat': datetime.datetime.utcnow(),
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=10),
            'jti': str(uuid.uuid4()),
            'scp': ['tableau:views:embed']
        }
        headers = {
            'kid': TABLEAU_SECRET_ID,
            'iss': TABLEAU_CLIENT_ID,
        }
        token = jwt.encode(
            payload,
            TABLEAU_SECRET_VALUE,
            algorithm='HS256',
            headers=headers
        )
        return token
    ```

---

## 3. IoT Hub: The Global Sensorium
### Core Concept
The IoT Hub's primary role is ingesting massive amounts of data. This data then needs to be streamed to other cloud services for processing and storage.

### Key API Integrations

#### a. AWS Kinesis Data Streams
- **Purpose:** Stream high-throughput data from the IoT Hub directly into an AWS Kinesis stream for real-time processing by other applications (e.g., serverless functions, analytics jobs).
- **Architectural Approach:** The IoT Hub backend, upon receiving a message from a device, will immediately put that record into a Kinesis stream using the AWS SDK. This decouples ingestion from processing.
- **Code Examples:**
  - **Go (IoT Message Ingestion Service):**
    ```go
    // services/iot_ingestor.go
    package services

    import (
      "context"
      "github.com/aws/aws-sdk-go-v2/aws"
      "github.com/aws/aws-sdk-go-v2/config"
      "github.com/aws/aws-sdk-go-v2/service/kinesis"
    )

    func PutRecordToKinesis(data []byte, partitionKey string) error {
      cfg, err := config.LoadDefaultConfig(context.TODO())
      if err != nil { return err }

      client := kinesis.NewFromConfig(cfg)
      streamName := "iot-telemetry-stream"

      _, err = client.PutRecord(context.TODO(), &kinesis.PutRecordInput{
        Data:         data,
        PartitionKey: aws.String(partitionKey), // e.g., device ID
        StreamName:   aws.String(streamName),
      })

      return err
    }
    ```

---

## 4. Maps Module: The Atlas
### Core Concept
The Maps module requires a powerful base map and geocoding engine to function. This is provided by integrating with a specialized maps API provider.

### Key API Integrations

#### a. Mapbox GL JS & Geocoding API
- **Purpose:** Render beautiful, performant maps and convert addresses into latitude/longitude coordinates (geocoding).
- **Architectural Approach:** The frontend will use the Mapbox GL JS library directly. The Mapbox access token will be exposed to the client-side, but secured using URL restrictions in the Mapbox account settings. Geocoding requests will be proxied through our backend to protect the API key and manage quotas.
- **Code Examples:**
  - **TypeScript (Frontend Map Component):**
    ```typescript
    // components/Map.tsx
    import React, { useRef, useEffect } from 'react';
    import mapboxgl from 'mapbox-gl';

    mapboxgl.accessToken = 'pk.YOUR_MAPBOX_ACCESS_TOKEN';

    const MapComponent = () => {
      const mapContainer = useRef(null);

      useEffect(() => {
        if (!mapContainer.current) return;
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/dark-v11', // Dark theme style
          center: [-74.0060, 40.7128], // New York City
          zoom: 12
        });

        // Add a marker for a location
        new mapboxgl.Marker()
          .setLngLat([-74.0060, 40.7128])
          .addTo(map);

        return () => map.remove();
      }, []);

      return <div ref={mapContainer} style={{ width: '100%', height: '600px' }} />;
    };
    ```

### UI/UX Integration
- The **Analytics** module will have a dropdown to select the data source: "Internal" or "Snowflake".
- The **BI** module will have a "Share" button on each dashboard that opens a modal with the embeddable HTML snippet.
- The **IoT Hub** and **Maps** modules will not have significant UI changes for these integrations, as they are foundational and operate in the background. The result of the integration *is* the feature itself (e.g., the map rendering).
