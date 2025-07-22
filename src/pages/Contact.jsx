import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-black text-white px-4 pt-24 pb-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-gray-400 mb-10">
          Have a project in mind? Want to collaborate or just say hi? Drop me a
          message!
        </p>
      </div>

      <form className="max-w-3xl mx-auto space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">
            Message
          </label>
          <textarea
            rows="5"
            placeholder="Tell me about your project..."
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-lg"
        >
          Send Message
        </button>
      </form>

      {/* Optional: Contact Info */}
      <div className="mt-16 text-center text-gray-400">
        <p>
          Email:{" "}
          <a className="text-indigo-400 hover:underline">
            niap.migue.au@phinmaed.com
          </a>
        </p>
        <p>
          Facebook:{" "}
          <a
            href="https://www.facebook.com/nikus.angelo.miguel"
            className="text-indigo-400 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            /Nikus Angelo Miguel
          </a>
        </p>
        <p>
          Phone Number:{" "}
          <a
            className="text-indigo-400 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            0951-600-8141
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/AngeloApolinario"
            className="text-indigo-400 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            /AngeloApolinario
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
