import { useContext } from 'react'
import { IngredentsAndMethodsData } from '../CustomHooks/UseContext'
import {motion} from 'framer-motion'



function IngredientsAndMethods() {
  const { Title, Description, ButtonText, ImageUrl } = useContext(IngredentsAndMethodsData)
  return (
    <div className='h-[550px] w-full grid grid-cols-2 bg-[#F6F5F8] '>
      <div className="p-4 flex justify-center items-center pl-[10%] ">
        <motion.div className=''
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeIn", duration: 1 }}
          initial={{ scale: 0 }}>
          <h2 className='text-[3rem] font-[500] w-[70%] text-center'>{Title}</h2>
          <p className='text-center text-[17px] mt-3 mb-7 w-[80%]'>{Description}</p>
          <button
            className='h-[40px] w-[200px] border-[2px] border-black rounded-[20px] font-bold ml-[18%]'>{ButtonText}</button>
        </motion.div>
      </div>
      <motion.div className=""
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeIn", duration: 1 }}
        initial={{ scale: 0 }}>
        <img src={ImageUrl} alt="" />
      </motion.div>
    </div>
  )
}

export default IngredientsAndMethods
