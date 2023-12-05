-- Creación de base de datos

/*CREATE DATABASE dbcrud;

use dbcrud;

-- Tabla de Tasa de cambio
CREATE TABLE Tasa (
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(100),
    fecha DATE NOT NULL

);
SHOW TABLES;

describe Tasa; */


-- Creación de base de datos

CREATE DATABASE dbcrud;

use dbcrud;

-- Tabla de Tasa de cambio
CREATE TABLE Tasa (
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    colones DECIMAL(65, 2) NOT NULL,
    usd DECIMAL(10, 2) NOT NULL,
    fecha DATE NOT NULL

);
SHOW TABLES;

describe Tasa;
