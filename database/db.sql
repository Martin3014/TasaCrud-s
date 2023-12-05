-- Creación de base de datos

CREATE DATABASE dbcrud;

use dbcrud;

-- Tabla de Tasa de cambio
CREATE TABLE Tasa (
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(100),
    fecha DATE NOT NULL

);
SHOW TABLES;

describe Tasa;
