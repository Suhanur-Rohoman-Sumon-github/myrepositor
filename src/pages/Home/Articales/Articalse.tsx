import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../../../components/Container';
import HeadingText from '../../../components/HeadingText';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import ArticaleSliderCard from '../../../components/ArticaleSliderCard';
const Articalse = () => {
  return (
    <Container>
      <HeadingText
        heading="Explore Our Lastest Articles"
        subheading="our blog"
        style="text-center my-12"
      ></HeadingText>
      <div className="lg:flex overflow-hidden space-y-5 items-center gap-10">
        <div className="bg-[url(https://s3-alpha-sig.figma.com/img/8922/a142/95f2decd1014efa96e295da28782eeed?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mYKJJ8LorEG3GzbViCj2cwtiShYH0xnMlhyBx0mpMi0nMVx68bUJRgBjsLWhBXAc0RuFjg-lhh5xzKhZ3uwAWvVWO7ZfgU1izE9wrF0dmQr0Q-VhGtQVBCvCOgp0Q8axhOpYrzhEL6CZutmyLshnITRJOHIDJaPCO1l8tmCYVATJfPmVYt5TAXQx32J19ZVpBgjxArT8qAnSayrivVen7fB~8Ilk-O1V~EIbi4Z7JWlmjKII7LodA3shq1LDQ1COl3jZCbHzKRkwonrOVpnSURlODDAuWIBPFh4NnmYPXGWLG~KzuChxnL4IwfJWz4pvruuKoGFczhIWtyznV5paxg__)] h-[450px] bg-no-repeat lg:w-[400px] bg-center bg-cover relative rounded-lg">
          <div className="bg-gradient-to-b to-black/50 h-1/3 via-black/50 from-transparent text-white space-y-3 absolute bottom-0 w-full flex-col flex justify-center items-center rounded-lg p-5">
            {' '}
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
              <ArticaleSliderCard />
            </SwiperSlide>
            <SwiperSlide>
              <ArticaleSliderCard />
            </SwiperSlide>
            <SwiperSlide>
              <ArticaleSliderCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default Articalse;
