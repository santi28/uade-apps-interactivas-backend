CREATE TABLE obra_sociales (
    id INT IDENTITY(1,1) NOT NULL,
    nombre NVARCHAR(255) NOT NULL,
    codigoInterno NVARCHAR(100) NULL,
    activo BIT NOT NULL DEFAULT 1,
    createdAt DATETIME NOT NULL DEFAULT GETDATE(),
    updatedAt DATETIME NOT NULL DEFAULT GETDATE(),
    CONSTRAINT PK_obra_sociales PRIMARY KEY (id)
);

-- Crear índice único
CREATE UNIQUE INDEX UQ_obra_sociales_codigoInterno
ON obra_sociales (codigoInterno);
GO
