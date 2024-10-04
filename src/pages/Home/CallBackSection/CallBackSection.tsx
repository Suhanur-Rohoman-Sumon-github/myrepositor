import Container from '../../../components/Container';
import HeadingText from '../../../components/HeadingText';

const CallBackSection = () => {
  return (
    <div className="bg-[url(https://s3-alpha-sig.figma.com/img/ddec/de56/61d221d46dae60f867cba8ebeb9a6bd2?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yi1ZtoGKh0rqEyi0~mNdUtvtIXN~ktcjB-kOiDOIQ5yP4YP~86QMlmeYHxVMYAw5odk1~3aLkUBDmQNR2wVCkLgpsJFuMFX6fd2Px7tQc84tTGVmQduCcyjcdhATmiRp~cVORv9B8igOtjPGYywbzqKJqtkrMTfnlbGMTAS0FVbLRHnilQZlYVor2Io47xiw8x8d1LlSMtpXm3E-4OZ7CJ6FPWrkSOuGbHjEDg6wS66bwPZsSol8m3QdcThqvGroaWuWAvqusLHgwFf1lC5-WhL3XNyOKXEdbCOcXazsfndl~H1fwKb6gNJUwGpRnBMJIcXvsIGYc8YCld1vb9HGZA__)] lg:h-[850px]  bg-center bg-cover my-[116px] bg-no-repeat lg:flex justify-between items-center">
      <Container>
        <div className="lg:flex justify-between gap-10">
          <div className="lg:w-1/2">
            <HeadingText
              style=""
              heading="Request A Call Back"
              subheading="get a quote"
            />
            <p className="mt-5 text-[#7D7D7D]">
              Contact to us when you have questions for our solution or
              something elses.
            </p>
            <div className="mt-8">
              <form className="space-y-6   rounded-lg ">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Interested In"
                  className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button type="submit" className="btn-primary ">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className=" relative -top-24">
            <img
              className=" w-full"
              src="https://s3-alpha-sig.figma.com/img/6175/e36d/69fa498ab782d1c52c2939a7414b071e?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OKb75aC8uBq6LuLaBq9f-0IyGNgajoyE943RHZMe0~gfGPSPpw0Vl~PoMouLvmgMaavBAKjVNaZONW16QfUPbS1z~6s1LwV~2LWxINyf6gfClIXn2qQa6Kg5QKLXtkbD5njypOmBEyiLHhw4i~osGFWs0qwckjMnDAFa2Mz923zhrpzq4Gy8dJtQeHj9YhHrKOi105Z0HXIxEfzKyA8Qv-Ru35DNcWWFcGHmZdazh65HCwrlPsbaQhd41WUFmKkCfosho4Izk4dQ9rIMVnSU0v~0nIeU0077En0No0bSAgbDQG8PN9I38XwCD-A4tqLRLlSVtyY32vubYyKszbfcyg__"
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CallBackSection;
