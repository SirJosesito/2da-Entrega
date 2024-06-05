DROP TABLE IF EXISTS `servicios`;

CREATE TABLE `servicios` (
  `idServicio` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`idServicio`)
) ENGINE=InnoDB;

LOCK TABLES `servicios` WRITE;

UNLOCK TABLES;

