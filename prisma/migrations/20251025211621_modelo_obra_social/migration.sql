-- CreateTable
CREATE TABLE "obra_sociales" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "codigoInterno" TEXT,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "obra_sociales_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "obra_sociales_codigoInterno_key" ON "obra_sociales"("codigoInterno");
