/*
  Warnings:

  - Added the required column `providerDomain` to the `Repositories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailAddress` to the `Mails` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Repositories" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "providerDomain" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "fileName" TEXT NOT NULL
);
INSERT INTO "new_Repositories" ("createdAt", "fileName", "id", "name", "owner") SELECT "createdAt", "fileName", "id", "name", "owner" FROM "Repositories";
DROP TABLE "Repositories";
ALTER TABLE "new_Repositories" RENAME TO "Repositories";
CREATE TABLE "new_Mails" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "emailAddress" TEXT NOT NULL,
    "repositoryId" TEXT NOT NULL,
    CONSTRAINT "Mails_repositoryId_fkey" FOREIGN KEY ("repositoryId") REFERENCES "Repositories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Mails" ("createdAt", "id", "repositoryId") SELECT "createdAt", "id", "repositoryId" FROM "Mails";
DROP TABLE "Mails";
ALTER TABLE "new_Mails" RENAME TO "Mails";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
