import { memo } from 'react'

function LeftSection() {

    const Links  = [

        {id:1, name: "Resume", navigate: ""},
        {id:1, name: "Education", navigate: ""},
        {id:1, name: "Employment", navigate: ""},
        {id:1, name: "Skills", navigate: ""},
        {id:1, name: "Certificates", navigate: ""},
        {id:1, name: "Language", navigate: ""},
        {id:1, name: "Profile Views", navigate: ""},
        {id:1, name: "Achievements", navigate: ""},

    ]
  return (
    <div className=" w-[25%] bg-white rounded-[20px] h-[410px] p-[10px] flex flex-col gap-3 border-1 border-solid border-gray-200">

        <h6 className=' font-semibold px-2 pt-1'>Quick Links</h6>

        <div className='  flex flex-col gap-2'>
            
            {Links.map(item => {
                return (
                    <div key={item.id} className=' flex justify-between items-center hover:bg-[#f7f7f9] hover:rounded-[10px] px-3 py-1 cursor-default'>
                        <p className=' mb-0 font-semibold cursor-pointer' >{item.name}</p>
                        <button className=' cursor-pointer text-[#9c6644] font-bold'>Add</button>
                    </div>
                )
            })}

        </div>

    </div>
  )
}

export default memo(LeftSection)