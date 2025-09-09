# Authentication Guide

This document provides comprehensive information about authentication in the Gitguru public API.

## Overview

The Gitguru API uses API key-based authentication with role-based access control (RBAC). All API requests require a valid API key with appropriate permissions, except for health check and version endpoints.

## Authentication Method

### Bearer Token Authentication

All authenticated requests must include an API key in the `Authorization` header using the Bearer token format:

```
Authorization: Bearer <your-api-key>
```

**Example:**
```bash
curl -H "Authorization: Bearer 123e4567-e89b-12d3-a456-426614174000" \
     "https://drm.openq.dev/public-api/users"
```

## API Key Types

### User API Keys

- **Role**: `user`
- **Permissions**: Access to all read-only endpoints
- **Rate Limits**: Configurable per key (default varies)
- **Usage**: For regular API consumers and applications


### Admin API Keys

- **Role**: `admin`
- **Permissions**: All user permissions plus admin-only endpoints
- **Rate Limits**: Configurable per key (typically higher limits)
- **Usage**: For API key management and administrative tasks

**Additional Access:**
- API key generation endpoints
- Admin-only operations

## Endpoint Categories

### Public Endpoints

The following endpoints do not require authentication:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/health` | GET | Health check endpoint |
| `/version` | GET | API version information |
| `/docs` | GET | API documentation |
| `/docs/*` | GET | Documentation pages |
| `/openapi.yml` | GET | OpenAPI specification |
| `/api-docs` | GET | Swagger UI |

### User-Authenticated Endpoints

All endpoints below require a valid user or admin API key:

#### User Management Endpoints

| Endpoint | Method | Description | Parameters |
|----------|--------|-------------|------------|
| `/users` | GET | List all users with filtering | `page`, `per_page`, `location`, `dependency_names` |
| `/users/{login}` | GET | Get user by GitHub login | `login` (path) |
| `/users/{login}/commits` | GET | Get user commits | `login` (path), `page`, `per_page` |
| `/users/{login}/activity/total` | GET | Get user activity metrics | `login` (path), `since`, `until` |
| `/users/{login}/dependencies` | GET | Get user dependencies | `login` (path), `page`, `per_page` |

#### Repository Management Endpoints

| Endpoint | Method | Description | Parameters |
|----------|--------|-------------|------------|
| `/repos` | GET | List all repositories with filtering | `page`, `per_page`, `dependency_names` |
| `/repos/{owner}/{name}` | GET | Get repository by owner and name | `owner`, `name` (path) |
| `/repos/{owner}/{name}/commits` | GET | Get repository commits | `owner`, `name` (path), `page`, `per_page` |
| `/repos/{owner}/{name}/dependencies` | GET | Get repository dependencies | `owner`, `name` (path), `page`, `per_page`, `sort_by`, `order` |

#### Analytics Endpoints

| Endpoint | Method | Description | Parameters |
|----------|--------|-------------|------------|
| `/analytics/activity/total` | GET | Get platform activity metrics | None |

#### Search Endpoints

| Endpoint | Method | Description | Parameters |
|----------|--------|-------------|------------|
| `/search` | GET | Global search across users, repos, and dependencies | `q`, `type`, `page`, `limit` |

### Admin-Only Endpoints

The following endpoints require an admin API key:

| Endpoint | Method | Description | Parameters |
|----------|--------|-------------|------------|
| `/generate-user-api-key` | POST | Generate new user API key | `admin_api_key`, `api_limit` |

### Super Admin Endpoints

The following endpoints require super admin access:

| Endpoint | Method | Description | Parameters |
|----------|--------|-------------|------------|
| `/create-admin-api-key` | POST | Create new admin API key | `super_admin_api_key` |

## API Key Management

### Generating User API Keys

**Endpoint:** `POST /generate-user-api-key`

**Description:** Generates a new user API key. Requires an admin API key.

**Request Body:**
```json
{
  "admin_api_key": "your-admin-api-key-uuid",
  "api_limit": 1000
}
```

**Response:**
```json
{
  "key": "987fcdeb-51a2-43d7-8f9e-123456789abc",
  "role": "user",
  "api_limit": 1000
}
```

**Example:**
```bash
curl -X POST "https://drm.openq.dev/public-api/generate-user-api-key" \
     -H "Content-Type: application/json" \
     -d '{
       "admin_api_key": "123e4567-e89b-12d3-a456-426614174000",
       "api_limit": 1000
     }'
```

## API Key Format

- **Format**: UUID v4 (Universally Unique Identifier)
- **Example**: `123e4567-e89b-12d3-a456-426614174000`
- **Length**: 36 characters (including hyphens)
- **Case**: Lowercase

## Error Responses

### Authentication Errors

| Status Code | Error Message | Description |
|-------------|---------------|-------------|
| `401 Unauthorized` | "Authorization header required" | Missing Authorization header |
| `401 Unauthorized` | "Invalid authorization format. Use 'Bearer <api-key>'" | Incorrect header format |
| `401 Unauthorized` | "API key required" | Empty API key |
| `401 Unauthorized` | "Invalid API key format" | Malformed UUID |
| `401 Unauthorized` | "Invalid API key" | API key not found or invalid |
| `403 Forbidden` | "Insufficient permissions" | API key role doesn't have required permissions |
| `403 Forbidden` | "Admin access required" | Admin role required for endpoint |

### Example Error Response

```json
{
  "error": "Invalid API key format"
}
```


## Security Best Practices

### API Key Security

1. **Keep API keys secret** - Never expose them in client-side code or public repositories
2. **Use environment variables** - Store API keys in environment variables
3. **Rotate keys regularly** - Generate new keys periodically
4. **Use HTTPS only** - Always use HTTPS when making API requests
5. **Monitor usage** - Keep track of API key usage and limits

### Example: Secure API Key Storage

```bash
# Store in environment variable
export GITGURU_API_KEY="123e4567-e89b-12d3-a456-426614174000"

# Use in requests
curl -H "Authorization: Bearer $GITGURU_API_KEY" \
     "https://drm.openq.dev/public-api/users"
```

## Getting Started

### Step 1: Generate User API Keys

Use your admin API key to generate user API keys:

```bash
curl -X POST "https://drm.openq.dev/public-api/generate-user-api-key" \
     -H "Content-Type: application/json" \
     -d '{
       "admin_api_key": "YOUR_ADMIN_API_KEY",
       "api_limit": 1000
     }'
```

### Step 3: Use Your API Key

Make authenticated requests using your user API key:

```bash
curl -H "Authorization: Bearer YOUR_USER_API_KEY" \
     "https://drm.openq.dev/public-api/users"
```

## Troubleshooting

### Common Issues

**1. "Authorization header required"**
- Ensure you're including the `Authorization` header
- Check that the header name is spelled correctly

**2. "Invalid authorization format"**
- Use the format: `Authorization: Bearer <api-key>`
- Ensure there's a space after "Bearer"

**3. "Invalid API key format"**
- API keys must be valid UUIDs
- Check for typos or extra characters

**4. "Invalid API key"**
- API key may not exist in the database
- API key may have been deleted or deactivated

**5. "Insufficient permissions"**
- Check that your API key has the correct role
- Ensure you're using a user or admin API key (not a super admin key)

### Testing Authentication

Test your API key with a simple request:

```bash
# Test with health endpoint (no auth required)
curl "https://drm.openq.dev/public-api/health"

# Test with authenticated endpoint
curl -H "Authorization: Bearer YOUR_API_KEY" \
     "https://drm.openq.dev/public-api/users?per_page=1"
```

## Support

If you encounter authentication issues:

1. Check the error message for specific guidance
2. Ensure you're using the correct base URL
3. Contact support if the issue persists



## Examples

### JavaScript/Node.js

```javascript
const apiKey = process.env.GITGURU_API_KEY;

const response = await fetch('https://drm.openq.dev/public-api/users', {
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
```

### Python

```python
import requests
import os

api_key = os.getenv('GITGURU_API_KEY')
headers = {
    'Authorization': f'Bearer {api_key}',
    'Content-Type': 'application/json'
}

response = requests.get(
    'https://drm.openq.dev/public-api/users',
    headers=headers
)

data = response.json()
```

### Go

```go
package main

import (
    "fmt"
    "net/http"
    "os"
)

func main() {
    apiKey := os.Getenv("GITGURU_API_KEY")
    
    req, _ := http.NewRequest("GET", "https://drm.openq.dev/public-api/users", nil)
    req.Header.Set("Authorization", "Bearer " + apiKey)
    
    client := &http.Client{}
    resp, _ := client.Do(req)
    defer resp.Body.Close()
    
    // Handle response...
}
```
