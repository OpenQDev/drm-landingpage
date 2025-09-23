# Repository API Endpoints Documentation

## Endpoints

### 1. Get All Repositories

**Endpoint:** `GET /repos`

**Description:** Retrieves a paginated list of all repositories with optional filtering by dependencies.

**Query Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `page` | integer | No | 1 | Page number for pagination |
| `per_page` | integer | No | 30 | Number of items per page (max: 100) |
| `dependency_names` | string | No | - | Comma-separated list of dependency names to filter by |

**Example Request:**
```bash
GET /repos?page=1&per_page=50&dependency_names=react,typescript,dependency_files=package.json
```

**Response:**
```json
{
  "data": [
    {
      "internal_id": 1,
      "github_rest_id": 123456,
      "github_graphql_id": "MDEwOlJlcG9zaXRvcnkxMjM0NTY=",
      "url": "https://github.com/octocat/Hello-World",
      "name": "Hello-World",
      "full_name": "octocat/Hello-World",
      "private": false,
      "owner_login": "octocat",
      "owner_avatar_url": "https://avatars.githubusercontent.com/u/123456?v=4",
      "description": "My first repository on GitHub!",
      "homepage": "https://github.com",
      "fork": false,
      "forks_count": 10,
      "archived": false,
      "disabled": false,
      "license": "MIT",
      "language": "JavaScript",
      "stargazers_count": 100,
      "watchers_count": 100,
      "open_issues_count": 5,
      "has_issues": true,
      "has_discussions": false,
      "has_projects": false,
      "created_at": 1642233600,
      "updated_at": 1642320000,
      "pushed_at": 1642320000,
      "visibility": "public",
      "size": 1024,
      "default_branch": "main",
      "dependencies": []
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

### 2. Get Repository by Owner and Name

**Endpoint:** `GET /repos/{owner}/{name}`

**Description:** Retrieves detailed information about a specific repository by its owner and name.

**Path Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `owner` | string | Yes | Repository owner username |
| `name` | string | Yes | Repository name |

**Example Request:**
```bash
GET /repos/octocat/Hello-World
```

**Response:**
```json
{
  "internal_id": 1,
  "github_rest_id": 123456,
  "github_graphql_id": "MDEwOlJlcG9zaXRvcnkxMjM0NTY=",
  "url": "https://github.com/octocat/Hello-World",
  "name": "Hello-World",
  "full_name": "octocat/Hello-World",
  "private": false,
  "owner_login": "octocat",
  "owner_avatar_url": "https://avatars.githubusercontent.com/u/123456?v=4",
  "description": "My first repository on GitHub!",
  "homepage": "https://github.com",
  "fork": false,
  "forks_count": 10,
  "archived": false,
  "disabled": false,
  "license": "MIT",
  "language": "JavaScript",
  "stargazers_count": 100,
  "watchers_count": 100,
  "open_issues_count": 5,
  "has_issues": true,
  "has_discussions": false,
  "has_projects": false,
  "created_at": 1642233600,
  "updated_at": 1642320000,
  "pushed_at": 1642320000,
  "visibility": "public",
  "size": 1024,
  "default_branch": "main"
}
```

**Error Responses:**
- `400 Bad Request` - Missing or invalid owner/name parameters
- `404 Not Found` - Repository not found

---

## Common Response Fields

### Meta Information
All endpoints return a `meta` object with the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `request_id` | string | Unique identifier for the request |
| `timestamp` | integer | Unix timestamp of the response |
| `execution_time` | integer | Request execution time in milliseconds |

### Repository Object
Repository objects contain the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `internal_id` | integer | Internal repository ID |
| `github_rest_id` | integer | GitHub REST API repository ID |
| `github_graphql_id` | string | GitHub GraphQL API repository ID |
| `url` | string | Repository URL |
| `name` | string | Repository name |
| `full_name` | string | Full repository name (owner/name) |
| `private` | boolean | Whether the repository is private (nullable) |
| `owner_login` | string | Repository owner username |
| `owner_avatar_url` | string | Owner's avatar URL (nullable) |
| `description` | string | Repository description (nullable) |
| `homepage` | string | Repository homepage URL (nullable) |
| `fork` | boolean | Whether the repository is a fork (nullable) |
| `forks_count` | integer | Number of forks (nullable) |
| `archived` | boolean | Whether the repository is archived (nullable) |
| `disabled` | boolean | Whether the repository is disabled (nullable) |
| `license` | string | Repository license (nullable) |
| `language` | string | Primary programming language (nullable) |
| `stargazers_count` | integer | Number of stars (nullable) |
| `watchers_count` | integer | Number of watchers (nullable) |
| `open_issues_count` | integer | Number of open issues (nullable) |
| `has_issues` | boolean | Whether issues are enabled (nullable) |
| `has_discussions` | boolean | Whether discussions are enabled (nullable) |
| `has_projects` | boolean | Whether projects are enabled (nullable) |
| `created_at` | integer | Unix timestamp of creation (nullable) |
| `updated_at` | integer | Unix timestamp of last update (nullable) |
| `pushed_at` | integer | Unix timestamp of last push (nullable) |
| `visibility` | string | Repository visibility (nullable) |
| `size` | integer | Repository size in KB (nullable) |
| `default_branch` | string | Default branch name (nullable) |
| `dependencies` | array | Array of repository dependencies (nullable) |

### Commit Object
Commit objects contain the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `commit_hash` | string | Git commit hash |
| `author_email` | string | Author's email address |
| `author_date` | integer | Unix timestamp of author date (nullable) |
| `committer_email` | string | Committer's email address |
| `committer_date` | integer | Unix timestamp of committer date (nullable) |
| `message` | string | Commit message |
| `repo_url` | string | Repository URL |

### Dependency Object
Dependency objects contain the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `dependency_name` | string | Name of the dependency |
| `dependency_file` | string | File where the dependency is declared |

### Repository Dependency Object
Repository dependency objects contain the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | Repository URL |
| `first_use_date` | integer | Unix timestamp of first use (nullable) |
| `last_use_date` | integer | Unix timestamp of last use (nullable) |
| `updated_at` | integer | Unix timestamp of last update (nullable) |
| `status` | string | Dependency status (nullable) |
| `dependency` | object | Dependency information object |

## Pagination

### Page-based Pagination
Used by `/repos` and `/repos/{owner}/{name}/commits` endpoints:

- `page` - Page number (starts at 1)
- `per_page` - Items per page (max 100)

Pagination information is included in the response:

```json
{
  "pagination": {
    "page": 1,
    "per_page": 30,
    "next_page": 2,
    "prev_page": 0,
    "has_more": true
  }
}
```

### Page-based Pagination
Used by all endpoints including `/repos/{owner}/{name}/dependencies`:

- `page` - Page number (starts at 1)
- `per_page` - Items per page (max 100)

Pagination information is included in the response:

```json
{
  "pagination": {
    "page": 1,
    "per_page": 30,
    "next_page": 2,
    "prev_page": 0,
    "has_more": true
  }
}
```

### Link Headers
Page-based pagination also includes GitHub-style Link headers:

```
Link: <https://drm.openq.dev/public-api/repos?page=1&per_page=30>; rel="first",
      <https://drm.openq.dev/public-api/repos?page=2&per_page=30>; rel="next",
      <https://drm.openq.dev/public-api/repos?page=10&per_page=30>; rel="last"
```

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
