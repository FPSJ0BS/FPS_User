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
    title: "What our clients are saying",
    text: "Showing companies based on reviews and recent job openings",
  });
  useLayoutEffect(() => {
    const _data = testimonial?.data?.data?.map((item) => {
      return { ...item, isMore: false };
    });
    setTestimonialData(_data);
  }, [testimonial]);

  return (
    <section className="inner-testimonials-section">
      <div className="wrap-testimonials over-flow-hidden ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tf-title style-2">
                <div className="group-title">
                  <h1>{dataBlock.title}</h1>
                  <p>{dataBlock.text}</p>
                </div>
              </div>
            </div>
            <div className="slider-container">
              <Slider {...settings}>
                {testimonialData?.map((item: any, index) => {
                  // const _data = item?.details.split(" ");
                  return (
                    <div className={`${Style.container}`} key={index}>
                      <Imag
                        className={Style.image}
                        src={`${testimonial?.data?.base_url}${item?.image}`}
                        alt="author-image"
                      />
                      <div
                        className={`${Style.maincontent} d-flex flex-column justify-content-between`}
                      >
                        <p
                          className={`${Style.textcontent} d-flex flex-row ${
                            !item?.isMore && "align-items-center"
                          } `}
                        >
                          {/* {item?.isMore
                            ? _data.slice(0, _data.length).join(" ")
                            : _data.slice(0, 20).join(" ")} */}
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
                          <span className={Style.author}>{item?.name}</span>
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
