import React from 'react';

interface AccueilProps {
  onPageChange: (page: string) => void;
}

const Accueil: React.FC<AccueilProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      {/* Hero Section */}
      <section className="pt-16 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            TL
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            Talla Loum
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-600 mb-8 font-medium">
            Étudiant Master 2 - Base de Données & Intelligence Artificielle
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionné par les technologies de l'intelligence artificielle et les bases de données, 
            je développe des solutions innovantes en m'appuyant sur mon expérience en développement web 
            et mes connaissances approfondies en IA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onPageChange('projects')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Voir mes projets
            </button>
            <button 
              onClick={() => onPageChange('contact')}
              className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Me contacter
            </button>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <span className="text-2xl font-bold text-blue-600">5+</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Années d'études</h3>
              <p className="text-slate-600">De la Licence 1 au Master 2 à l'Université de Bourgogne</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 text-center group">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Mois de stage</h3>
              <p className="text-slate-600">Développeur d'applications web chez Altinea</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <span className="text-2xl font-bold text-green-600">∞</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Passion</h3>
              <p className="text-slate-600">Pour l'IA et les bases de données</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Découvrez mon parcours</h2>
          <p className="text-lg text-slate-600 mb-8">
            Explorez mes compétences, mon expérience et mes projets dans le domaine de l'intelligence artificielle et des bases de données.
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <button 
              onClick={() => onPageChange('about')}
              className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors font-medium"
            >
              Mon parcours
            </button>
            <button 
              onClick={() => onPageChange('skills')}
              className="border border-slate-800 text-slate-800 px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors font-medium"
            >
              Mes compétences
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;