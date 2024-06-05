

DROP TABLE IF EXISTS `alojamientos`;

CREATE TABLE `alojamientos` (
  `idAlojamiento` int NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(255) NOT NULL,
  `Descripcion` text,
  `Latitud` decimal(10,8) NOT NULL,
  `Longitud` decimal(11,8) NOT NULL,
  `PrecioPorDia` decimal(10,2) NOT NULL,
  `CantidadDormitorios` int NOT NULL,
  `CantidadBanios` int NOT NULL,
  `Estado` enum('Disponible','Reservado') NOT NULL,
  `TipoAlojamiento` int DEFAULT NULL,
  PRIMARY KEY (`idAlojamiento`)
) ENGINE=InnoDB AUTO_INCREMENT=5;

LOCK TABLES `alojamientos` WRITE;

UNLOCK TABLES;

