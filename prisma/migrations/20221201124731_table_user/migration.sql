-- CreateTable
CREATE TABLE `user` (
    `id_usuario` VARCHAR(191) NOT NULL,
    `email` VARCHAR(60) NOT NULL,
    `data_nascimento` DATE NOT NULL,
    `sexo` VARCHAR(1) NOT NULL,
    `nome` VARCHAR(60) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `isAdmin` BOOLEAN NOT NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
