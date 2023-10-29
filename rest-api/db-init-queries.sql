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

INSERT INTO games (description, teamLocal, teamVisit, location, score, matchDate)
VALUES ('FIFA World Cup Final', 'Brazil', 'Germany', 'Stadium Maracanã, Rio de Janeiro', '2-0', '2022-12-18');

INSERT INTO games (description, teamLocal, teamVisit, location, score, matchDate)
VALUES ('UEFA Champions League Semi-Final', 'Manchester United', 'Real Madrid', 'Old Trafford, Manchester', '1-2', '2022-04-25');

INSERT INTO games (description, teamLocal, teamVisit, location, score, matchDate)
VALUES ('International Friendly', 'Spain', 'Italy', 'Estadio Santiago Bernabeu, Madrid', '3-2', '2022-06-10');
