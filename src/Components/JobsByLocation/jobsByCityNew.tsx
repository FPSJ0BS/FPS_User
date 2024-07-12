import CITYBGIMAGE from "@Assets/Icons/citybgimage.png";
import image from "@Assets/Icons/Group 1000007302.png";

const JobsByCityNew = () => {
  return (
    <div className=" flex items-end h-[600px] w-full bg-black mt-[-50px] ">
      <div className="  w-[50%] h-full text-[30px] p-[50px] flex items-start justify-center flex-col gap-3 ">
        <h2 className=" text-white">Find Opportunities in Your City</h2>
        <p className="text-[16px] text-white font-medium">
          Check out our curated list of top faculty positions in popular cities.
          These featured roles offer exciting opportunities in renowned
          institutions and vibrant communities.
        </p>
        <img src={image} alt="test" />
      </div>

      <div className="w-[50%]">
        <img src={CITYBGIMAGE} className=" w-full mt-[-50px]" alt="bgimage" />
      </div>
    </div>
  );
};

export default JobsByCityNew;
