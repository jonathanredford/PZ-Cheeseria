<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://i.imgur.com/so4pGUb.png" width="200" alt="Nest Logo" /></a>
</p>

  <p align="center">The cheesiest cheese.</p>

## Description

A <a href="https://nextjs.org" target="_blank">Next.js</a> front end project for PZ Cheeseria

## Installation

```bash
$ npm install
```

## Environment variables

Create a .env file in the project root with the following entry

```
NEXT_PUBLIC_API_SERVER_URL=http://localhost:3001
```

## Running the app

```bash
# development
$ npm run dev

# production mode
$ npm run build
$ npm run start
```

## To Do

### Static generation

Implement Next's getStaticProps() and getStaticPaths() to generate static pages by fetching data from the API at build time to increase performance for the end user while also reducing the hits to the API server.
Additionally, implement Next's ISR (Incremental Static Regeneration) so that when data is added or updated in the database, the static page is regenerated without needing to rebuild the entire site.

### Search feature

Add a search box in the navbar allowing customers to search for cheese by name, colour, price per kg etc.

### UI/UX Design

Design a better UI/UX that aligns with PZ Cheeseria's brand and desired customer experience.
