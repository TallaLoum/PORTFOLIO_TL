import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Accueil from './pages/Accueil';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('accueil');

  const renderPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <Accueil onPageChange={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Accueil onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Talla Loum. Tous droits réservés.</p>
          <p className="text-sm mt-2">
            Étudiant Master 2 - Base de Données & Intelligence Artificielle
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;