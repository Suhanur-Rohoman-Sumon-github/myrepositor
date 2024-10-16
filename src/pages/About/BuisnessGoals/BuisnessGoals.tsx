import { useState } from "react";
import Container from "../../../components/Container";
import HeadingText from "../../../components/HeadingText";
import TabContent from "../../../components/TabContent";
import BuisnessGoalsCard from "../../../components/BuisnessGoalsCard";
import { GiNotebook } from "react-icons/gi";
import { CgNotes } from "react-icons/cg";
import { FaFile } from "react-icons/fa6";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const BuisnessGoals = () => {
  const [tabToggle, setTabToggle] = useState("expertise");
  return (
    <div className="bg-[url(https://i.ibb.co.com/ySZ6gS4/how-We-Work.jpg)] lg:h-[652px] bg-cover bg-center flex justify-center items-center">
      <Container>
        <div className="lg:flex justify-between items-center">
          <HeadingText
            style="lg:w-1/3"
            subheading="our commitment"
            heading="Your Business Goals Are Our Top Priority"
          />
          <div className="space-y-5 lg:w-[37%]">
            {/* tab button */}
            <div className="flex font-semibold border shadow-md  gap-2 rounded-full">
              <button
                onClick={() => setTabToggle("expertise")}
                className={`px-8 py-3 rounded-s-full  ${
                  tabToggle === "expertise" && "bg-brandPrimary text-white"
                }`}
              >
                Expertise
              </button>
              <button
                onClick={() => setTabToggle("innovation")}
                className={`px-8 py-3   ${
                  tabToggle === "innovation" && "bg-brandPrimary text-white"
                }`}
              >
                Innovation
              </button>
              <button
                onClick={() => setTabToggle("accountability")}
                className={`px-8 py-3 rounded-e-full  ${
                  tabToggle === "accountability" && "bg-brandPrimary text-white"
                }`}
              >
                Accountability
              </button>
            </div>
            {/* tab content */}
            {(tabToggle === "expertise" && (
              <TabContent
                firstPera="We embody unwavering expertise. garnered through yearsof industry mastery. Our team’s extensive knowledge and refined skills ensure effective solutions, fostering trust."
                secondPera=""
              />
            )) ||
              (tabToggle === "innovation" && (
                <TabContent
                  firstPera="“HR Solutions are incredibly accommodating, diligent andof both concerned parties within the interviewing and hiringprocess - That really helps with building a life and career”"
                  secondPera=""
                />
              )) ||
              (tabToggle === "accountability" && (
                <TabContent
                  firstPera="We embody unwavering expertise. garnered through yearsof industry mastery. Our team’s extensive knowledge and refined skills ensure effective solutions, fostering trust."
                  secondPera=""
                />
              ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <BuisnessGoalsCard
            Icon={GiNotebook}
            heading="Years of industry experience"
            value="15+"
          />
          <BuisnessGoalsCard
            Icon={CgNotes}
            heading="Digital project completed"
            value="244"
          />
          <BuisnessGoalsCard
            Icon={FaFile}
            heading="Data transferred monthly"
            value="300"
          />
          <BuisnessGoalsCard
            Icon={IoCheckmarkDoneCircle}
            heading="Certified HR Solution"
            value="440+"
          />
        </div>
      </Container>
    </div>
  );
};

export default BuisnessGoals;
