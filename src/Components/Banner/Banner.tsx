import useFilterCity from "@Hooks/Queries/useFilterCity";
import { memo, useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { AppRoute } from "../../Navigator/AppRoute";
import { Toast } from "@Utils/Toast";
import { AppConst } from "@/Enum/AppConst";
import CustomSelect from "@Components/Dropdown";
import PLAYSTORE from "@Assets/Icons/playstore.png";
import APPLE from "@Assets/Icons/apple.png";
import STAR from "@Assets/Icons/star.png";
import HALFSTAR from "@Assets/Icons/halfstar.png";

const Banner = () => {
  const [searchJob, setSearchJob] = useState({
    city: "",
    title: "",
  });
  const navigate = useNavigate();
  const { data: cityList } = useFilterCity({});

  return (
    <>
      <section className="tf-slider sl7  over-flow-hidden">
        <div className="container">
          <div className="row justify-content-center mobile-container">
            <div className="col-lg-9 col-md-12">
              <div className="content wow fadeInUp">
                <div className="form-sl mb-5">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (searchJob?.title) {
                        navigate({
                          pathname: AppRoute.Find_Jobs,
                          search: createSearchParams(searchJob).toString(),
                        });
                      } else {
                        Toast("error", " Fields are required");
                      }
                    }}
                  >
                    <div className="row-group-search home1 st">
                      <div className="form-group-1">
                        <span className="icon-search search-job"></span>
                        <input
                          name={"keyword"}
                          type="text"
                          className="input-filter-search"
                          placeholder="Job title, key words or company"
                          onChange={(e) => {
                            setSearchJob({
                              ...searchJob,
                              title: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="form-group-2">
                        <span className="icon-map-pin"></span>
                        <CustomSelect
                          options={cityList?.cities || []}
                          setSearchJob={(city) => {
                            setSearchJob((oldSearchJob) => ({
                              ...oldSearchJob,
                              city,
                            }));
                          }}
                          searchJob={searchJob}
                        />
                      </div>
                      <div className="form-group-4">
                        <button type="submit" className="btn btn-find">
                          Find Jobs
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className=" flex gap-3 w-full justify-center items-center cursor-pointer">
                  <div className="  bg-white px-4 py-2 rounded-[30px] flex items-center justify-center gap-3">
                    <img
                      alt="playstore"
                      className=" w-[25px]"
                      src={PLAYSTORE}
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className=" text-black font-bold text-[15px]">
                        Play Store
                      </h3>
                      <div className=" flex gap-1">
                        <h3 className=" font-bold text-[10px]">4.5</h3>
                        <img className="w-[10px]" src={STAR} alt="star" />
                        <img className="w-[10px]" src={STAR} alt="star" />
                        <img className="w-[10px]" src={STAR} alt="star" />
                        <img className="w-[10px]" src={STAR} alt="star" />
                        <img className="w-[10px]" src={HALFSTAR} alt="star" />
                      </div>
                    </div>
                  </div>
                  <div className="  bg-white px-4 py-2 rounded-[30px] flex items-center justify-center gap-3">
                    <img
                      alt="playstore"
                      className=" w-[25px]"
                      src={APPLE}
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className=" text-black font-bold text-[15px]">
                        App Store
                      </h3>
                      <div className=" flex gap-1">
                        <h3 className=" font-bold text-[10px]">4.5</h3>
                        <img className="w-[10px]" src={STAR} alt="star" />
                        <img className="w-[10px]" src={STAR} alt="star" />
                        <img className="w-[10px]" src={STAR} alt="star" />
                        <img className="w-[10px]" src={STAR} alt="star" />
                        <img className="w-[10px]" src={HALFSTAR} alt="star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="heading d-flex flex-col items-center mt-4">
                  <h2 className="text-center font-bold text-5xl leading-[60px] ">
                    Finding jobs made{" "}
                    <span className="text-animation">super-easy</span> with the
                    POWER of AI and Humans.
                  </h2>
                  <p className="w-75 text-center">
                    Get the top{" "}
                    <span className="text-xl font-bold tracking-wide">1%</span>{" "}
                    filtered candidates
                    <span className="text-xl font-bold"> 3x</span>{" "}
                    {` faster with ${AppConst.LogoName}. You can focus on onboarding
                    while we find the perfect fit.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Banner);
