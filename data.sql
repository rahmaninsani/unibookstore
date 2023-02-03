-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (arm64)
--
-- Host: 127.0.0.1    Database: unibookstore
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `publisher`
--

DROP TABLE IF EXISTS `publisher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publisher` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `code` char(4) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` text NOT NULL,
  `city` varchar(30) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publisher`
--

LOCK TABLES `publisher` WRITE;
/*!40000 ALTER TABLE `publisher` DISABLE KEYS */;
INSERT INTO `publisher` (`id`, `code`, `name`, `address`, `city`, `phone_number`, `created_at`, `updated_at`) VALUES (1,'SP01','Penerbit Informatika','Jl. Buah Batu No. 121','Bandung','081322201946','2023-02-03 19:52:42','2023-02-04 02:52:43'),(2,'SP02','Andi Offset','Jl. Suryalaya IX No.3','Bandung','087839030688','2023-02-03 19:53:29','2023-02-04 02:53:30'),(3,'SP03','Danendra','Jl Moch. Toha 44','Bandung','0225201215','2023-02-03 19:54:23','2023-02-04 02:54:25');
/*!40000 ALTER TABLE `publisher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `code` char(5) NOT NULL,
  `category` enum('Keilmuan','Bisnis','Novel') NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int unsigned NOT NULL DEFAULT '0',
  `id_publisher` int unsigned NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`),
  KEY `id_publisher` (`id_publisher`),
  CONSTRAINT `book_ibfk_1` FOREIGN KEY (`id_publisher`) REFERENCES `publisher` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` (`id`, `code`, `category`, `title`, `price`, `stock`, `id_publisher`, `created_at`, `updated_at`) VALUES (1,'K1001','Keilmuan','Analisis & Perancangan Sistem Informasi',50000.00,60,1,'2023-02-03 19:55:13','2023-02-04 02:55:17'),(2,'K1002','Keilmuan','Artificial Intelligence',45000.00,60,1,'2023-02-03 19:55:55','2023-02-04 02:55:57'),(3,'K2003','Keilmuan','Autocad 3 Dimensi',40000.00,25,1,'2023-02-03 19:56:28','2023-02-04 02:56:29'),(4,'B1001','Bisnis','Bisnis Online',75000.00,9,1,'2023-02-03 19:56:57','2023-02-04 02:56:59'),(5,'K3004','Keilmuan','Cloud Computing Technology',85000.00,15,1,'2023-02-03 19:57:31','2023-02-04 02:57:33'),(6,'B1002','Bisnis','Etika Bisnis dan Tanggung Jawab Sosial',67500.00,20,1,'2023-02-03 19:58:20','2023-02-04 02:58:21'),(7,'N1001','Novel','Cahaya Di Penjuru Hati',68000.00,10,2,'2023-02-03 19:59:02','2023-02-04 02:59:03'),(8,'N002','Novel','Aku Ingin Cerita',48000.00,12,3,'2023-02-03 19:59:36','2023-02-04 02:59:38');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-04  3:05:29
