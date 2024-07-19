import { useContext } from "react"
import { HeroTextsData } from "../CustomHooks/UseContext"




// 
function HeroSection() {
  const { Title, Description, ButtonText, HeroImage } = useContext(HeroTextsData)
  return (
    <main className="h-[500px] w-full bg-[#F6F6F8]   grid grid-cols-2 overflow-hidden phone:grid-cols-1 phone:h-[700px] tablet:grid-cols-1 tablet:h-[700px]  mt-[58px] ">
      <div className="tablet:h-[300px]   ">
        <img src={HeroImage} alt="" className="h-full w-full object-cover  " />
      </div>
      <div className=" p-8 flex justify-center items-center phone:h-[350px]   phone:p-[1rem]  ">
        <div className="text-center">
          <h1 className="text-[4rem] capitalize font-[700] phone:text-[2.6rem]">{Title}</h1>
          <p className="text-[1.2rem] mt-[10px]">{Description}</p>
          <button className="h-[40px] w-[220px] border-[2px] border-black mt-[25px] rounded-[20px] text-[17px] font-bold hover:bg-black hover:text-white duration-[1.3s] ">{ButtonText}</button>
        </div>
      </div>
    </main>
  )
}

export default HeroSection
