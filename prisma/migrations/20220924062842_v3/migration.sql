/*
  Warnings:

  - You are about to drop the column `userId` on the `Auth` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userName]` on the table `Auth` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Auth_userId_key` ON `Auth`;

-- AlterTable
ALTER TABLE `Auth` DROP COLUMN `userId`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `authId` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Auth_userName_key` ON `Auth`(`userName`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_authId_fkey` FOREIGN KEY (`authId`) REFERENCES `Auth`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
