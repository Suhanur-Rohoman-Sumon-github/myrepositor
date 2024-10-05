import Breakpoints from '../../components/Breakpoints';
import BlogSection from './BlogsSection/BlogSection';

const Blog = () => {
  return (
    <div className="mt-[116px]">
      <Breakpoints path="Blog" />
      <BlogSection />
    </div>
  );
};

export default Blog;
