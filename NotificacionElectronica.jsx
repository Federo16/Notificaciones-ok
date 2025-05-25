import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NotificacionElectronica() {
  const [cuij, setCuij] = useState("");
  const [error, setError] = useState("");
  const [datos, setDatos] = useState(null);
  const [mostrarPaso5, setMostrarPaso5] = useState(true);
  const [mostrarPaso6, setMostrarPaso6] = useState(false);

  const confirmarEnvio = () => {
    setMostrarPaso5(false);
    setMostrarPaso6(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-900 text-white p-4 text-center shadow">
        <h1 className="text-xl font-semibold">Portal de Gestión de Causas Judiciales</h1>
        <p className="text-sm">Poder Judicial de Mendoza</p>
      </header>

      <main className="p-6 max-w-3xl mx-auto space-y-6">
        <div className="p-6 bg-white rounded shadow space-y-4">
          <h2 className="text-2xl font-bold text-center">PASO 1 - SELECCIONAR EXPEDIENTE</h2>
          <Label htmlFor="cuij">CUIJ</Label>
          <Input
            id="cuij"
            value={cuij}
            onChange={(e) => setCuij(e.target.value)}
            placeholder="Ej: 13-23456789-2"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button onClick={() => setDatos({ expediente: "255622" })}>
            Simular carga de expediente
          </Button>
        </div>

        {mostrarPaso5 && (
          <div className="p-4 border rounded bg-white shadow text-center">
            <h3 className="text-lg font-semibold mb-4">Paso 5: Confirmar envío</h3>
            <Button onClick={confirmarEnvio}>Confirmar y enviar</Button>
          </div>
        )}

        {mostrarPaso6 && (
          <div className="p-6 bg-white rounded-lg shadow text-center animate-fade-in">
            <div className="text-green-600 text-7xl mb-4 animate-bounce">✓</div>
            <h2 className="text-2xl font-semibold text-green-700">Notificación enviada con éxito</h2>
            <p className="text-gray-600 mt-2 text-sm">
              La cédula fue generada correctamente y enviada a las partes intervinientes.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
