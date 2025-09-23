# User API Endpoints Documentation


## Endpoints

### 1. Get All Users

**Endpoint:** `GET /users`

**Description:** Retrieves a paginated list of all users with optional filtering by location and dependencies.

**Query Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `page` | integer | No | 1 | Page number for pagination |
| `per_page` | integer | No | 30 | Number of items per page (max: 100) |
| `location` | string | No | - | Filter users by location (partial match) |
| `dependency_names` | string | No | - | Comma-separated list of dependency names to filter by |

**Example Request:**
```bash
GET /users?page=1&per_page=50&location=San Francisco&dependency_names=react,typescript&dependency_files=package.json
```

**Response:**
```json
{
  "data": [
    {
      "github_rest_id": 123456,
      "github_graphql_id": "MDQ6VXNlcjEyMzQ1Ng==",
      "login": "octocat",
      "name": "The Octocat",
      "email": "octocat@github.com",
      "avatar_url": "https://avatars.githubusercontent.com/u/123456?v=4",
      "company": "GitHub",
      "location": "San Francisco",
      "bio": "GitHub's mascot",
      "followers": 1000,
      "following": 500,
      "type": "User",
      "created_at": "2011-01-25T18:32:29Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "meta": {
    "request_id": "req-123",
    "timestamp": 1642233600,
    "execution_time": 45
  }
}
```

**Pagination:** This endpoint uses GitHub-style pagination with Link headers for navigation.

---

### 2. Get User by Login

**Endpoint:** `GET /users/{login}`

**Description:** Retrieves detailed information about a specific user by their GitHub login/username.

**Path Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `login` | string | Yes | GitHub username/login |

**Example Request:**
```bash
GET /users/octocat
```

**Response:**
```json
{
  "github_rest_id": 123456,
  "github_graphql_id": "MDQ6VXNlcjEyMzQ1Ng==",
  "login": "octocat",
  "name": "The Octocat",
  "email": "octocat@github.com",
  "avatar_url": "https://avatars.githubusercontent.com/u/123456?v=4",
  "company": "GitHub",
  "location": "San Francisco",
  "bio": "GitHub's mascot",
  "followers": 1000,
  "following": 500,
  "type": "User",
  "created_at": "2011-01-25T18:32:29Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

**Error Responses:**
- `400 Bad Request` - Missing or invalid login parameter
- `404 Not Found` - User not found

---

## Common Response Fields

### Meta Information
All endpoints return a `meta` object with the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `request_id` | string | Unique identifier for the request |
| `timestamp` | integer | Unix timestamp of the response |
| `execution_time` | integer | Request execution time in milliseconds |

### User Object
User objects contain the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `github_rest_id` | integer | GitHub REST API user ID |
| `github_graphql_id` | string | GitHub GraphQL API user ID |
| `login` | string | GitHub username |
| `name` | string | User's display name (nullable) |
| `email` | string | User's email (nullable) |
| `avatar_url` | string | URL to user's avatar image (nullable) |
| `company` | string | User's company (nullable) |
| `location` | string | User's location (nullable) |
| `bio` | string | User's bio/description (nullable) |
| `followers` | integer | Number of followers |
| `following` | integer | Number of users being followed |
| `type` | string | User type (typically "User") |
| `created_at` | string | ISO 8601 timestamp of account creation |
| `updated_at` | string | ISO 8601 timestamp of last update |

## Error Handling

All endpoints return appropriate HTTP status codes:

- `200 OK` - Request successful
- `400 Bad Request` - Invalid request parameters
- `401 Unauthorized` - Missing or invalid authentication
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error

Error responses follow this format:

```json
{
  "error": "Error message describing what went wrong"
}
```
