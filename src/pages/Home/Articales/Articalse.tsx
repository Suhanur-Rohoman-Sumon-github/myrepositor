import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../../components/Container";
import HeadingText from "../../../components/HeadingText";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import BlogCard from "../../../components/BlogCard";
const Articalse = () => {
  return (
    <Container>
      <HeadingText
        heading="Explore Our Lastest Articles"
        subheading="our blog"
        style="text-center my-12"
      ></HeadingText>
      <div className="lg:flex overflow-hidden space-y-5 items-center gap-10">
        <div className="bg-[url(https://i.ibb.co.com/6vLhXpX/blogBg.jpg)] h-[450px] bg-no-repeat lg:w-[400px] bg-center bg-cover relative rounded-lg">
          <div className="bg-gradient-to-b to-black/50 h-1/3 via-black/50 from-transparent text-white space-y-3 absolute bottom-0 w-full flex-col flex justify-center items-center rounded-lg p-5">
            {" "}
            <div className="flex gap-2">
              <button className="btn-primary-sm text-xs">IT Companies</button>
              <button className="btn-primary-sm text-xs">Uncategorized</button>
            </div>
            <p className="w-1/2">How to Attract Top Talent to Your Company</p>
          </div>
        </div>
        <div className="lg:w-[calc(100%-450px)] ">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <BlogCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCeFFQCHg4OkwtcgbTzrHwaMlEdvAYmnn9Wg&s" />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard img="https://www.theminimalists.com/wp-content/uploads/2019/01/how-to-start-a-blog-in-2020.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTfiUIzxhWa9dNhVte3RvMeeyA6wfbnoORQ&s" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default Articalse;
