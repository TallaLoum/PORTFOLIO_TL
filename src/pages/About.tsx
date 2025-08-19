import React from "react";
import { MapPin, Calendar, GraduationCap } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-slate-800 mb-16">
            À propos de moi
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Parcours Académique
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-lg">
                      Master 2 - Base de Données & Intelligence Artificielle
                    </h3>
                    <p className="text-blue-600 font-medium">
                      Université de Bourgogne d'Europe, Dijon
                    </p>
                    <p className="text-slate-600 text-sm">2025 - En cours</p>
                    <p className="text-slate-700 mt-2">
                      Spécialisation avancée dans les systèmes de bases de
                      données modernes et les techniques d'intelligence
                      artificielle.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-slate-200">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-lg">
                      Licence 1 à Master 1
                    </h3>
                    <p className="text-blue-600 font-medium">
                      Université de Bourgogne d'Europe, Dijon
                    </p>
                    <p className="text-slate-600 text-sm">2019 - 2024</p>
                    <p className="text-slate-700 mt-2">
                      Formation complète en informatique avec une progression
                      constante vers la spécialisation en bases de données et
                      IA.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
                Informations Personnelles
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700">Dijon, France</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700">
                    Disponible pour opportunités
                  </span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
                <h3 className="font-semibold text-slate-800 mb-2">Objectifs</h3>
                <p className="text-slate-600 text-sm">
                  Développer des solutions innovantes combinant intelligence
                  artificielle et gestion de données pour résoudre des problèmes
                  complexes du monde réel.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Ma Vision</h2>
            <p className="text-lg text-center text-slate-200 max-w-4xl mx-auto leading-relaxed">
              Je crois fermement que l'avenir de la technologie réside dans
              l'intersection entre l'intelligence artificielle et la gestion
              intelligente des données. Mon objectif est de contribuer à cette
              révolution technologique en développant des solutions qui
              transforment la façon dont nous interagissons avec l'information.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
