# Application Data Flow

```mermaid
graph TD
    A[User Action (click)] --> B[Component]
    B -->|DI| C[Service]
    C --> D[HttpClient]
    D --> E[Observable]
    E -->|RxJS operators| F[subscribe()]
    F --> G[UI updates]
```
