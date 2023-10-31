# futbolIn

## Instructions

this app depends on `Node 21.1.0`, make sure to have that version or a superior one.

## 1. DB SetUP

You can use a local postgres database or run a container, if you choose the second option there is a docker-compose.yml file available in order to orquestate a new DB Container

In both cases you will need to create the DataBase and the Table Games Before running the project

```sql
CREATE DATABASE futbol_in_db;

CREATE TABLE games (
    id serial PRIMARY KEY,
    description VARCHAR(255),
    teamLocal VARCHAR(255),
    teamVisit VARCHAR(255),
    location VARCHAR(255),
    score VARCHAR(255),
    matchDate DATE
);

-- OPTIONAL...
INSERT INTO games (description, teamLocal, teamVisit, location, score, matchDate)
VALUES ('FIFA World Cup Final', 'Brazil', 'Germany', 'Stadium Maracanã, Rio de Janeiro', '2-0', '2022-12-18');

INSERT INTO games (description, teamLocal, teamVisit, location, score, matchDate)
VALUES ('UEFA Champions League Semi-Final', 'Manchester United', 'Real Madrid', 'Old Trafford, Manchester', '1-2', '2022-04-25');

INSERT INTO games (description, teamLocal, teamVisit, location, score, matchDate)
VALUES ('International Friendly', 'Spain', 'Italy', 'Estadio Santiago Bernabeu, Madrid', '3-2', '2022-06-10');
```

*Running Docker?*

locate the docker-compose.yml in `rest-api/docker-compose.yml` then run...

```shell
$ docker-compose -f docker-compose.yml up -d
```

## 2. Running the Backend Rest API

Into the folder called `rest-api` run...

```shell
$ npm use .
$ npm install
$ npm run
```

It will run in the port number *3000!*

## 3. Running the ReactJS App
Into the folder called `react-spa` run...

```shell
$ npm use .
$ npm install
$ npm run
```

It will run in the port number *3001!*

## Lastly...
Have fun :)