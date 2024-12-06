DROP DATABASE osez_noel;

CREATE DATABASE osez_noel;
USE osez_noel;

CREATE TABLE Users (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       name VARCHAR(255) NOT NULL,
                       email VARCHAR(255) UNIQUE NOT NULL,
                       password VARCHAR(255) NOT NULL
);

CREATE TABLE Calendars (
                           id INT AUTO_INCREMENT PRIMARY KEY,
                           user_id FOREIGN KEY (Users_id) REFERENCES Users(id),
                           title VARCHAR(255),
                           theme VARCHAR(255),
);

CREATE TABLE Dates (
                           id INT AUTO_INCREMENT PRIMARY KEY,
                           calendars_id FOREIGN KEY (Calendars_id) REFERENCES Calendars(id),
                           date DATETIME NOTNULL,
                           description TEXT (255)
);