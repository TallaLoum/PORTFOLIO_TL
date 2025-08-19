import React from 'react';
import { Building2, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-slate-800 mb-8">Expérience Professionnelle</h1>
          <p className="text-lg text-slate-600 text-center mb-16 max-w-3xl mx-auto">
            Mon expérience professionnelle dans le développement d'applications web m'a permis d'acquérir 
            des compétences pratiques et de comprendre les enjeux du monde professionnel.
          </p>
          
          <div className="max-w-4xl mx-auto">
            {/* Main Experience */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100 shadow-lg">
              <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Développeur d'Applications Web</h2>
                    <p className="text-xl text-blue-600 font-semibold mb-2">Altinea</p>
                    <div className="flex flex-wrap gap-4 text-slate-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">3 mois de stage</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">France</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                  Stage Professionnel
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-slate-700 leading-relaxed text-lg">
                  Stage de développement d'applications web au sein de l'entreprise Altinea, où j'ai pu mettre en pratique 
                  mes compétences techniques et acquérir une expérience professionnelle concrète dans le développement web.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-slate-800 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Missions principales
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Développement d'applications web complètes</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Intégration front-end et back-end</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Maintenance et optimisation de code</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Collaboration en équipe de développement</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-slate-800 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-indigo-600 mr-2" />
                    Compétences développées
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Travail en environnement professionnel</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Méthodologies agiles et Scrum</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Code review et bonnes pratiques</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">Communication technique et documentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Academic Timeline */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Parcours Académique</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-6 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800">Master 2 - Base de Données & IA</h3>
                    <p className="text-slate-600">Université de Bourgogne d'Europe, Dijon (2024 - En cours)</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-6 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800">Licence 1 à Master 1</h3>
                    <p className="text-slate-600">Université de Bourgogne d'Europe, Dijon (2019 - 2023)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;