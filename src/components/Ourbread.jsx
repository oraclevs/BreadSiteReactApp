import { useContext } from 'react'
import { OurBreadSection2Data } from '../CustomHooks/UseContext'
import PropTypes from 'prop-types'
import { motion } from "framer-motion"





const OurBreadCard = ({ Data }) => {
    const { Title, Description } = Data
    return (
        <div className='h-[180px] w-[360px]  bg-dark-cover text-white  rounded-[10px] pt-8 pl-8'>
            <h2>{Title}</h2>
            <p>{Description}</p>
        </div>
    )
}

OurBreadCard.propTypes = {
    Data: PropTypes.object,
}



const OurBread = () => {
    const { Title, BackgroundImage, CardData } = useContext(OurBreadSection2Data)
    return (
        <div className="h-[auto] w-full relative   overflow-hidden ">
            <img src={BackgroundImage} alt="" className='h-full w-full' />
            <div className='absolute h-full w-full bg-transparent top-0 left-0'>
                <motion.div
                    whileInView={{ scale: 1 }}
                    transition={{ ease: "easeIn", duration: 1 }}
                    initial={{ scale: 0 }}
                >
                    <h1 className='text-white font-bold text-[50px] text-center mt-10 mb-7'  >{Title}</h1>
                </motion.div>
                <div className='flex justify-center items-center h-auto w-full'>
                    <motion.div className='grid grid-cols-3 gap-4 w-[1100px] h-[auto] pb-8 '
                        whileInView={{ y: -5 }}
                        transition={{ ease: 'easeIn',duration:0.6 }}
                        initial={{y:290}}
                    >
                        {
                            CardData.map((data, index) => {
                                return (
                                    <OurBreadCard Data={data} key={index} />
                                )
                            })
                        }
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default OurBread
