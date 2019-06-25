-- MySQL Script generated by MySQL Workbench
-- 06/24/19 17:49:27
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema schraleBingo
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema schraleBingo
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `schraleBingo` DEFAULT CHARACTER SET utf8 ;
USE `schraleBingo` ;

-- -----------------------------------------------------
-- Table `schraleBingo`.`players`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `schraleBingo`.`players` (
  `name` VARCHAR(45) NOT NULL,
  `color` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`name`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `schraleBingo`.`cards`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `schraleBingo`.`cards` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(100) NOT NULL,
  `crossed` TINYINT(1) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `schraleBingo`.`bingo_cards`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `schraleBingo`.`bingo_cards` (
  `player` VARCHAR(45) NOT NULL,
  `card` INT NOT NULL,
  PRIMARY KEY (`player`, `card`),
  INDEX `fk_players_has_cards_cards1_idx` (`card` ASC),
  INDEX `fk_players_has_cards_players_idx` (`player` ASC),
  CONSTRAINT `fk_players_has_cards_players`
    FOREIGN KEY (`player`)
    REFERENCES `schraleBingo`.`players` (`name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_players_has_cards_cards1`
    FOREIGN KEY (`card`)
    REFERENCES `schraleBingo`.`cards` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;