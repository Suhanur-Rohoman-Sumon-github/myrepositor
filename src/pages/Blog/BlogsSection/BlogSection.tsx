import BlogCard from '../../../components/BlogCard';
import Container from '../../../components/Container';

const BlogSection = () => {
  return (
    <Container>
      <div className="my-[116px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </Container>
  );
};

export default BlogSection;
