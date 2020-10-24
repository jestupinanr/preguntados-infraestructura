CREATE DATABASE ams_db;

use ams_db;

CREATE TABLE USER (
id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre varchar (180),
nickName varchar (100),
correo varchar (100),
carrera varchar (100),
id_imagen varchar (200),
create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

Create table QUESTION(
    id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    text_question varchar (300),
    id_imagen varchar (200),
    respuesta int (8),
    opcion_1 varchar (200), 
    opcion_2 varchar (200),
    opcion_3 varchar (200),
    clue varchar (200)
)
SELECT 
    SCORE.score,
    USER.nombre,
    USER.nickName,
    USER.correo,
    USER.carrera,
    USER.id_imagen
FROM SCORE 
JOIN USER 
    ON SCORE.id_user= USER.id
ORDER BY  SCORE.score ASC;

Create table SCORE (
     id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
     id_user int (8),
     score int (10)
)


create table IMAGEN (
    id_image int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    url_img varchar (200)
)

insert into QUESTION set
    text_question = '¿Cuál es el nombre de esta sede?',
    id_imagen = '../assets/images/tairona.jpg',
    respuesta = 3,
    opcion_1 = 'Awa',
    opcion_2 = 'Wayuu',
    opcion_3 = 'Tairona',
    clue = 'Fueron un grupo indígena que habitaba en los departamentos colombianos de Magdalena, Guajira y Cesar, en las faldas de la Sierra nevada de santa marta'
insert into SCORE set
    id_user = 8,
    score = 1245,

select 
id_user,
score
from SCORE
ORDER BY score DESC;