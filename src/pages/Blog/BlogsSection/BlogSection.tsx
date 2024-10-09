import BlogCard from '../../../components/BlogCard';
import Container from '../../../components/Container';

const BlogSection = () => {
  return (
    <Container>
      <div className="my-[116px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <BlogCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuld8t1Wry-iPatHLQP0K_kHBZka111VBYaw&s" />
        <BlogCard img="https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA=" />
        <BlogCard img="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg" />
        <BlogCard img="https://www.lisedunetwork.com/wp-content/uploads/2019/06/Blog-1.jpg" />
        <BlogCard img="https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e.png" />
        <BlogCard img="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/How_To_Start_A_Blog_-_article_image.jpg" />
        <BlogCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCeFFQCHg4OkwtcgbTzrHwaMlEdvAYmnn9Wg&s" />
        <BlogCard img="https://www.theminimalists.com/wp-content/uploads/2019/01/how-to-start-a-blog-in-2020.jpg" />
        <BlogCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTfiUIzxhWa9dNhVte3RvMeeyA6wfbnoORQ&s" />
      </div>
    </Container>
  );
};

export default BlogSection;
