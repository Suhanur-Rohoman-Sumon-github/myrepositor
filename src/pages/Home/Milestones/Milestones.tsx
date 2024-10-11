import Container from "../../../components/Container";
import MilestoneCard from "../../../components/MilestoneCard";

const Milestones = () => {
  return (
    <Container>
      <div className="my-[165px] grid grid-cols-1 lg:grid-cols-4 gap-10 md:grid-cols-2">
        <MilestoneCard count="834.0 k" text="Total Freelancer" />
        <MilestoneCard count="732.0 k" text="Positive Review" />
        <MilestoneCard count="90.0 k" text="Order Received" />
        <MilestoneCard count="232.0 k" text="Project Complete" />
      </div>
    </Container>
  );
};

export default Milestones;
