'use client';

import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [streak, setStreak] = useState(0);
  const [lastCheckDate, setLastCheckDate] = useState<string | null>(null);

  // Carrega dados do localStorage ao iniciar
  useEffect(() => {
    const savedStreak = localStorage.getItem('streak');
    const savedDate = localStorage.getItem('lastCheckDate');

    if (savedStreak) setStreak(Number(savedStreak));
    if (savedDate) setLastCheckDate(savedDate);
  }, []);

  // Função chamada ao clicar no botão
  const handleCreatinaTaken = () => {
    const today = new Date().toISOString().split('T')[0]; // yyyy-mm-dd

    if (lastCheckDate === today) {
      alert('Você já marcou hoje! 🧠');
      return;
    }

    const newStreak = streak + 1;
    setStreak(newStreak);
    setLastCheckDate(today);

    localStorage.setItem('streak', String(newStreak));
    localStorage.setItem('lastCheckDate', today);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Sua sequência</h1>
        <p className="text-lg text-gray-700 mb-6">
          🔥 {streak} dia(s) seguidos
        </p>

        <button
          onClick={handleCreatinaTaken}
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition cursor-pointer"
        >
          Tomei creatina hoje ✅
        </button>
      </div>
    </main>
  );
}
