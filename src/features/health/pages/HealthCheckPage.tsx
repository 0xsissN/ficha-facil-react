import { useEffect, useState } from 'react';
import { checkDatabaseConnection } from '../api/healthCheck';

export function HealthCheckPage() {
  const [status, setStatus] = useState<'cargando' | 'conectado' | 'error'>('cargando');

  useEffect(() => {
    checkDatabaseConnection().then((connected) => {
      setStatus(connected ? 'conectado' : 'error');
    });
  }, []);

  return (
    <div>
      <h1>Health Check</h1>
      <p>Estado de la conexión: {status}</p>
    </div>
  );
}