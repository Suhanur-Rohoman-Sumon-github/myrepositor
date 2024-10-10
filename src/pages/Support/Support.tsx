import Breakpoints from '../../components/Breakpoints';

const Support = () => {
  return (
    <div className=" min-h-screen mt-[116px]">
      <Breakpoints path="support" />

      <section className="container mx-auto mt-12 px-4 lg:px-0 lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-6">Contact Support</h2>

        <form className="bg-white p-8 shadow-md rounded-lg">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="John Doe"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="issue"
              className="block text-sm font-medium text-gray-700"
            >
              Issue/Inquiry
            </label>
            <textarea
              id="issue"
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Describe your issue or inquiry..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </section>

      <section className="container mx-auto mt-12 px-4 lg:px-0 lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-6">
          Frequently Asked Questions (FAQ)
        </h2>

        <div className="bg-white p-8 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">
            How can I track my project’s progress?
          </h3>
          <p className="mt-2 text-gray-600">
            We provide regular updates via email and you can also contact your
            project manager at any time.
          </p>

          <h3 className="text-lg font-semibold mt-6">
            Do you offer post-launch support?
          </h3>
          <p className="mt-2 text-gray-600">
            Yes, we offer continuous support packages for web maintenance, SEO
            services, and technical fixes.
          </p>

          <h3 className="text-lg font-semibold mt-6">
            How can I request changes to my project?
          </h3>
          <p className="mt-2 text-gray-600">
            You can request changes by emailing us or using the support form
            above, and our team will get back to you.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Support;
