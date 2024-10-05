const TabContent = ({
  firstPera,
  secondPera,
}: {
  firstPera: string;
  secondPera: string;
}) => {
  return (
    <div className="space-y-3">
      <p>{firstPera}</p>
      <p>{secondPera}</p>
    </div>
  );
};

export default TabContent;
