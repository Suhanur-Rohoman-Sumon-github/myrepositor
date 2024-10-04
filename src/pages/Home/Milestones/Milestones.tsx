import Container from '../../../components/Container';
import MilestoneCard from '../../../components/MilestoneCard';

const Milestones = () => {
  return (
    <Container>
      <div className="my-[165px] grid grid-cols-1 lg:grid-cols-4 gap-10 md:grid-cols-2">
        <MilestoneCard count="834.0 M" text="Total Freelancer" />
        <MilestoneCard count="732.0 M" text="Positive Review" />
        <MilestoneCard count="90.0 M" text="Order Received" />
        <MilestoneCard count="232.0 M" text="Project Complete" />
      </div>
    </Container>
  );
};

export default Milestones;
