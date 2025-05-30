export default function Login() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-sm p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Já tomou sua creatina!?
        </h1>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="E-mail"
            className="w-full px-4 py-2 border border-gray-400 rounded-lg
            text-base text-gray-800 placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full px-4 py-2 border border-gray-400 rounded-lg
            text-base text-gray-800 placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 font-medium rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            Entrar
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Ainda não tem conta?{' '}
          <a href="#" className="text-blue-600 hover:underline font-medium">
            Cadastre-se
          </a>
        </p>
      </div>
    </main>
  );
}
