
DROP TABLE IF EXISTS `alojamientoservicios`;

CREATE TABLE `alojamientoservicios` (
  `idAlojamientoServicio` int NOT NULL AUTO_INCREMENT,
  `idAlojamiento` int DEFAULT NULL,
  `idServicio` int DEFAULT NULL,
  PRIMARY KEY (`idAlojamientoServicio`),
  KEY `idAlojamiento` (`idAlojamiento`),
  KEY `idServicio` (`idServicio`),
  CONSTRAINT `alojamientoservicios_ibfk_1` FOREIGN KEY (`idAlojamiento`) REFERENCES `alojamientos` (`idAlojamiento`),
  CONSTRAINT `alojamientoservicios_ibfk_2` FOREIGN KEY (`idServicio`) REFERENCES `servicios` (`idServicio`)
) ENGINE=InnoDB;

LOCK TABLES `alojamientoservicios` WRITE;

UNLOCK TABLES;
