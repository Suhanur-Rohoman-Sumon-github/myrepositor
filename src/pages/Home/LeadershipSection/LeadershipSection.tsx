import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../../components/Container";
import HeadingText from "../../../components/HeadingText";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import LeadershipCard from "../../../components/LeadershipCard";

const LeadershipSection = () => {
  return (
    <Container>
      <HeadingText
        style="text-center"
        subheading="meet our experts"
        heading="Our Leadership Team"
      />
      <div className="w-full p-5 my-12">
        <Swiper
          slidesPerView={3}
          spaceBetween={30} // More spacing between slides
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="w-full"
        >
          {/* Create multiple slides to simulate grid-like behavior */}
          <SwiperSlide>
            <LeadershipCard name="Hadiuzzaman Himel" title="CEO" />
          </SwiperSlide>
          <SwiperSlide>
            <LeadershipCard name="Adil Hossain" title="CTO" />
          </SwiperSlide>
          <SwiperSlide>
            <LeadershipCard name="Abdul Motaleb" title="SEO Specialist" />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default LeadershipSection;
