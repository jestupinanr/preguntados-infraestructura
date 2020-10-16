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
    id_imagen = 'https://pbs.twimg.com/media/CLmAF7NUsAAFLA8.jpg:large',
    respuesta = 1,
    opcion_1 = '["Wayuu", 1]',
    opcion_2 = '["u´Wa", 2]',
    opcion_3 = '["Caribe", 3]',
    clue = 'Tambien conocidos como guajiros son oborigenes de la peninsula de la guajira, sobre el mar del caribe, que habitan principalmente en territorios de la guajira en Colombia y el Zulian en Venezuela'

