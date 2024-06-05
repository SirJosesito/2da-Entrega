DROP TABLE IF EXISTS `imagenes`;

CREATE TABLE `imagenes` (
  `idImagen` int NOT NULL AUTO_INCREMENT,
  `idAlojamiento` int DEFAULT NULL,
  `RutaArchivo` varchar(255) NOT NULL,
  PRIMARY KEY (`idImagen`),
  KEY `idAlojamiento` (`idAlojamiento`),
  CONSTRAINT `imagenes_ibfk_1` FOREIGN KEY (`idAlojamiento`) REFERENCES `alojamientos` (`idAlojamiento`)
) ENGINE=InnoDB;

LOCK TABLES `imagenes` WRITE;

UNLOCK TABLES;
