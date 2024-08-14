# Hangry Case Study

Welcome to the repository of hangry backend!

This repository contains simple backend configuration for managing user data. This repository also provide comprehensive guide to understanding, setting up, and maintaining the backend.

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [API Documentation](#api-documentation)

## Introduction
### Project Overview
This project is a backend solution for hangry case study. With this backend, developer can easily manage user data with simple CRUD operations.

### Technology Stack
- [Node.js](https://nodejs.org/en)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)

## Getting Started
This section will guide you to set up the project on your local machine. 
### Prerequisites
Before you begin, ensure you have the following software installed:
- [Node.js](https://nodejs.org/en) (version 18.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) for Local Database
- [Git](https://git-scm.com/)

### Installation
1. Clone the repository
```
git clone https://github.com/hafizhdh/hangry-backend.git
```
2. Install dependencies
```
yarn install
```
or
```
npm install
```
3. Set up environment variables

Create a `.env` file in the root directory of the project and add the following environment variables:
```
DATABASE_URL=postgres://<username>:<password>@localhost:<port>/<db>
POSTGRES_PASSWORD=<your_password>
POSTGRES_DB=<your_db>
POSTGRES_USER=<your_user>
```
4. Database Setup

Run the following command to push existing database schema into your local database:
```
npx prisma db push
```
Or you can set up the database in docker container and run previous command
```
docker-compose up -d
```

5. Start the application in development mode
```
yarn dev
```
or
```
npm run dev
```
The server should now be running at `http://localhost:7878`

## Project Structure
Below is an overview of the project's directory layout and a brief explanation of each component.
```
hangry-backend/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── src/
│   ├── dto/
│   ├── model/
│   ├── plugin/
│   │   └── prisma/
│   ├── user/
│   │   ├── user.controller.ts
│   │   └── user.service.ts
│   ├── app.ts
│   ├── seed.ts
│   └── utils.ts
├── .env
├── .gitignore
├── docker-compose.yml
├── package.json
├── package-log.json
├── README.md
└── tsconfig.json
```
### `Root Directory`
- `.env`: Contains environment variables used in the project.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `README.md`: Provides an overview of the project, setup instructions, and other essential information.
- `package*.json`: Lists project dependencies and scripts.
- `docker-compose.yml`: Configuration file to run database on docker container
- `tsconfig.json`: Typescript configuraion file

### `prisma/`
- `migrations`: Database migrations
- `schema.prisma`: Database model configuration

### `src/`
Main source directory of the project
   - `user/`: CRUD APIs for user data
      - `user.controller.ts`: Handles HTTP requests and responses for user-related endpoints.
      - `user.service.ts`: Business logic for user CRUD operations.
- `plugin`/: Utilities features and integrations with external services
   - `prisma/`: Prisma client set up and configuration
- `app.ts`: Entry point for starting this backend
- `seed.ts`: Database seeding with initial data
- `utils.ts`: Contains helper function to retrieve request body

## API Documentation
This section provides detailed information on how to interact with our APIs for managing users. Each endpoint is documented with its URL, HTTP method, parameters, request body, response format, and examples.

### <a name="_tmjd35mjtsyg"></a>Register User API
###### <a name="_ulz66mlx0fsg"></a>*API Request*
|**type**|***Value***|
| :- | :- |
|HTTP Method|POST|
|URL|/api/user|

###### <a name="_qqxbe5jn059v"></a>*Request Body*
###### <a name="_39eted6d3wdk"></a>*Request Body Sample*

```
{
  "name"  : "Vestia Zeta",
  "email" : "vestia@zeta.com",
  "dob"   : "12/08/2002",
}
```
###### <a name="_puocxcwfue9w"></a>*Request Body Description*

|**Parameter**|**Data Type**|**M / O / C**|**Description**|***Value***|
| :- | :- | :- | :- | :- |
|name|string|M|User name|<p>Example:</p><p>**Vestia Zeta**</p>|
|email|string|M|Email to be registered|<p>Example:</p><p>**vestia@zeta.com**</p>|
|dob|string|M|User date of birth|<p>Example:</p><p>**12/08/2004**</p>|

###### <a name="_fenluhnuqxhb"></a>*API Response*
|**Type**|***Value***|
| :- | :- |
|HTTP Status|201|
|Result|SUCCESS|

###### <a name="_ok53j9gghrko"></a>*Response Body Sample*

```
{
    "id": "b4b34681-c484-47d4-93b4-df5f97b58192",
    "name": "Vestia Zeta",
    "email": "vestia@zeta.com",
    "dob": "2002-08-10T17:00:00.000Z",
    "createdAt": "2024-08-13T14:06:30.715Z",
    "updatedAt": "2024-08-13T14:06:30.715Z"
}
```
### <a name="_nirmx1njo3yl"></a>Error Codes
|**Error Code**|**Description**|
| :- | :- |
|400|Any or all of the request body are empty|
|409|Email has already been taken|

### <a name="_xruuzkezgio9"></a>Get User Information API
###### <a name="_67hr7nkca6u8"></a>*API Request*
|**Type**|***Value***|
| :- | :- |
|HTTP Method|GET|
|URL|/api/user/{id}|

###### <a name="_o738dtwxubxm"></a>*Request Path Param Sample*
|**Key**|***Value***|
| :-: | :-: |
|id (user)|b4b34681-c484-47d4-93b4-df5f97b58192|

###### <a name="_wf50y1krykqd"></a>*API Response*
|**Type**|***Value***|
| :- | :- |
|HTTP Status|200|
|Result|SUCCESS|

###### <a name="_pagw8h9ptozz"></a>*Response Body Sample*
```
{
    "id": "b4b34681-c484-47d4-93b4-df5f97b58192",
    "name": "Vestia Zeta",
    "email": "vestia@zeta.com",
    "dob": "2002-08-10T17:00:00.000Z",
    "createdAt": "2024-08-13T14:06:30.715Z",
    "updatedAt": "2024-08-13T14:06:30.715Z"
}
```
### <a name="_nirmx1njo3yl"></a>Error Codes
|**Error Code**|**Description**|
| :- | :- |
|400|Invalid user id|
|404|User not found|

### <a name="_n3reqh30swg6"></a>Get All User API
###### <a name="_kf26x1pbue39"></a>*API Request*
|**Type**|***Value***|
| :-: | :-: |
|HTTP Method|GET|
|URL|/api/user|

###### <a name="_wf50y1krykqd"></a>*API Response*
|**Type**|***Value***|
| :- | :- |
|HTTP Status|200|
|Result|SUCCESS|

###### <a name="_pagw8h9ptozz"></a>*Response Body Sample*
```
[
  {
    "id": "877dc8e9-53ec-41e1-9762-b70368044561",
    "name": "Moona Hoshinova",
    "email": "hoshinova@moona.com",
    "dob": "2002-11-07T17:00:00.000Z",
    "createdAt": "2024-08-13T09:28:35.530Z",
    "updatedAt": "2024-08-13T09:28:35.530Z"
  },
  {
    "id": "b4b34681-c484-47d4-93b4-df5f97b58192",
    "name": "Vestia Zeta",
    "email": "vestia@zeta.com",
    "dob": "2002-08-10T17:00:00.000Z",
    "createdAt": "2024-08-13T14:06:30.715Z",
    "updatedAt": "2024-08-13T14:06:30.715Z"
  }
]
```
### <a name="_xruuzkezgio9"></a>Update User Information API
###### <a name="_67hr7nkca6u8"></a>*API Request*
|**Type**|***Value***|
| :- | :- |
|HTTP Method|PUT|
|URL|/api/user/{id}|

###### <a name="_o738dtwxubxm"></a>*Request Path Param Sample*
|**Key**|***Value***|
| :-: | :-: |
|id (user)|b4b34681-c484-47d4-93b4-df5f97b58192|

###### <a name="_qqxbe5jn059v"></a>*Request Body*
###### <a name="_39eted6d3wdk"></a>*Request Body Sample*

```
{
  "name"  : "Vestia Cat",
  "email" : "vestia@cat.com",
  "dob"   : "13/08/2002",
}
```
###### <a name="_puocxcwfue9w"></a>*Request Body Description*

|**Parameter**|**Data Type**|**M / O / C**|**Description**|***Value***|
| :- | :- | :- | :- | :- |
|name|string|M|Updated name|<p>Example:</p><p>**Vestia Cat**</p>|
|email|string|M|Updated email|<p>Example:</p><p>**vestia@cat.com**</p>|
|dob|string|M|Updated date of birth|<p>Example:</p><p>**13/08/2004**</p>|

###### <a name="_wf50y1krykqd"></a>*API Response*
|**Type**|***Value***|
| :- | :- |
|HTTP Status|200|
|Result|SUCCESS|

###### <a name="_pagw8h9ptozz"></a>*Response Body Sample*
```
{
    "id": "b4b34681-c484-47d4-93b4-df5f97b58192",
    "name": "Vestia Cat",
    "email": "vestia@cat.com",
    "dob": "2002-08-12T17:00:00.000Z",
    "createdAt": "2024-08-13T14:06:30.715Z",
    "updatedAt": "2024-08-13T15:12:30.715Z"
}
```
### <a name="_nirmx1njo3yl"></a>Error Codes
|**Error Code**|**Description**|
| :- | :- |
|400|Invalid user id|
|400|All of request body are empty|
|404|User not found|

### <a name="_xruuzkezgio9"></a>Delete User API
###### <a name="_67hr7nkca6u8"></a>*API Request*
|**Type**|***Value***|
| :- | :- |
|HTTP Method|DELETE|
|URL|/api/user/{id}|

###### <a name="_o738dtwxubxm"></a>*Request Path Param Sample*
|**Key**|***Value***|
| :-: | :-: |
|id (user)|b4b34681-c484-47d4-93b4-df5f97b58192|

###### <a name="_wf50y1krykqd"></a>*API Response*
|**Type**|***Value***|
| :- | :- |
|HTTP Status|200|
|Result|SUCCESS|

###### <a name="_pagw8h9ptozz"></a>*Response Body Sample*
```
{
    "message": "Successfully delete an user"
}
```
### <a name="_nirmx1njo3yl"></a>Error Codes
|**Error Code**|**Description**|
| :- | :- |
|400|Invalid user id|
|404|User not found|

### Run in Postman
For more practical testing, you can refer to this postman collection.

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/23438759-c3f8093b-e427-4530-8b2f-8de68b07a90e?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D23438759-c3f8093b-e427-4530-8b2f-8de68b07a90e%26entityType%3Dcollection%26workspaceId%3D3a215f11-1120-469a-a123-5f7b572679c2#?env%5Bhangry%5D=W3sia2V5IjoiYmFzZV91cmwiLCJ2YWx1ZSI6Imh0dHA6Ly9sb2NhbGhvc3Q6Nzg3OCIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiaHR0cDovL2xvY2FsaG9zdDo3ODc4Iiwic2Vzc2lvbkluZGV4IjowfV0=)

## Deployment
This section will contain information about how this backend is deployed and accessible to all users on the internet.
### Technology stack
- [Google Cloud Run](https://cloud.google.com/run?hl=en)
- [Supabase](https://supabase.com/)
  
We decided to deploy this backend to the serverless service provided by Google Cloud Platform. That's because we don't really want to mess up with the infrastructure behind it.

For database, we are using Supabse as cloud SQL database for better flexibility.

### Automated Deployment
This backend use [Cloud Build](https://cloud.google.com/build?hl=en) for serverless CI/CD. That means every change pushed into the `main` branch will trigger a cloud build and create a new revision for the backend service.

### Deployed Link
[hangry-backend](https://hangry-backend-qmpzoue2ma-et.a.run.app)
