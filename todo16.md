
# The Creator's Codex - Integration Plan, Part 16/10
## Module Integrations: The Connectivity Suite

This document provides the exhaustive, code-complete integration plan for the core connectivity modules: **Connect**, **Events**, **Logic Apps**, **Functions**, and **Data Factory**. These modules form the nervous system of the platform, and their power comes from their integration with external communication and data platforms.

---

## 1. Connect Module: The Weaver's Loom
### Core Concept
The Connect module is an automation engine. Its integrations are "connectors" that allow it to interact with the outside world.

### Key API Integrations

#### a. Twilio API (for SMS)
- **Purpose:** Allow workflows in the Connect module to send SMS messages.
- **Architectural Approach:** The Connect module's backend will have a secure, encapsulated service that wraps the Twilio SDK. A workflow node labeled "Send SMS" will expose simple fields (To, Body) and call this service.
- **Code Examples:**
  - **TypeScript (Backend Twilio Service):**
    ```typescript
    // services/connectors/twilio.ts
    import twilio from 'twilio';

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_PHONE_NUMBER;

    const client = twilio(accountSid, authToken);

    export async function sendSms(to: string, body: string): Promise<string> {
      try {
        const message = await client.messages.create({
          body,
          from: fromNumber,
          to,
        });
        console.log(`SMS sent successfully. SID: ${message.sid}`);
        return message.sid;
      } catch (error) {
        console.error("Failed to send SMS via Twilio:", error);
        throw error;
      }
    }
    ```

#### b. SendGrid API (for Email)
- **Purpose:** Allow workflows to send transactional emails.
- **Code Examples:**
  - **Python (Backend SendGrid Service):**
    ```python
    # services/connectors/sendgrid.py
    import os
    from sendgrid import SendGridAPIClient
    from sendgrid.helpers.mail import Mail

    def send_email(to_email: str, subject: str, html_content: str):
        message = Mail(
            from_email='noreply@demobank.com',
            to_emails=to_email,
            subject=subject,
            html_content=html_content)
        try:
            sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
            response = sg.send(message)
            print(f"Email sent with status code: {response.status_code}")
            return response.status_code
        except Exception as e:
            print(e)
            raise e
    ```

---

## 2. Events Module: The Town Crier
### Core Concept
The Events module allows external systems to subscribe to Demo Bank events. It also needs to be able to publish its events to external message brokers for larger, enterprise-wide event-driven architectures.

### Key API Integrations

#### a. Amazon EventBridge
- **Purpose:** Publish Demo Bank events (e.g., `transaction.created`) to a custom EventBridge event bus.
- **Architectural Approach:** The core Events service will be extended. When an internal event is published, if an external target like EventBridge is configured, the service will also call the AWS SDK to publish the same event.
- **Code Examples:**
  - **Go (Event Publishing Service):**
    ```go
    // services/event_publisher.go
    package services

    import (
        "context"
        "encoding/json"
        "github.com/aws/aws-sdk-go-v2/aws"
        "github.com/aws/aws-sdk-go-v2/config"
        "github.com/aws/aws-sdk-go-v2/service/eventbridge"
        "github.com/aws/aws-sdk-go-v2/service/eventbridge/types"
    )

    func PublishToEventBridge(eventData map[string]interface{}, eventType string) error {
        cfg, err := config.LoadDefaultConfig(context.TODO())
        if err != nil { return err }

        client := eventbridge.NewFromConfig(cfg)
        eventDetail, _ := json.Marshal(eventData)

        _, err = client.PutEvents(context.TODO(), &eventbridge.PutEventsInput{
            Entries: []types.PutEventsRequestEntry{
                {
                    Detail:       aws.String(string(eventDetail)),
                    DetailType:   aws.String(eventType),
                    Source:       aws.String("com.demobank"),
                    EventBusName: aws.String("demobank-events"),
                },
            },
        })
        return err
    }
    ```

---

## 3. Data Factory: The Alchemist's Refinery
### Core Concept
The Data Factory module orchestrates data movement. A key integration is with data observability platforms to ensure data quality and health.

### Key API Integrations

#### a. Monte Carlo API
- **Purpose:** Report data pipeline status and lineage to Monte Carlo for data observability and quality monitoring.
- **Architectural Approach:** After every Data Factory pipeline run, a final step will call the Monte Carlo GraphQL API to report the outcome (success/failure) and the assets that were read from or written to.
- **Code Examples:**
  - **TypeScript (Pipeline Post-Execution Step):**
    ```typescript
    // steps/report_to_montecarlo.ts
    import axios from 'axios';

    const MONTE_CARLO_API_KEY = process.env.MC_API_KEY;
    const MONTE_CARLO_API_SECRET = process.env.MC_API_SECRET;

    async function reportPipelineRun(pipelineName: string, status: 'SUCCESS' | 'FAILURE') {
      // This is a simplified example. A real one would include data lineage.
      const mutation = `
        mutation CreateJobExecution($job: JobExecutionInput!) {
          createJobExecution(job: $job) {
            name
            status
          }
        }
      `;
      const variables = {
        job: {
          name: pipelineName,
          namespace: "DataFactory",
          status: status,
        }
      };

      const response = await axios.post('https://api.getmontecarlo.com/graphql', {
        query: mutation,
        variables,
      }, {
        headers: { 'x-mc-id': MONTE_CARLO_API_KEY, 'x-mc-token': MONTE_CARLO_API_SECRET }
      });

      console.log('Reported pipeline run to Monte Carlo.');
      return response.data;
    }
    ```

### UI/UX Integration
- In the **Connect** module's workflow builder, users will see icons for Twilio and SendGrid in the node palette.
- The **Events** module will have a "Targets" tab where a user can configure an AWS EventBridge event bus as a destination.
- The **Data Factory** UI will have a "Data Quality" tab on each pipeline's history page, showing a "View in Monte Carlo" link.
- **Logic Apps** and **Functions** are primarily platforms for developers to *write* integrations, so their UI will focus on code editors and deployment tools rather than pre-built connectors.
