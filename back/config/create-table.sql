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

CREATE TABLE Cases (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       day_number INT NOT NULL,
                       content JSON,  -- gift
                       is_opened BOOLEAN DEFAULT FALSE,
                       calendars_id INT,
                       CONSTRAINT fk_calendar FOREIGN KEY (calendars_id) REFERENCES Calendars(id) -- Clé étrangère

);





SHOW TABLES LIKE 'Users';
SHOW TABLES LIKE 'Calendars';
SHOW TABLES LIKE 'Cases';

