CREATE DATABASE isleOfManTT;

DROP DATABASE isleOfManTT;

USE isleOfManTT;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50) UNIQUE,
	senha VARCHAR(100),
    data_Cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE usuario;

SELECT 
id AS 'ID',
nome AS 'Nome do Usuário',
email AS 'E-Mail',
senha AS 'Senha',
data_Cadastro AS 'Data de Cadastro'
FROM usuario;


CREATE TABLE corredores (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  nacionalidade VARCHAR(50),
  idade INT,
  vitorias INT DEFAULT 0,
  podiums INT DEFAULT 0,
  corridas INT DEFAULT 0,     
  ano_estreia INT,            
  ano_aposentadoria INT,
  status VARCHAR(20),             
  equipe VARCHAR(50),             
  melhor_volta TIME,               
  recorde_velocidade DECIMAL(5,2)  
);

INSERT INTO corredores (nome, nacionalidade, idade, vitorias, podiums, corridas, ano_estreia, ano_aposentadoria, status, equipe, melhor_volta, recorde_velocidade) VALUES
('Peter Hickman', 'Reino Unido', 37, 13, 20, 35, 2014, NULL, 'Ativo', 'FHO Racing BMW', '00:16:36', 136.358),
('Ian Hutchinson', 'Reino Unido', 45, 16, 27, 40, 2003, NULL, 'Ativo', 'Milenco by Padgetts Honda', '00:16:50', 133.099),
('Michael Dunlop', 'Irlanda do Norte', 35, 25, 35, 50, 2007, NULL, 'Ativo', 'MD Racing / Hawk Racing Honda', '00:16:39', 135.531),
('Joey Dunlop', 'Irlanda do Norte', NULL, 26, 40, 78, 1976, 2000, 'Falecido', 'Honda Britain', '00:18:00', 123.00),
('John McGuinness', 'Reino Unido', 52, 23, 47, 100, 1996, NULL, 'Ativo', 'Honda Racing UK', '00:16:53', 132.701),
('David Jefferies', 'Reino Unido', NULL, 9, 14, 15, 1996, 2003, 'Falecido', 'V&M Yamaha', '00:17:15', 127.29),
('Steve Hislop', 'Reino Unido', NULL, 11, 15, 20, 1985, 1994, 'Falecido', 'Honda / Norton', '00:17:00', 121.0);

SELECT 
  nome AS 'Nome do Piloto',
  nacionalidade AS 'Nacionalidade',
  idade AS 'Idade',
  vitorias AS 'Total de Vitórias',
  podiums AS 'Total de Pódios',
  corridas AS 'Total de Corridas',
  ano_estreia AS 'Ano de Estreia',
  ano_aposentadoria AS 'Ano de Aposentadoria',
  status AS 'Status',
  equipe AS 'Equipe',
  melhor_volta AS 'Melhor Volta',
  recorde_velocidade AS 'Recorde de Velocidade (mph)'
FROM corredores;

CREATE TABLE obitos_corridas_superbikes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome_piloto VARCHAR(100) NOT NULL,
  ano INT NOT NULL,
  idade INT,
  nacionalidade VARCHAR(50),
  local_acidente VARCHAR(100),
  descricao_acidente TEXT,
  categoria VARCHAR(50) DEFAULT 'Superbikes',
  evento VARCHAR(100) DEFAULT 'Isle of Man TT',
  data_corrida DATE,
  observacoes TEXT
);

INSERT INTO obitos_corridas_superbikes (nome_piloto, ano, idade, nacionalidade, local_acidente, descricao_acidente, data_corrida, observacoes) VALUES
('Dan Kneen', 2018, 30, 'Reino Unido', 'Churchtown', 'Acidente durante a sessão de qualificação da Superbike TT.', '2018-05-30', 'Fonte: bikesrepublic.com'),
('Daley Mathison', 2019, 27, 'Reino Unido', 'Snugborough', 'Acidente fatal na volta 3 da corrida Superbike TT.', '2019-06-03', 'Fonte: en.wikipedia.org'),
('Davey Lambert', 2017, 48, 'Reino Unido', 'Greeba Castle', 'Acidente na volta 3 da corrida Superbike TT; faleceu posteriormente no hospital.', '2017-06-04', 'Fonte: motorcycles.news'),
('David Jefferies', 2003, 30, 'Reino Unido', 'Crosby', 'Acidente fatal durante os treinos da Superbike TT; colidiu com um muro a alta velocidade.', '2003-05-29', 'Fonte: en.wikipedia.org'),
('Karl Harris', 2014, 34, 'Reino Unido', 'Joey''s', 'Acidente fatal durante a corrida Superbike TT.', '2014-06-03', 'Fonte: en.wikipedia.org');

SELECT 
  id AS 'ID',
  nome_piloto AS 'Nome do Piloto',
  ano AS 'Ano do Óbito',
  idade AS 'Idade',
  nacionalidade AS 'Nacionalidade',
  local_acidente AS 'Local do Acidente',
  descricao_acidente AS 'Descrição do Acidente',
  categoria AS 'Categoria',
  evento AS 'Evento',
  data_corrida AS 'Data da Corrida',
  observacoes AS 'Observações'
FROM obitos_corridas_superbikes;