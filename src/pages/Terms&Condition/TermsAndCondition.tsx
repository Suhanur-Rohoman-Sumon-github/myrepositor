import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="max-w-7xl lg:w-1/2 mt-[116px] mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6 headerFont">
        Terms and Conditions
      </h1>
      <p className="mb-4">
        <strong>Effective Date:</strong> 08/10/2024
      </p>
      <p className="mb-4">
        <strong>Last Updated:</strong> 08/10/2024
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 headerFont">
        Introduction
      </h2>
      <p className="mb-4">
        Welcome to TechTuend Services! These Terms and Conditions govern your
        use of our website and services. By accessing or using our website{' '}
        <Link
          className="text-brandPrimary"
          to="https://tech-tuned-services-frontend.vercel.app/"
        >
          https://tech-tuned-services-frontend.vercel.app/
        </Link>{' '}
        , you agree to comply with and be bound by these Terms and Conditions.
      </p>
      <p className="mb-4">
        Please read these terms carefully. If you do not agree with any part of
        these terms, you must not use our website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 headerFont">
        Use of Our Website
      </h2>
      <p className="mb-4">
        You agree to use our website only for lawful purposes and in a manner
        that does not infringe the rights of or restrict or inhibit the use and
        enjoyment of our website by any third party.
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>You must not use the website for any fraudulent purposes.</li>
        <li>
          You must not upload any content that is unlawful, harmful, or
          offensive.
        </li>
        <li>
          You must not attempt to gain unauthorized access to our systems or
          networks.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 headerFont">
        Intellectual Property
      </h2>
      <p className="mb-4">
        All content on our website, including text, graphics, logos, and images,
        is the property of TechTuend Services or its content suppliers and is
        protected by intellectual property laws. You may not use, copy, or
        distribute any content from our website without our prior written
        permission.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 headerFont">
        User Accounts
      </h2>
      <p className="mb-4">
        If you create an account on our website, you are responsible for
        maintaining the confidentiality of your account information and for all
        activities that occur under your account. You must notify us immediately
        if you suspect any unauthorized use of your account.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 headerFont">
        Termination
      </h2>
      <p className="mb-4">
        We reserve the right to terminate or suspend your access to our website
        at any time, without notice, for any reason, including but not limited
        to a breach of these Terms and Conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 headerFont">
        Limitation of Liability
      </h2>
      <p className="mb-4">
        To the fullest extent permitted by law, TechTuend Services shall not be
        liable for any direct, indirect, incidental, special, or consequential
        damages arising from your use of the website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 headerFont">
        Governing Law
      </h2>
      <p className="mb-4">
        These Terms and Conditions are governed by and construed in accordance
        with the laws of Bangladesh, and any disputes relating to these terms
        will be subject to the exclusive jurisdiction of the courts of
        Bangladesh.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 headerFont">
        Changes to These Terms
      </h2>
      <p className="mb-4">
        We reserve the right to update these Terms and Conditions at any time.
        Any changes will be posted on this page, and your continued use of the
        website after such changes will constitute your acceptance of the new
        terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 headerFont">
        Contact Us
      </h2>
      <p className="mb-4">
        If you have any questions about these Terms and Conditions, please
        contact us at support@gmail.com.
      </p>
    </div>
  );
};

export default TermsAndConditions;
