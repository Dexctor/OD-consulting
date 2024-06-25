// components/ContactForm.js
export default function ContactForm() {
    return (
      <div id="contact" className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center">Contactez-moi</h2>
        <form className="mt-8 max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Nom</label>
            <input type="text" className="input input-bordered w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email</label>
            <input type="email" className="input input-bordered w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Message</label>
            <textarea className="textarea textarea-bordered w-full"></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full">Envoyer</button>
        </form>
      </div>
    );
  }
  