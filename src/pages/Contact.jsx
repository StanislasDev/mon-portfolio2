import { useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "portfolio_2025", // Remplace par ton SERVICE ID
        "template_rwqp0sv", // Remplace par ton TEMPLATE ID
        formData,
        "hqu1lL91Rk7gg8e4H" // Remplace par ton USER ID
      );
      setSuccess("Message envoyé avec succès !");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Erreur EmailJS:", error);
    setSuccess("Erreur lors de l'envoi du message.");
    }
  };

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* TITRE */}
        <h1 className="text-5xl font-bold text-center mb-8">
          <i className="fas fa-envelope text-blue-400"></i> Contactez-moi
        </h1>

        {/* INTRODUCTION */}
        <p className="text-lg text-center max-w-3xl mx-auto mb-10">
        Vous avez un projet en tête ou une question ? N’hésitez pas à me contacter, je serai ravi d’échanger avec vous !
        </p>

        {/* FORMULAIRE DE CONTACT */}
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Votre nom"
            className="w-full px-4 py-2 mb-4 bg-gray-700 border border-gray-600 rounded focus:border-blue-400" />

          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Votre email"
            className="w-full px-4 py-2 mb-4 bg-gray-700 border border-gray-600 rounded focus:border-blue-400" />

          <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Sujet"
            className="w-full px-4 py-2 mb-4 bg-gray-700 border border-gray-600 rounded focus:border-blue-400" />

          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Votre message"
            className="w-full px-4 py-2 mb-6 bg-gray-700 border border-gray-600 rounded focus:border-blue-400"></textarea>

          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Envoyer <i className="fas fa-paper-plane ml-2"></i>
          </button>
        </form>

        {success && <p className="text-center mt-4 text-lg">{success}</p>}

        {/* RÉSEAUX SOCIAUX */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://github.com/StanislasDev" className="text-gray-400 hover:text-white text-2xl"><i className="fab fa-github"></i></a>
          <a href="#" className="text-blue-500 hover:text-white text-2xl"><i className="fab fa-linkedin"></i></a>
          <a href="https://t.me/Stanislas_12" className="text-blue-500 hover:text-white text-2xl"><i className="fab fa-telegram"></i></a>
          <a href="https://t.me/Stanislas_12" className="text-blue-500 hover:text-white text-2xl"><i className="fab fa-telegram"></i></a>
          <a href="https://www.facebook.com/share/1BWUsDQ7g" className="text-blue-700 hover:text-white text-2xl"><i className="fab fa-facebook"></i></a>
          <a href="https://wa.me/c/237658395783" className="text-green-500 hover:text-white text-2xl"><i className="fab fa-whatsapp"></i></a>
        </div>

        {/* INFORMATIONS DE CONTACT */}
        <div className="text-center mt-10">
          <p><i className="fas fa-envelope text-blue-400"></i> <span className="ml-2">simostanley91@gmail.com</span></p>
          <p><i className="fas fa-phone text-blue-400"></i> <span className="ml-2">+237 695 853 461</span></p>
          <p><i className="fas fa-map-marker-alt text-blue-400"></i> <span className="ml-2">Bafoussam-Banengo A, Cameroun</span></p>
        </div>

      </div>
    </div>
  );
};

export default Contact;
