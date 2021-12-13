-- CreateTable
CREATE TABLE "Repositories" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "fileName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Mails" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "repositoryId" TEXT NOT NULL,
    CONSTRAINT "Mails_repositoryId_fkey" FOREIGN KEY ("repositoryId") REFERENCES "Repositories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
