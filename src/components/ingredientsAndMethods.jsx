import { useContext } from 'react'
import { IngredentsAndMethodsData } from '../CustomHooks/UseContext'




function IngredientsAndMethods() {
  const { Title, Description, ButtonText, ImageUrl } = useContext(IngredentsAndMethodsData)
  return (
    <div className='h-[550px] w-full grid grid-cols-2 bg-[#F6F5F8] '>
      <div className="p-4 flex justify-center items-center pl-[10%] ">
        <div className=''>
          <h2 className='text-[3rem] font-[500] w-[70%] text-center'>{Title}</h2>
          <p className='text-center text-[17px] mt-3 mb-7 w-[80%]'>{Description}</p>
          <button
            className='h-[40px] w-[200px] border-[2px] border-black rounded-[20px] font-bold ml-[18%]'>{ButtonText}</button>
        </div>
      </div>
      <div className="">
        <img src={ImageUrl} alt="" />
      </div>
    </div>
  )
}

export default IngredientsAndMethods
