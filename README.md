## Introduction
This is a backend project created with Node.js and Express.js. PostgreSQL is used as the database. For ORM, Sequelize is used. It is written entirely in JavaScript. This repository contains only the authentication part and a basic endpoint to test the JWT token verification.

## Setup
- Clone the repo
- Run ***npm install***
- Copy the contents of the .env.template file and put it in a .env file
- Install and setup postgres and a administration and development platform for postgres.(I suggest pgAdmin)
- Create a user and a database and put the credentials in the .env file
- Run ***npm run migrate-fresh-seed***(This will create all the tables and put dummy data from seed file in the tables)
