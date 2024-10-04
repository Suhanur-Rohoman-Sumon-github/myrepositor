import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../../../components/Container';
import HeadingText from '../../../components/HeadingText';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import LeadershipCard from '../../../components/LeadershipCard';
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
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <LeadershipCard />
          </SwiperSlide>
          <SwiperSlide>
            <LeadershipCard />
          </SwiperSlide>
          <SwiperSlide>
            <LeadershipCard />
          </SwiperSlide>
          <SwiperSlide>
            <LeadershipCard />
          </SwiperSlide>
          <SwiperSlide>
            <LeadershipCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default LeadershipSection;
