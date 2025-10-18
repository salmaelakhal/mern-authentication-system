import FloatingShape from "./components/FloatingShape";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 flex items-center justify-center relative overflow-hidden">
      {/* Effet de scan ligne */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-scan"></div>
      
      {/* Grille de fond */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      {/* Cercles holographiques style hacker */}
      <FloatingShape
        color="from-green-400 to-cyan-400"
        size="w-64 h-64"
        top="10%"
        left="10%"
        delay={0}
        duration={20}
        blur="blur-xl"
        type="hologram"
      />
      <FloatingShape
        color="from-cyan-400 to-blue-400"
        size="w-48 h-48"
        top="20%"
        left="80%"
        delay={2}
        duration={25}
        blur="blur-lg"
        type="digital"
      />
      <FloatingShape
        color="from-emerald-400 to-green-400"
        size="w-96 h-96"
        top="60%"
        left="5%"
        delay={4}
        duration={30}
        blur="blur-2xl"
        type="matrix"
      />
      <FloatingShape
        color="from-teal-400 to-cyan-400"
        size="w-32 h-32"
        top="70%"
        left="70%"
        delay={6}
        duration={15}
        blur="blur-lg"
        type="binary"
      />
      <FloatingShape
        color="from-green-300 to-emerald-400"
        size="w-40 h-40"
        top="15%"
        left="60%"
        delay={8}
        duration={22}
        blur="blur-xl"
        type="hologram"
      />
      <FloatingShape
        color="from-blue-400 to-purple-500"
        size="w-56 h-56"
        top="80%"
        left="20%"
        delay={10}
        duration={28}
        blur="blur-2xl"
        type="digital"
      />

      <Routes>
        <Route path='/' element={"home "} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;