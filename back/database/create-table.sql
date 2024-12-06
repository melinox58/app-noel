DROP DATABASE melinox_noel;
CREATE DATABASE melinox_noel;
USE melinox_noel;

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Calendars (
    id INT AUTO_INCREMENT PRIMARY KEY,    -- Clé primaire
    user_id INT,                          -- Colonne pour la clé étrangère
    title VARCHAR(255),                   -- Titre
    theme VARCHAR(255),                   -- Thème
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES Users(id) -- Clé étrangère
);


CREATE TABLE Dates (
    id INT AUTO_INCREMENT PRIMARY KEY,                    -- Clé primaire
    calendars_id INT,                                     -- Colonne pour la clé étrangère
    date DATETIME NOT NULL,                               -- Colonne obligatoire
    description TEXT,                                     -- Texte
    CONSTRAINT fk_calendar FOREIGN KEY (calendars_id) REFERENCES Calendars(id) -- Clé étrangère
);


SHOW TABLES LIKE 'Users';
SHOW TABLES LIKE 'Calendars';
SHOW TABLES LIKE 'Dates';

