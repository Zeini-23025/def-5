export default function Admin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex flex-col items-center justify-center p-6">
      {/* Header avec titre et infos admin */}
      <div className="w-full max-w-6xl mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              🏆 Podium Concourse - Admin Dashboard
            </h1>
            <p className="text-purple-200">
              Suivi en temps réel des équipes • Nuit de l'Info
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-purple-700/50 rounded-lg border border-purple-500">
              <p className="text-sm text-purple-200">Administrateur</p>
              <p className="font-semibold text-white">Connecté</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-8 max-w-6xl w-full">
        
        {/* Section 1 : Gestion des utilisateurs */}
        <div className="flex-1 p-6 rounded-2xl shadow-2xl bg-gray-900/60 backdrop-blur-lg border border-purple-500/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-purple-600/30">
              <span className="text-2xl">👥</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Gestion des Équipes</h2>
              <p className="text-purple-300 text-sm">Organisation et vérification</p>
            </div>
          </div>

          {/* Stats rapides */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
              <p className="text-gray-400 text-sm">Équipes totales</p>
              <p className="text-3xl font-bold text-white">24</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
              <p className="text-gray-400 text-sm">Vérifiées</p>
              <p className="text-3xl font-bold text-green-400">18</p>
            </div>
          </div>

          {/* Liste des équipes */}
          <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
            {['Team Alpha', 'Beta Squad', 'Gamma Tech', 'Delta Force', 'Epsilon'].map((team, i) => (
              <div 
                key={i}
                className="p-4 rounded-xl bg-gray-800/40 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700 hover:border-purple-500/50 group"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className={`h-3 w-3 rounded-full ${i < 3 ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`} />
                    <div>
                      <h3 className="font-semibold text-white">{team}</h3>
                      <p className="text-sm text-gray-400">5 membres • #00{100 + i}</p>
                    </div>
                  </div>
                  <button className="px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm transition-all transform group-hover:scale-105">
                    {i < 2 ? 'Vérifié ✓' : 'Vérifier'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2 : Podium & Progression */}
        <div className="flex-1 p-6 rounded-2xl shadow-2xl bg-gray-900/60 backdrop-blur-lg border border-purple-500/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-cyan-600/30">
              <span className="text-2xl">📊</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Podium en Direct</h2>
              <p className="text-cyan-300 text-sm">Progression temps réel</p>
            </div>
          </div>

          {/* Podium */}
          <div className="flex items-end justify-center gap-4 mb-8 h-40">
            {/* 2ème place */}
            <div className="flex flex-col items-center w-1/4">
              <div className="h-24 w-full bg-gradient-to-t from-gray-700 to-gray-600 rounded-t-lg flex items-end justify-center p-2">
                <span className="text-2xl">🥈</span>
              </div>
              <p className="text-white font-bold mt-2">Team Beta</p>
              <p className="text-yellow-400 font-bold">65%</p>
            </div>

            {/* 1ère place */}
            <div className="flex flex-col items-center w-1/3">
              <div className="h-32 w-full bg-gradient-to-t from-yellow-600 to-yellow-500 rounded-t-lg flex items-end justify-center p-2 animate-pulse">
                <span className="text-4xl">🏆</span>
              </div>
              <p className="text-white font-bold mt-2">Team Alpha</p>
              <p className="text-yellow-400 font-bold text-xl">82%</p>
            </div>

            {/* 3ème place */}
            <div className="flex flex-col items-center w-1/4">
              <div className="h-20 w-full bg-gradient-to-t from-amber-800 to-amber-700 rounded-t-lg flex items-end justify-center p-2">
                <span className="text-2xl">🥉</span>
              </div>
              <p className="text-white font-bold mt-2">Gamma Tech</p>
              <p className="text-yellow-400 font-bold">48%</p>
            </div>
          </div>

          {/* Barre de progression globale */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Progression moyenne</span>
              <span className="text-white font-bold">64%</span>
            </div>
            <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000"
                style={{ width: '64%' }}
              />
            </div>
          </div>

          {/* Stats temps réel */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-purple-900/50 to-gray-900 border border-purple-500/30">
              <p className="text-sm text-purple-300">Mises à jour</p>
              <p className="text-2xl font-bold text-white animate-pulse">Live</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-900/50 to-gray-900 border border-cyan-500/30">
              <p className="text-sm text-cyan-300">Dernière MAJ</p>
              <p className="text-2xl font-bold text-white">3s</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
              <p className="text-sm text-gray-400">Équipes actives</p>
              <p className="text-2xl font-bold text-white">18/24</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer avec infos supplémentaires */}
      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm">
          Dashboard Podium Concourse • Mise à jour chaque seconde • Nuit de l'Info 2024
        </p>
      </div>
    </div>
  );
}