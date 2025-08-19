import React from "react";
import {
  Github,
  ExternalLink,
  Database,
  Brain,
  Code,
  Server,
  Globe,
  Zap,
} from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Système de Gestion de Base de Données Avancé",
      description:
        "Développement d'un système de gestion de base de données optimisé avec des fonctionnalités avancées d'indexation et de requêtes complexes. Implémentation d'algorithmes d'optimisation pour améliorer les performances.",
      icon: Database,
      color: "blue",
      technologies: ["PostgreSQL", "Python", "SQL", "Indexation"],
      githubUrl:
        "https://github.com/TallaLoum/Syst-me_de-_Gestion-_de-_Base-_de_Donn-es-_Avanc-",
      features: [
        "Optimisation automatique des requêtes",
        "Interface d'administration intuitive",
        "Système de sauvegarde automatique",
        "Monitoring des performances en temps réel",
      ],
    },
    {
      id: 2,
      title: "Modèle de Machine Learning Prédictif",
      description:
        "Création d'un modèle d'intelligence artificielle pour la prédiction de tendances basé sur l'analyse de données historiques. Utilisation de techniques de deep learning et d'algorithmes d'apprentissage supervisé.",
      icon: Brain,
      color: "indigo",
      technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
      githubUrl: "https://github.com/tallaloum/ml-prediction-model",
      features: [
        "Précision de prédiction > 90%",
        "Traitement de données en temps réel",
        "Visualisation interactive des résultats",
        "API REST pour intégration",
      ],
    },
    {
      id: 3,
      title: "Application Web Full-Stack",
      description:
        "Développement d'une application web complète avec interface utilisateur moderne et API robuste. Architecture microservices avec authentification sécurisée et gestion d'état avancée.",
      icon: Code,
      color: "green",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/tallaloum/fullstack-webapp",
      features: [
        "Interface utilisateur responsive",
        "Authentification JWT sécurisée",
        "API RESTful documentée",
        "Tests automatisés complets",
      ],
    },
    {
      id: 4,
      title: "Système d'Analyse de Données en Temps Réel",
      description:
        "Plateforme d'analyse de données en temps réel avec tableau de bord interactif. Traitement de flux de données massives avec des algorithmes d'analyse statistique avancés.",
      icon: Server,
      color: "purple",
      technologies: ["Python", "Apache Kafka", "Redis", "Docker"],
      githubUrl: "https://github.com/tallaloum/realtime-analytics",
      features: [
        "Traitement de millions d'événements/seconde",
        "Tableau de bord en temps réel",
        "Alertes automatiques intelligentes",
        "Architecture scalable et distribuée",
      ],
    },
    {
      id: 5,
      title: "Plateforme E-commerce Intelligente",
      description:
        "Développement d'une plateforme e-commerce avec système de recommandation basé sur l'IA. Intégration de fonctionnalités avancées de personnalisation et d'analyse comportementale.",
      icon: Globe,
      color: "orange",
      technologies: ["React", "Django", "PostgreSQL", "AI/ML"],
      githubUrl: "https://github.com/tallaloum/smart-ecommerce",
      features: [
        "Système de recommandation IA",
        "Analyse comportementale avancée",
        "Paiements sécurisés intégrés",
        "Interface d'administration complète",
      ],
    },
    {
      id: 6,
      title: "Outil d'Optimisation de Performance",
      description:
        "Développement d'un outil d'analyse et d'optimisation des performances pour applications web. Monitoring automatique et suggestions d'amélioration basées sur l'analyse de code.",
      icon: Zap,
      color: "yellow",
      technologies: ["JavaScript", "Node.js", "Webpack", "Analytics"],
      githubUrl: "https://github.com/tallaloum/performance-optimizer",
      features: [
        "Analyse automatique du code",
        "Suggestions d'optimisation intelligentes",
        "Monitoring continu des performances",
        "Rapports détaillés et visualisations",
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-500 to-blue-600",
        text: "text-blue-600",
        border: "border-blue-200",
        tag: "bg-blue-100 text-blue-800",
      },
      indigo: {
        bg: "from-indigo-500 to-indigo-600",
        text: "text-indigo-600",
        border: "border-indigo-200",
        tag: "bg-indigo-100 text-indigo-800",
      },
      green: {
        bg: "from-green-500 to-green-600",
        text: "text-green-600",
        border: "border-green-200",
        tag: "bg-green-100 text-green-800",
      },
      purple: {
        bg: "from-purple-500 to-purple-600",
        text: "text-purple-600",
        border: "border-purple-200",
        tag: "bg-purple-100 text-purple-800",
      },
      orange: {
        bg: "from-orange-500 to-orange-600",
        text: "text-orange-600",
        border: "border-orange-200",
        tag: "bg-orange-100 text-orange-800",
      },
      yellow: {
        bg: "from-yellow-500 to-yellow-600",
        text: "text-yellow-600",
        border: "border-yellow-200",
        tag: "bg-yellow-100 text-yellow-800",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-slate-800 mb-8">
            Mes Projets
          </h1>
          <p className="text-lg text-slate-600 text-center mb-16 max-w-3xl mx-auto">
            Découvrez mes projets dans les domaines de l'intelligence
            artificielle, des bases de données et du développement web. Chaque
            projet reflète ma passion pour l'innovation technologique.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const colors = getColorClasses(project.color);
              const Icon = project.icon;

              return (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden group"
                >
                  <div
                    className={`h-48 bg-gradient-to-r ${colors.bg} flex items-center justify-center relative overflow-hidden`}
                  >
                    <Icon className="w-16 h-16 text-white z-10" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-800 mb-2 text-sm">
                        Fonctionnalités clés :
                      </h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 2).map((feature, index) => (
                          <li
                            key={index}
                            className="text-slate-600 text-xs flex items-start"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`${colors.tag} px-2 py-1 rounded-full text-xs font-medium`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-slate-600 hover:text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-all"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                Intéressé par mes projets ?
              </h2>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                N'hésitez pas à explorer mes repositories GitHub pour voir le
                code source et la documentation complète de chaque projet.
              </p>
              <a
                href="https://github.com/tallaloum"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors font-medium"
              >
                <Github className="w-5 h-5 mr-2" />
                Voir tous mes projets sur GitHub
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
