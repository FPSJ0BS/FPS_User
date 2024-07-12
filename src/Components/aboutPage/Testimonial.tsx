import { memo, useLayoutEffect, useState } from "react";
import Imag from "@Components/Image/Image";
import useTestimonial from "@Hooks/Queries/useTestimonial";
import Style from "./testimonial.module.css";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings: Settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  adaptiveHeight: true,
  centerMode: true,
  centerPadding: "0%",
  pauseOnHover: true,
  vertical: false,
  arrows: false,
  infinite: true,

  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        vertical: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        vertical: false,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        vertical: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        vertical: false,
      },
    },

    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1.5,
        infinite: true,
        vertical: false,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        vertical: false,
      },
    },
  ],
};

function Testimonial() {
  const { data: testimonial } = useTestimonial({});
  const [testimonialData, setTestimonialData] = useState<any>([]);
  const [dataBlock] = useState({
    text: "Showing companies based on reviews and recent job openings",
  });
  useLayoutEffect(() => {
    const _data = testimonial?.data?.data?.map((item) => {
      return { ...item, isMore: false };
    });
    setTestimonialData(_data);
  }, [testimonial]);

  return (
    <section className="inner-testimonials-section md:block hidden">
      <div className="wrap-testimonials over-flow-hidden ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tf-title style-2">
                <div className="flex md:flex-row flex-col ">
                  <h1 className="  pr-[100px] xl:text-[35px] 2xltext-[40px] leading-[1.4em] text-left text-black ">
                    Check Out User
                    <br /> Reviews About Our
                    <br /> Platform!
                  </h1>
                  <div className=" flex flex-col items-start ">
                    <p className=" text-left text-black font-medium">
                      Tallento.ai is one of the largest platforms for the
                      education sector, making it easy to find the jobs you
                      want. Discover opportunities tailored to your skills and
                      achieve your career goals effortlessly
                    </p>
                    {/* <div className=" flex gap-5 pt-5">
                      <div className=" border-1 border-gray-500 border-solid w-[50px] h-[50px] flex justify-center items-center rounded-full text-[20px]">{"<"}</div>
                      <div className=" border-1 border-gray-500 border-solid w-[50px] h-[50px] flex justify-center items-center rounded-full text-[20px]">{">"}</div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-container">
              <Slider {...settings}>
                {testimonialData?.map((item: any, index) => {
                  // const _data = item?.details.split(" ");
                  return (
                    <div
                      className={` flex flex-col  min-h-[250px] rounded-xl bg-[#1d212a] rotate-2 my-5`}
                      key={index}
                    >
                      <img
                        className={`rounded-full ml-2 mt-2 w-[70px] h-[70px] border-1 border-white border-solid flex justify-center items-center`}
                        src={`${testimonial?.data?.base_url}${item?.image}`}
                        alt="author-image"
                      />
                      <div
                        className={`flex flex-column justify-content-between px-5 gap-3`}
                      >
                        <p className=" text-white line-clamp-5 pt-2">
                          {item?.details}
                        </p>

                        {/* <a
                          className={`tf-button d-flex flex-row justify-content-end d-block`}
                          style={{ color: "#a73358" }}
                          onClick={() => {
                            if (item?.isMore) {
                              testimonialData[index].isMore = false;
                            } else {
                              testimonialData[index].isMore = true;
                            }
                            setTestimonialData([...testimonialData]);
                          }}
                        >
                          {item?.isMore ? "Less..." : "More..."}
                        </a> */}

                        <div className={Style.poster}>
                          <span className="text-white pr-2 ">{item?.name}</span>
                          <span className={Style.credentials}>
                            {item?.designation}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Testimonial);
