# Test Client Api

Implements a Reading service for a user service.

| Method    | Url | Description |
| -------- | ------- | --- |
| GET    | `/get-profile/:id` | Gets the requested user profile via its ID |

## Security

If there is a valid certificate key in `/certs/server.key` and a valid certificate in `/certs/server.crt`, the app will run with HTTPS.
