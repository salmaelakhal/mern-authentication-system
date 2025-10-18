import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    // Logique d'inscription à implémenter
    console.log({ name, email, password });
  };

  return (
    <>
      {/* Effet de bruit numérique */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] opacity-30"></div>

      {/* Contenu principal */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-black/60 backdrop-blur-md rounded-xl border border-green-400/30 shadow-2xl p-8 relative overflow-hidden">
          {/* Effet de bordure animée */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/0 via-green-400/50 to-green-400/0 animate-pulse-slow"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-xl blur opacity-30 animate-pulse"></div>
          
          <div className="relative z-10">
            {/* Logo/Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg shadow-green-400/25">
                <span className="text-black font-bold text-xl font-mono">+</span>
              </div>
              <h1 className="text-3xl font-bold text-green-400 mb-2 font-mono tracking-wider">
                NEW_ACCESS
              </h1>
              <p className="text-green-300/80 text-lg font-mono animate-pulse">
                CREATE_IDENTITY
              </p>
            </div>

            {/* Formulaire */}
            <form onSubmit={handleSignUp} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-green-300 mb-2 font-mono">
                  [FULL_NAME]
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-black/40 border border-green-400/30 rounded-lg text-green-400 font-mono placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400 transition-all duration-300"
                  placeholder="ENTER_NAME"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-green-300 mb-2 font-mono">
                  [EMAIL_ID]
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-black/40 border border-green-400/30 rounded-lg text-green-400 font-mono placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400 transition-all duration-300"
                  placeholder="ENTER_EMAIL"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-green-300 mb-2 font-mono">
                  [SECURITY_KEY]
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-black/40 border border-green-400/30 rounded-lg text-green-400 font-mono placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400 transition-all duration-300"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-green-400 bg-black/40 border-green-400/30 rounded focus:ring-green-400/50"
                />
                <span className="ml-2 text-sm text-green-300 font-mono">
                  ACCEPT_TERMS
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-400/50 shadow-lg shadow-green-400/25 font-mono tracking-wider"
              >
                [CREATE_ACCOUNT]
              </button>
            </form>

            {/* Separator */}
            <div className="mt-8 pt-6 border-t border-green-400/20">
              <p className="text-center text-green-300/80 text-sm font-mono">
                EXISTING_IDENTITY?{" "}
                <Link 
                  to="/login" 
                  className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors"
                >
                  [LOGIN_ACCESS]
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Texte défilant style matrix */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <div className="text-green-400/60 text-sm font-mono animate-pulse">
          SYSTEM_SECURE | ENCRYPTED_CONNECTION | v2.4.1
        </div>
      </div>
    </>
  );
}

export default SignUpPage;