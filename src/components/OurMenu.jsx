import { useContext } from 'react'
import { OurBreadSectionData } from '../CustomHooks/UseContext'
import PropTypes from 'prop-types';
import{motion} from 'framer-motion'


function BreadCard({data}) {
    const { Title, Description, ButtonText, imageUrl} = data 
    return (
        <motion.div className='h-[370px] w-[240px] bg-white p-3 rounded-[8px]'
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeIn", duration: 1 }}
            initial={{ scale: 0 }}
        >
            <img src={imageUrl} alt=""  className='h-[160px] w-full'/>
            <h2 className='text-center text-[20px] font-bold mt-3'>{Title}</h2>
            <p className='text-center'>{Description}</p>
            <button className='h-[30px] w-[150px] border-[2px] border-black mt-3 ml-8 rounded-[20px] font-bold hover:bg-black hover:text-white duration-[1.3s] '>{ ButtonText}</button>
        </motion.div>
    )
}
BreadCard.propTypes = {
    data: PropTypes.object,
}
function OurMenu() {
    const { Title, BackgroundImage, CardData } = useContext(OurBreadSectionData)
    return (
        <div className="h-[600px] w-full relative phone:h-[1700px] tablet:h-[900px]">
            <img src={BackgroundImage} alt="Background image" className='h-full w-full object-cover ' />
            <div className='absolute top-0 left-0 bg-[rgba(0,0,0,0.6)] mb-5 h-full w-full'>
                <motion.h1 className='text-white text-center font-[600] text-[50px] mt-6'
                    whileInView={{ scale: 1 }}
                    transition={{ ease: "easeIn", duration: 1 }}
                    initial={{ scale: 0}}
                >{Title}</motion.h1>
                <div className='flex justify-center items-center'>
                <div className='grid grid-cols-4 p-5 gap-7 phone:grid-cols-1 phone:gap-4 tablet:grid-cols-2 mt-3'>
                    {CardData.map((data, index) => {
                        return (
                            <BreadCard data={data} key={index}/>
                        )
                    })}
                </div>
                </div>
            </div>
        </div>
    )
}

export default OurMenu
