CREATE DATABASE isleOfManTT;

USE isleOfManTT;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50) UNIQUE,
	senha VARCHAR(100),
    data_Cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE obitos_por_decada (
    id INT AUTO_INCREMENT PRIMARY KEY,
    decada CHAR(4) UNIQUE NOT NULL,
    total_obitos INT NOT NULL
);

INSERT INTO obitos_por_decada (decada, total_obitos) VALUES
(1910, 10),
(1920, 13),
(1930, 22),
(1940, 5),
(1950, 21),
(1960, 32),
(1970, 31),
(1980, 24),
(1990, 21),
(2000, 19),
(2010, 26),
(2020, 25);

CREATE TABLE DashboardDados (
    id INT AUTO_INCREMENT,
    id_usuario INT,
    nota INT,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id),
    PRIMARY KEY (id, id_usuario)
);

SELECT ROUND(AVG(nota)) AS "Médio Geral", MAX(nota) AS "Maior Nota"
FROM DashboardDados
JOIN usuario
ON DashboardDados.id_usuario = usuario.id
WHERE id_usuario = 1;

SELECT nota FROM DashboardDados 
JOIN usuario ON DashboardDados.id_usuario = usuario.id 
WHERE usuario.id = 1 LIMIT 10;

SELECT 
    id AS 'ID',
    nome AS 'Nome do Usuário',
    email AS 'E-Mail',
    senha AS 'Senha',
    data_Cadastro AS 'Data de Cadastro'
FROM usuario;

SELECT * FROM obitos_por_decada ORDER BY decada;

SELECT SUM(total_obitos) AS "Total de Obitos" FROM obitos_por_decada;

SELECT u.nome AS "Nome do Usuário", d.nota AS "Maior Pontuação"
FROM DashboardDados d
JOIN usuario u ON d.id_usuario = u.id
WHERE d.nota = (SELECT MAX(nota) FROM DashboardDados);

SELECT MAX(nota) AS "Maior Nota" FROM DashboardDados;

SELECT * FROM DashboardDados;