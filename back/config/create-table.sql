
CREATE DATABASE IF NOT EXISTS  melinox_noel;
USE melinox_noel;

CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Calendars (
    id INT AUTO_INCREMENT PRIMARY KEY,    -- Clé primaire
    user_id INT,                          -- Colonne pour la clé étrangère
    title VARCHAR(255),                   -- Titre
    theme VARCHAR(255),                   -- Thème
    alt VARCHAR(255),                     -- alt
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES Users(id) -- Clé étrangère
);


CREATE TABLE IF NOT EXISTS Cases (
    id INT AUTO_INCREMENT PRIMARY KEY,
    day_number INT NOT NULL,
    content JSON,  -- gift
    is_opened BOOLEAN DEFAULT FALSE,
    calendars_id INT,
    CONSTRAINT fk_calendar FOREIGN KEY (calendars_id) REFERENCES Calendars(id) -- Clé étrangère

);

-- voir si les tables sont bien crées
SHOW TABLES LIKE 'Users';
SHOW TABLES LIKE 'Calendars';
SHOW TABLES LIKE 'Cases';



ALTER TABLE Calendars MODIFY COLUMN user_id INT NULL;

-- Insertion des données pour création de l'app
INSERT INTO Calendars (user_id, title, theme, alt)
VALUES 
    (NULL, NULL, 'front/src/assets/img/background/13450.jpg', 'Fond avec reflets de lumière dorée'),
    (NULL, NULL, 'front/src/assets/img/background/4510871.jpg', 'Fond avec reflets de lumière irisée'),
    (NULL, NULL, 'front/src/assets/img/background/6537135.jpg', 'Fond avec reflets de lumière blanche'),
    (NULL, NULL, 'front/src/assets/img/background/3082604.jpg', 'Dessin bonhomme de Noël sur une planche de bois, décorée avec des feuilles'),
    (NULL, NULL, 'front/src/assets/img/background/6205121.jpg', 'Dessin bonhomme de neige avec un renne, un cadeau, une étoile et un chapeau de Père Noël'),
    (NULL, NULL, 'front/src/assets/img/background/7962235.jpg', 'Tête de renne décorée comme un sapin de Noël avec des lunettes de soleil'),
    (NULL, NULL, 'front/src/assets/img/background/9711201.jpg', 'Merry Christmas avec un chocolat chaud, une bougie, un cadeau et des petites étoiles'),
    (NULL, NULL, 'front/src/assets/img/background/7962235.jpg', 'Merry Christmas avec un chocolat chaud, une bougie, un cadeau et des petites étoiles'),
    (NULL, NULL, 'front/src/assets/img/background/christmas-season-6838063_1280.jpg', 'Une famille de bonhommes de neige, sous la neige'),
    (NULL, NULL, 'front/src/assets/img/background/christmas-background-3767131_1280.jpg', 'Fond avec reflets de lumière dorée, une suspension de boules de Noël blanches'),
    (NULL, NULL, 'front/src/assets/img/background/christmas-6805045_1280.jpg', 'Cadeau posé sur une table avec une bougie blanche'),
    (NULL, NULL, 'front/src/assets/img/background/freepik__candid-image-photography-natural-textures-highly-r__29953.jpeg', 'Paysage d\'hiver, forêt de sapins en arrière-plan. Premier plan, un sapin de Noël décoré avec des cadeaux en dessous'),
    (NULL, NULL, 'front/src/assets/img/background/freepik__candid-image-photography-natural-textures-highly-r__29954.jpeg', 'Extérieur de Noël'),
    (NULL, NULL, 'front/src/assets/img/background/freepik__candid-image-photography-natural-textures-highly-r__29955.jpeg', 'Extérieur de Noël avec un sapin et une guirlande électrique'),
    (NULL, NULL, 'front/src/assets/img/background/freepik__candid-image-photography-natural-textures-highly-r__29956.jpeg', 'Petites maisons en pain d\'épice posées sur une table'),
    (NULL, NULL, 'front/src/assets/img/background/freepik__candid-image-photography-natural-textures-highly-r__29957.jpeg', 'Boule de Noël verte décorée de houx'),
    (NULL, NULL, 'front/src/assets/img/background/freepik__candid-image-photography-natural-textures-highly-r__29958.jpeg', 'Boule de Noël rouge décorée avec des dessins dorés'),
    (NULL, NULL, 'front/src/assets/img/background/freepik__candid-image-photography-natural-textures-highly-r__29959.jpeg', 'Boule de Noël bleue décorée de flocons blancs'),
    (NULL, NULL, 'front/src/assets/img/background/holiday-6903031_1280.jpg', 'Table en bois décorée de 3 bougies blanches, de branches de sapin et de houx'),
    (NULL, NULL, 'front/src/assets/img/background/preview.jpg', 'Fond lumineux rouge scintillant avec en haut et en bas, une myriade de flocons blancs'),
    (NULL, NULL, 'front/src/assets/img/background/v1055-a-07a.jpg', 'Dessin de mains tenant chacune une bougie, un petit sapin de Noël et un cadeau');
