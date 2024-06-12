import { memo } from "react";
import Pen from "@Assets/Icons/pen.png";

function Skills() {

  const skillsData = [
    {id: 1, name: "react"},
    {id: 2, name: "javascript"},
    {id: 3, name: "typescript"},
    {id: 4, name: "sql"},
    {id: 5, name: "html"},
    {id: 6, name: "css"},
    {id: 7, name: "Redux"},
    {id: 8, name: "Express.js"},
    {id: 9, name: "Node.js"},
    {id: 10, name: "Python"},
    {id: 11, name: "Java"},
    {id: 12, name: "C++"},
    {id: 13, name: "Ruby"},
    {id: 14, name: "Django"},
    {id: 15, name: "Flutter"},
    {id: 16, name: "Swift"},
    {id: 17, name: "Kotlin"},
    {id: 18, name: "GraphQL"},
    {id: 19, name: "Vue.js"},
    {id: 20, name: "Angular"},
    {id: 21, name: "PHP"},
    {id: 22, name: "MongoDB"},
    {id: 23, name: "PostgreSQL"},
    {id: 24, name: "Docker"},
    {id: 25, name: "Kubernetes"},
    
];


  



  return (
    <div className="bg-white rounded-[20px]  p-[20px] min-h-[200px] w-full">
       <div className=" flex justify-between items-center gap-2  ">
        <h6 className=" w-ful flex gap-2 cursor-default font-bold">
          Skills{" "}
        </h6>
        <div className=" cursor-pointer text-[#81b29a] font-semibold hover:bg-[#81b29a] hover:text-white px-3 py-1 border-[2px] border-solid  rounded-3xl flex justify-center items-center">Add Skills</div>

        
      </div>
      <hr />

      <div className=" flex  gap-2 justify-start items-center mt-[20px] flex-wrap">
        
        {skillsData.map(item => {
          return (
            <p className=" cursor-default capitalize mb-0 border-[2px] border-solid px-3 rounded-3xl border-[#ebebf2]">{item.name}</p>
          )
        })}

        
      </div>
    </div>
  );
}

export default memo(Skills);
