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
- **Credit System**: Each API key has a credit limit that is decremented based on usage

## API Credit System

The Gitguru API uses a credit-based system to manage API usage and ensure fair access to resources. Each API key has a configurable credit limit that is decremented based on the amount of data returned by each request.

### How Credits Work

- **Credits are consumed per request** based on the number of items returned
- **Credits are decremented after successful requests** but before the response is sent
- **Insufficient credits result in a 403 Forbidden response**
- **Credit limits are enforced in real-time** for all user API keys

### Credit Usage by Endpoint

#### User Endpoints

| Endpoint | Credit Cost | Description |
|----------|-------------|-------------|
| `GET /users` | Number of users returned | Credits = actual number of users in the response |
| `GET /users/{login}` | 1 credit | Fixed cost for single user lookup |

#### Repository Endpoints

| Endpoint | Credit Cost | Description |
|----------|-------------|-------------|
| `GET /repos` | Number of repos returned | Credits = actual number of repositories in the response |
| `GET /repos/{owner}/{name}` | 1 credit | Fixed cost for single repository lookup |

### Credit Examples

**Example 1: Paginated Users Request**
```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     "https://drm.openq.dev/public-api/users?per_page=10"
```
- If the response contains 10 users: **10 credits consumed**
- If the response contains 5 users (last page): **5 credits consumed**

**Example 2: Single User Lookup**
```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     "https://drm.openq.dev/public-api/users/octocat"
```
- **1 credit consumed** (regardless of whether user exists)

**Example 3: Repository List**
```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     "https://drm.openq.dev/public-api/repos?per_page=25"
```
- If the response contains 25 repos: **25 credits consumed**
- If the response contains 3 repos (last page): **3 credits consumed**

### Credit Management

- **Check your remaining credits** using the `/api-key/credits` endpoint
- **Plan your requests** based on your credit limit
- **Use pagination efficiently** to control credit consumption
- **Contact support** if you need to increase your credit limit

### Checking Your Credits

You can check your remaining credits at any time using the credits endpoint:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     "https://drm.openq.dev/public-api/api-key/credits"
```

**Response:**
```json
{
  "api_key": "123e4567-e89b-12d3-a456-426614174000",
  "remaining_credits": 150,
  "role": "user"
}
```

This endpoint:
- **Does not consume any credits** (free to use)
- **Shows your current remaining credits**
- **Displays your API key role**
- **Requires authentication** (like all other endpoints)

### Credit Error Responses

When you run out of credits, you'll receive a 403 Forbidden response:

```json
{
  "error": "insufficient credits: need 10, have 5"
}
```

This error includes:
- **Need**: Number of credits required for the request
- **Have**: Number of credits remaining on your API key

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

#### User Info Endpoints

| Endpoint | Method | Description | Parameters |
|----------|--------|-------------|------------|
| `/users` | GET | List all users with filtering | `page`, `per_page`, `location`, `dependency_names` |
| `/users/{login}` | GET | Get user by GitHub login | `login` (path) |

#### Repository Info Endpoints

| Endpoint | Method | Description | Parameters |
|----------|--------|-------------|------------|
| `/repos` | GET | List all repositories with filtering | `page`, `per_page`, `dependency_names` |
| `/repos/{owner}/{name}` | GET | Get repository by owner and name | `owner`, `name` (path) |

#### API Key Management Endpoints

| Endpoint | Method | Description | Parameters |
|----------|--------|-------------|------------|
| `/api-key/credits` | GET | Check remaining credits for your API key | None |






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
| `403 Forbidden` | "insufficient credits: need X, have Y" | Not enough credits for the request |

### Example Error Response

```json
{
  "error": "Invalid API key format"
}
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

**6. "insufficient credits: need X, have Y"**
- You've run out of API credits
- The error shows how many credits you need vs. how many you have
- Consider reducing the number of items per request (use smaller `per_page` values)
- Contact support to increase your credit limit

### Testing Authentication

Test your API key with a simple request:

```bash
# Test with health endpoint (no auth required)
curl "https://drm.openq.dev/public-api/health"

# Test with authenticated endpoint (consumes 1 credit)
curl -H "Authorization: Bearer YOUR_API_KEY" \
     "https://drm.openq.dev/public-api/users?per_page=1"

# Test single user lookup (consumes 1 credit)
curl -H "Authorization: Bearer YOUR_API_KEY" \
     "https://drm.openq.dev/public-api/users/octocat"

# Test repository lookup (consumes 1 credit)
curl -H "Authorization: Bearer YOUR_API_KEY" \
     "https://drm.openq.dev/public-api/repos/octocat/Hello-World"

# Check your remaining credits (consumes 0 credits)
curl -H "Authorization: Bearer YOUR_API_KEY" \
     "https://drm.openq.dev/public-api/api-key/credits"
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

// This request will consume credits equal to the number of users returned
const response = await fetch('https://drm.openq.dev/public-api/users?per_page=10', {
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

# This request will consume credits equal to the number of users returned
response = requests.get(
    'https://drm.openq.dev/public-api/users?per_page=10',
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
    
    // This request will consume credits equal to the number of users returned
    req, _ := http.NewRequest("GET", "https://drm.openq.dev/public-api/users?per_page=10", nil)
    req.Header.Set("Authorization", "Bearer " + apiKey)
    
    client := &http.Client{}
    resp, _ := client.Do(req)
    defer resp.Body.Close()
    
    // Handle response...
}
```
