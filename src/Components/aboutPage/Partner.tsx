import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import Imag from "@Components/Image/Image";
import usePartner from "@Hooks/Queries/usePartner";
import React, { memo } from "react";

function Partner() {
  const { data: partnerData } = usePartner({});
  return (
    <section>
      <div className="wd-partner style-1">
        <div className="container">
          <h1 className="title-partner text-black">
            Over 5500+ IIT JEE NEET Coachings, Edtechs Schools, Colleges &
            Universities Use FPSJOBS+Tallento.Ai To Modernize Their Academic &
            Non Academic Hiring
          </h1>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={68.95}
            slidesPerView={6}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
            }}
            className="partner-type-7"
            loop={true}
            speed={3000}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              500: {
                slidesPerView: 3,
              },
              800: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
              1600: {
                slidesPerView: 7,
              },
            }}
          >
            {partnerData?.data?.data?.map((item, index) => (
              <SwiperSlide key={index}>
                <React.Fragment>
                  <a className="logo-partner">
                    <Imag
                      src={`${partnerData?.data?.base_url}${item?.image}`}
                      alt="partnerlogo"
                      style={{ height: "55px", width: "120px" }}
                    />
                  </a>
                </React.Fragment>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default memo(Partner);
