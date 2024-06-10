import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import Imag from "@Components/Image/Image";
import { AppConst } from "@/Enum/AppConst";
import usePartner from "@Hooks/Queries/usePartner";
import { memo } from "react";
import React from "react";

function Partner() {
  const { data: partnerData } = usePartner({});

  return (
    <section style={{ border: "1px solid #eeee " }}>
      <div className="wd-partner">
        <div className="container">
          <h1 className="title-partner">
            {` Over 5500+ IIT JEE NEET Coachings, Edtechs Schools, colleges & universities Use ${AppConst.LogoName} to Modernize their Academic & Non academic Hiring`}
          </h1>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={68.95}
            slidesPerView={6}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
            }}
            lazy={{
              loadPrevNext: true,
            }}
            className="partner-type-6"
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
                slidesPerView: 6,
              },
            }}
          >
            {partnerData?.data?.data?.map((item, index) => (
              <SwiperSlide key={index}>
                <React.Fragment>
                  {" "}
                  <a className="logo-partner">
                    <Imag
                      className="parterImage"
                      src={`${partnerData?.data?.base_url}${item?.image}`}
                      alt="partner-logo"
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
