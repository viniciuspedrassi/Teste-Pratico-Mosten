CREATE DATABASE  IF NOT EXISTS `votacao`;
USE `votacao`;

DROP TABLE IF EXISTS `item`;

 SET character_set_client = utf8mb4 ;
CREATE TABLE `item` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) DEFAULT NULL,
  `genero` varchar(255) DEFAULT NULL,
  `gostei` int(11) NOT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `nao_gostei` int(11) NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `item` WRITE;

INSERT INTO `item` VALUES (1,'Uma realidade simulada controlada por máquinas.','Ficção Científica',0,'https://revistacontinente.com.br/image/view/news/image/2117',0,'Matrix'),(2,'Um professor descobre que tem cancer, e quer deixar uma renda para familia.','Drama/Crime',0,'https://www.planocritico.com/wp-content/uploads/2020/06/breaking_bad_temporada_4_plano_critico-1-1024x683.jpg',0,'Breaking Bad '),(3,'Um jovem bruxo descobre seu destino em uma escola de magia','Fantasia/Aventura',0,'https://cienciahoje.org.br/wp-content/uploads/2025/02/harry-potter-pedra-filosofal-1024x579.jpg',0,'Harry Potter'),(4,'Uma jornada para destruir um anel poderoso que pode dominar o mundo','Fantasia Épica',0,'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/08/49428_1F18FCF04B4A8036-1.jpg?w=849&h=477&crop=0',0,'Senhor dos Anéis'),(5,'A vida cotidiana e engraçada de funcionários em um escritório','Comédia',0,'https://cdn2.nbcuni.com/NBCUniversal/styles/newsroom_stories_16_9_image_style/s3/2025-03/TheOfficeHeroArt.jpg?VersionId=OWiCWktqo6C3nlCQgPzSHcN.6JCD6TIm&h=d1cb525d&itok=P5OwzFXm',0,'The Office');

UNLOCK TABLES;

