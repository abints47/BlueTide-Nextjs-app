
export default function contact(){
    return (
        <>
         <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <h1 className="text-4xl font-bold tracking-tighter text-[#2B2B28] mb-3">
          Contact
        </h1>
        <p className="text-gray-600 mb-10">
          Have a question or just want to say hi? Fill out the form below.
        </p>

        <form className="space-y-5 text-left">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-600 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-gray-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-gray-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-gray-600 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Your message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-gray-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2B2B28] text-white rounded-lg py-2.5 font-medium hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
        </>
    );
}