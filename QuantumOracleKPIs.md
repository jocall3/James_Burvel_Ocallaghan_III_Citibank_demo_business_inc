
# KPIs for Quantum Oracle

## 1. UI/UX & Engagement KPIs

-   **Engagement Rate:** Percentage of active users who run at least one simulation per month. (Target: > 15%)
-   **Task Completion Rate:** Percentage of users who start a simulation and successfully receive a result. (Target: > 98%)
-   **Parameter Adjustment Rate:** Percentage of simulations where users modify the default parameters (duration, amount), indicating deep engagement. (Target: > 40%)
-   **User Satisfaction (CSAT):** Qualitative feedback gathered via a post-simulation survey ("Was this simulation helpful in your financial planning?"). (Target: 4.5 / 5)

## 2. API & Performance KPIs

-   **P95 Latency:** 95th percentile of the `/v1/oracle/simulate` endpoint response time. (Target: < 5000ms)
-   **API Error Rate:** Percentage of non-2xx responses from the simulation endpoint. (Target: < 0.5%)
-   **Throughput:** Maximum number of concurrent simulations the system can handle without significant latency degradation. (Target: 100 simulations/minute)
-   **Cold Start Penalty:** Measure latency for the first simulation request after a period of inactivity to monitor serverless function performance. (Target: < 7000ms)

## 3. Business Value & Efficacy KPIs

-   **Decision Impact Score:** Based on user surveys, the percentage of users who report that a simulation directly influenced a subsequent financial decision (e.g., increasing savings, delaying a large purchase). (Target: > 25%)
-   **Risk Mitigation Actions:** Track the rate at which users who run negative scenarios (e.g., job loss) subsequently take a recommended mitigating action (e.g., increasing their emergency fund savings rate) within 30 days.
-   **Return on Simulation (RoS):** A novel metric calculated as `(Value of Financial Mistakes Averted) / (Computational Cost of Simulation)`. This is a long-term, modeled KPI derived from user data and market analysis. It represents the ultimate value proposition of the feature.
-   **Premium Conversion Uplift:** The percentage increase in conversions to premium tiers that include the Quantum Oracle feature. (Target: 5% uplift)
