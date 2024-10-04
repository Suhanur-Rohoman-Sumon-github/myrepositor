const WhoWeAreCard = ({ heading, text }: { heading: string; text: string }) => {
  return (
    <div className="space-y-2 ">
      <h3 className="text-2xl font-semibold">{heading}</h3>
      <p>{text}</p>
    </div>
  );
};

export default WhoWeAreCard;
