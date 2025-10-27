// config/db.js
import sql from 'mssql';

const dbSettings = {
  user: 'UserAdmin',
  password: 'Medicina2026',
  server: 'localhost',
  database: 'Gestion de citas',
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

async function connectDB() {
  try {
    const pool = await sql.connect(dbSettings);
    console.log('Conectado a SQL Server');
    return pool;
  } catch (error) {
    console.error('Error de conexión a SQL Server:', error);
  }
}

export default connectDB;
