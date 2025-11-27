BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[obra_sociales] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nombre] NVARCHAR(1000) NOT NULL,
    [codigoInterno] NVARCHAR(1000) NOT NULL,
    [activo] BIT NOT NULL CONSTRAINT [obra_sociales_activo_df] DEFAULT 1,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [obra_sociales_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [obra_sociales_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [obra_sociales_codigoInterno_key] UNIQUE NONCLUSTERED ([codigoInterno])
);

-- CreateTable
CREATE TABLE [dbo].[medico] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nombre] NVARCHAR(1000) NOT NULL,
    [especialidad] NVARCHAR(1000) NOT NULL,
    [usuario] NVARCHAR(1000) NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [medico_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [medico_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[citas] (
    [id] INT NOT NULL IDENTITY(1,1),
    [fecha] DATETIME2 NOT NULL,
    [motivo] NVARCHAR(1000) NOT NULL,
    [pacienteId] INT NOT NULL,
    [medicoId] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [citas_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [citas_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[pacientes] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nombre] NVARCHAR(1000) NOT NULL,
    [apellido] NVARCHAR(1000) NOT NULL,
    [dni] NVARCHAR(1000) NOT NULL,
    [telefono] NVARCHAR(1000),
    [email] NVARCHAR(1000),
    [activo] BIT NOT NULL CONSTRAINT [pacientes_activo_df] DEFAULT 1,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [pacientes_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [pacientes_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [pacientes_dni_key] UNIQUE NONCLUSTERED ([dni])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
