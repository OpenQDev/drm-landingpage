# GitGuru Public API Documentation

Welcome to the GitGuru Public API documentation. This API provides comprehensive access to GitHub user, repository, and dependency data with analytics capabilities.

## Quick Start

1. **Get an API Key**: Contact support for admin API key generation
2. **Authenticate**: Include your API key in requests: `Authorization: Bearer <your-api-key>`
3. **Start Exploring**: Use the endpoints below to access data

## Documentation

### 🔐 [Authentication Guide](/help/Endpoints/authentication)
- API key setup and management
- Role-based access control (user/admin)
- Credit system and rate limiting
- Error handling and troubleshooting

### 👥 [User Endpoints](/help/Endpoints/users)
- List all users with filtering
- Get user by GitHub login
- User activity and dependency data

### 📁 [Repository Endpoints](/help/Endpoints/repos)
- List all repositories with filtering
- Get repository by owner/name
- Repository commits and dependencies

## API Overview

**Base URL**: `https://drm.openq.dev/public-api`

**Authentication**: Bearer token (API key required)

**Rate Limiting**: Credit-based system (see [Authentication Guide](/help/Endpoints/authentication))

## Key Features

- **Pagination**: Page-based pagination (GitHub style)
- **Filtering**: Filter by location, dependencies, and more
- **Real-time Data**: Up-to-date GitHub repository and user information
- **Credit System**: Transparent usage tracking with `/api-key/credits` endpoint

## Getting Help

- **API Documentation**: Interactive Swagger UI at `/api-docs`
- **OpenAPI Spec**: Machine-readable spec at `/openapi.yml`
- **Health Check**: Verify API status at `/health`
- **Support**: Contact OpenQ for assistance

## Example Usage

```bash
# Check API health
curl "https://drm.openq.dev/public-api/health"

# Get users (requires API key)
curl -H "Authorization: Bearer YOUR_API_KEY" \
     "https://drm.openq.dev/public-api/users?per_page=10"

# Check your credits
curl -H "Authorization: Bearer YOUR_API_KEY" \
     "https://drm.openq.dev/public-api/api-key/credits"
```
