import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="p-6 mt-[116px] lg:w-1/2 mx-auto">
      <h1 className="text-3xl font-bold headerFont mb-4">Privacy Policy</h1>
      <p className="text-sm mb-2">Effective Date: 08/10/2024</p>
      <p className="text-sm mb-8">Last Updated: 08/10/2024</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="mb-4">
          Welcome to TechTuend Services! We are committed to protecting your
          personal information and your right to privacy. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you visit our website{' '}
          <Link
            className="text-brandPrimary"
            to="https://tech-tuned-services-frontend.vercel.app/"
          >
            https://tech-tuned-services-frontend.vercel.app/
          </Link>{' '}
          or engage with our services.
        </p>
        <p className="mb-4">
          Please read this Privacy Policy carefully. If you do not agree with
          the terms of this policy, please do not access our website or use our
          services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
        <p className="mb-4">
          We may collect and process the following types of information:
        </p>

        <h3 className="text-xl font-medium mb-2">1. Personal Information</h3>
        <p className="mb-4">
          When you register on our site, place an order, or contact us, we may
          collect personal information, including but not limited to:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Payment information</li>
          <li>IP address</li>
        </ul>

        <h3 className="text-xl font-medium mb-2">
          2. Automatically Collected Information
        </h3>
        <p className="mb-4">
          We may also collect non-personally identifiable information
          automatically when you interact with our website, including:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Your IP address</li>
          <li>Browser type</li>
          <li>Operating system</li>
          <li>Pages visited on our site</li>
          <li>Referring URLs</li>
          <li>Date and time of your visit</li>
        </ul>

        <h3 className="text-xl font-medium mb-2">
          3. Cookies and Tracking Technologies
        </h3>
        <p className="mb-4">
          We use cookies and similar tracking technologies to track the activity
          on our website and hold certain information. Cookies are small data
          files that are placed on your device when you visit our website.
        </p>
        <p className="mb-4">
          You can set your browser to refuse all cookies or indicate when a
          cookie is being sent. However, if you disable cookies, some portions
          of our website may not function properly.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          How We Use Your Information
        </h2>
        <p className="mb-4">
          We may use the collected information for the following purposes:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>To provide, maintain, and improve our services.</li>
          <li>To process transactions and manage payments.</li>
          <li>
            To communicate with you, including sending transactional and
            promotional emails.
          </li>
          <li>
            To improve user experience and monitor the usage of our website.
          </li>
          <li>To detect and prevent fraud, abuse, and illegal activities.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          How We Share Your Information
        </h2>
        <p className="mb-4">
          We do not sell or rent your personal information to third parties.
          However, we may share your information in the following circumstances:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Service Providers:</strong> We may share your information
            with third-party vendors, contractors, or agents who perform
            services for us or on our behalf.
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose your
            information if required by law or in response to a court order or
            legal process.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          Security of Your Information
        </h2>
        <p className="mb-4">
          We take the security of your personal information seriously and use
          industry-standard security measures to protect it. However, no method
          of transmission over the Internet or method of electronic storage is
          100% secure. Therefore, while we strive to protect your personal
          information, we cannot guarantee its absolute security.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
        <p className="mb-4">
          You have the following rights regarding your personal information:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Access: You can request a copy of the personal information we hold
            about you.
          </li>
          <li>
            Correction: You can request that we correct any inaccuracies in your
            personal data.
          </li>
          <li>
            Deletion: You can request that we delete your personal information,
            subject to legal requirements.
          </li>
          <li>
            Opt-out: You can opt-out of receiving promotional emails from us by
            following the unsubscribe instructions in those emails.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Third-Party Links</h2>
        <p className="mb-4">
          Our website may contain links to third-party websites that are not
          operated by us. We strongly advise you to review the privacy policy of
          every site you visit. We are not responsible for the privacy practices
          or content of these third-party websites.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date. We encourage
          you to review this Privacy Policy periodically for any changes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <p>Email: support@gmail.com</p>
        <p>Phone: 01403406419</p>
        <p>Address: Mirpur 10 , Dhaka,Bangladesh</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
