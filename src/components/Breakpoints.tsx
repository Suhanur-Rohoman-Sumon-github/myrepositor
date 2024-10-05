import Container from './Container';

const Breakpoints = ({ path }: { path: string }) => {
  const pathArray = path.split(',');
  return (
    <div className="p-5 w-full  bg-[#E1E8FF]">
      <Container>
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <a>Home</a>
            </li>
            {pathArray.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Breakpoints;
