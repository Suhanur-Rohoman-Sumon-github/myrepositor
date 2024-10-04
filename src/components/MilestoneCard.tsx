const MilestoneCard = ({ count, text }: { count: string; text: string }) => {
  return (
    <div className="p-2 text-center space-y-1">
      <h4 className="text-5xl text-brandPrimary font-bold">{count}</h4>
      <p className="text-xl">{text}</p>
    </div>
  );
};

export default MilestoneCard;
