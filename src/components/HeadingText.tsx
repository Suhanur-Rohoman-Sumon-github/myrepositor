type THeadingText = {
  heading: string;
  subheading: string;
  style: string;
};
const HeadingText = ({ heading, subheading, style }: THeadingText) => {
  return (
    <div className={`${style} mb-12 space-y-3`}>
      <h6 className="text-brandPrimary">/ {subheading} /</h6>
      <h3 className=" text-2xl md:text-4xl font-bold">{heading}</h3>
    </div>
  );
};

export default HeadingText;
