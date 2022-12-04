-- CreateTable
CREATE TABLE `book` (
    `id_livro` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(60) NOT NULL,
    `sinopse` VARCHAR(1024) NOT NULL,
    `caminho_arquivo` VARCHAR(2048) NOT NULL,
    `editora` VARCHAR(45) NOT NULL,
    `idioma` VARCHAR(45) NOT NULL,
    `ano` YEAR NOT NULL,
    `autor` VARCHAR(128) NOT NULL,
    `genero` VARCHAR(60) NOT NULL,

    UNIQUE INDEX `book_titulo_key`(`titulo`),
    PRIMARY KEY (`id_livro`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
