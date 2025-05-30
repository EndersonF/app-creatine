export default function Settings() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Configurações</h1>

        <div className="space-y-4 text-gray-700">
          <div>
            <label className="block text-sm font-medium mb-1">
              Horário preferido para o lembrete:
            </label>
            <input
              type="time"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Modo escuro</span>
            <button className="bg-gray-200 text-sm px-4 py-1 rounded-md hover:bg-gray-300 transition">
              Em breve
            </button>
          </div>

          <hr className="my-4" />

          <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition cursor-pointer">
            Sair
          </button>
        </div>
      </div>
    </main>
  );
}
