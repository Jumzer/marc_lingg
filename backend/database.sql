-- DROP TABLE IF EXISTS images;
-- DROP TABLE IF EXISTS categories;
-- DROP TABLE IF EXISTS admins;

CREATE TABLE admins (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  mail VARCHAR(100),
  password VARCHAR(100)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE categories (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(100)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE images (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  src VARCHAR(255),
  alt VARCHAR(255),
  category_id INT NOT NULL,
  CONSTRAINT category_id_fk FOREIGN KEY (category_id) REFERENCES categories(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO admins (mail, password) VALUES ('victor.jumaire@outlook.fr', '$argon2id$v=19$m=65536,t=3,p=1$Ko4xdezcV74LV5pNp5vg0Q$vd5gmP2b/pdRYqbhckOoSi35KgQNzTF2Hi5eiz03zM8');
INSERT INTO categories (name) VALUES ('Report') , ('Portrait'), ('Street');

INSERT INTO images (src, alt, category_id) VALUES ('R1.jpg', 'Calanques', 1);

INSERT INTO images (src, alt, category_id) VALUES ('R2.jpg', 'CRS', 1);

INSERT INTO images (src, alt, category_id) VALUES ('R3.jpg', 'Manifestante', 1);

INSERT INTO images (src, alt, category_id) VALUES ('P1.jpg', "Italian Porn Actor 80's", 2);

INSERT INTO images (src, alt, category_id) VALUES ('P2.jpg', "Le réveil du juste", 2);

INSERT INTO images (src, alt, category_id) VALUES ('P3.jpg', "Caïd fragile", 2);

INSERT INTO images (src, alt, category_id) VALUES ('P1.jpg', 'palais de justice', 3);

INSERT INTO images (src, alt, category_id) VALUES ('P2.jpg', 'pigeons', 3);

INSERT INTO images (src, alt, category_id) VALUES ('P3.jpg', 'Montmartre', 3);