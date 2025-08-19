import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  MessageCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");

    try {
      // Configuration EmailJS - Remplacez par vos vraies clés
      const serviceId = "service_7h9ti26";
      const templateId = "template_tpyyt07";
      const publicKey = "q9H-aieteg_MVi0ss";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Talla Loum",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 pt-20">
      <section className="py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Contact</h1>
          <p className="text-xl text-slate-300 mb-16 max-w-3xl mx-auto text-center">
            Intéressé par mon profil ? N'hésitez pas à me contacter pour
            discuter d'opportunités ou simplement échanger sur nos domaines
            d'intérêt communs.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <MessageCircle className="w-6 h-6 mr-3 text-blue-400" />
                Informations de Contact
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-slate-300">tallaloum115@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Téléphone</h3>
                    <p className="text-slate-300">+33 7 74 16 30 13</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Localisation</h3>
                    <p className="text-slate-300">Dijon, France</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold mb-4">Retrouvez-moi sur</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/TallaLoum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/talla-loum-3b700a1a4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Send className="w-6 h-6 mr-3 text-blue-400" />
                Envoyez-moi un message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-slate-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-slate-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                      placeholder="votre.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-slate-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-slate-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                    isLoading
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white`}
                >
                  <Send className="w-5 h-5" />
                  <span>
                    {isLoading ? "Envoi en cours..." : "Envoyer le message"}
                  </span>
                </button>

                {status === "success" && (
                  <div className="mt-4 p-4 bg-green-600/20 border border-green-600/30 rounded-lg">
                    <p className="text-green-400 text-center">
                      ✅ Message envoyé avec succès ! Je vous répondrai dans les
                      plus brefs délais.
                    </p>
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-4 p-4 bg-red-600/20 border border-red-600/30 rounded-lg">
                    <p className="text-red-400 text-center">
                      ❌ Erreur lors de l'envoi. Veuillez réessayer ou me
                      contacter directement par email.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-4">Disponibilité</h3>
              <p className="text-slate-300 mb-4">
                Je suis actuellement ouvert aux opportunités de stage,
                d'alternance ou d'emploi dans les domaines de l'intelligence
                artificielle et des bases de données.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full">
                  Disponible immédiatement
                </span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
                  Télétravail possible
                </span>
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full">
                  Mobilité France
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
