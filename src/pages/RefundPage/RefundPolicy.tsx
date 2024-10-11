const RefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 mt-28">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-center">Refund Policy</h1>

      {/* Introduction */}
      <p className="text-lg mb-4">
        At <strong>SEO Idea Planet Service</strong>, we are dedicated to
        providing top-tier SEO services that meet your business needs. However,
        if you are not fully satisfied with the results of our services, we’re
        here to ensure you get the support you deserve.
      </p>

      {/* Refund Eligibility */}
      <h2 className="text-2xl font-semibold mb-3">Refund Eligibility</h2>
      <p className="text-md mb-4">
        Our SEO services are based on tailored strategies and efforts aimed at
        improving your website's performance. Due to the nature of these
        services, refunds are provided in specific circumstances. You may be
        eligible for a refund if:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          No significant progress has been made within 30 days of service
          initiation.
        </li>
        <li>
          Clear breaches of the agreed-upon scope of services or deliverables
          are evident.
        </li>
        <li>
          We fail to deliver agreed services as outlined in your contract.
        </li>
      </ul>
      <p className="text-md mb-4">
        Refund requests must be made within 30 days of the purchase. Any refund
        request submitted after this period will not be considered.
      </p>

      {/* No Refund Cases */}
      <h2 className="text-2xl font-semibold mb-3">
        Cases Where Refunds Are Not Applicable
      </h2>
      <p className="text-md mb-4">
        Refunds will not be provided under the following circumstances:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          SEO work has been completed according to the agreed service terms.
        </li>
        <li>
          The client fails to provide necessary access, content, or information
          on time.
        </li>
        <li>
          Google algorithms or search engine policy changes cause fluctuations
          in rankings.
        </li>
        <li>The client delays or interferes with the service process.</li>
      </ul>

      {/* Refund Request Process */}
      <h2 className="text-2xl font-semibold mb-3">How to Request a Refund</h2>
      <p className="text-md mb-4">
        To request a refund, please contact us at{" "}
        <a
          href="mailto:support@seoidiaplanet.com"
          className="text-[#9867ff] underline"
        >
          support@seoideaplanet.com
        </a>{" "}
        with your service details and reasons for requesting a refund. Our team
        will review your request and respond within 7 business days with a
        resolution.
      </p>

      {/* Refund Approval */}
      <h2 className="text-2xl font-semibold mb-3">Refund Approval Process</h2>
      <p className="text-md mb-4">
        If your refund request is approved, the refund will be processed to the
        original method of payment within 10 business days. Please note that it
        may take additional time for your bank or credit card company to process
        the refund.
      </p>

      {/* Contact Information */}
      <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
      <p className="text-md mb-4">
        If you have any questions regarding our refund policy, feel free to
        reach out to us at{" "}
        <a
          href="mailto:support@seoidiaplanet.com"
          className="text-[#9867ff] underline"
        >
          support@seoideaplanet.com
        </a>
        . We’re always here to help.
      </p>
    </div>
  );
};

export default RefundPolicy;
