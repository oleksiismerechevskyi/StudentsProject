Development node version: 16.14.0
Docker compose v3
Make

docker compose exec web npm run migrate up db-init-migration --migration-filename-format=sql

How to build a project locally:
- npm i - install all necessary packages for the project
- npm build - build a project

How to run a project via make:
- make run - run docker containers with web and db ( -s flag use for detached mode )
- make stop - stop the containers
- make create - create the containers
- make clean - delete all containers
- make migrate - run first init migrate for postgres
- make dropmigrate - drop first init migrate for postgres

How to run a project via docker compose:
- docker compose up - run docker containers with web and db ( -d flag use for detached mode )
- docker compose down - stop the containers
- docker compose create - create the containers
- docker compose rm web && docker compose rm postgres - delete all containers
- docker compose exec web npm run migrate up db-init-migration --migration-filename-format=sql - run first init migrate for postgres
- docker compose exec web npm run migrate down db-init-migration --migration-filename-format=sql - drop first init migrate for postgres