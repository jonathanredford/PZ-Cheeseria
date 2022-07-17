<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://i.imgur.com/so4pGUb.png" width="200" alt="Nest Logo" /></a>
</p>

  <p align="center">The cheesiest cheese.</p>

## Description

A <a href="https://nestjs.com" target="_blank">NestJS</a> back end project for PZ Cheeseria

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Docker

```bash
# Build docker image
$ docker build -t pz-cheeseria-api .

# Run docker in container
$ docker run -p3001:3001 pz-cheeseria-api
```

## Test

```bash
# unit tests
$ npm run test
```

## Documentation

[View the documentation](http://localhost:3001/api)

[YAML](http://localhost:3001/api-yaml)

[JSON](http://localhost:3001/api-json)

## To Do

### Persist data in database

Implement persistent data in a database such as MySQL or MongoDB.

### Cacheing

Implement a cache/memory-store to improve response times. This could either be the built-in NestJS Cache or another cache store like Redis.

### Add filtering and pagination

On the findAll endpoint, allow filtering of results by search terms, colour, price per kg etc.
Additionally, implement pagination so that as the database of cheese expands, the number of results returned can be limited.

### Authentication

Implement authentication to ensure only requests with a valid API key can create or update resources
