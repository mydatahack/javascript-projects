# Making GraphQL API with Prisma MySQL

## Get started

Local Dev (at the moment)

```bash
# Start docker - using MySQL
docker-compose -f docker-compose.local.yml up -d
# Install Dependencies
yarn install
# Run migration (optionally, we can pass the argument)
yarn prisma-migrate --name init
# run fixture
yarn fixture
# Start local server and go to localhost:4000/graphql
yarn start-local
```




