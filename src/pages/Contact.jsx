const Contact = () => {
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
        <form className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Nom</label>
            <input type="text" className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none" placeholder="Votre nom" />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input type="email" className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none" placeholder="Votre email" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Sujet</label>
            <input type="text" className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none" placeholder="Sujet du message" />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea rows="4" className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none" placeholder="Votre message"></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Envoyer <i className="fas fa-paper-plane ml-2"></i>
          </button>
        </form>

        {/* RÉSEAUX SOCIAUX */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://github.com/StanislasDev" className="text-gray-400 hover:text-white text-2xl"><i className="fab fa-github"></i></a>
          <a href="#" className="text-blue-500 hover:text-white text-2xl"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="text-blue-400 hover:text-white text-2xl"><i className="fab fa-twitter"></i></a>
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
