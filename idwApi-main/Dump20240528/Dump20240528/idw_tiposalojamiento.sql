
DROP TABLE IF EXISTS `tiposalojamiento`;

CREATE TABLE `tiposalojamiento` (
  `idTipoAlojamiento` int NOT NULL AUTO_INCREMENT,
  `Descripcion` varchar(255) NOT NULL,
  PRIMARY KEY (`idTipoAlojamiento`)
) ENGINE=InnoDB AUTO_INCREMENT=3;

LOCK TABLES `tiposalojamiento` WRITE;

UNLOCK TABLES;

