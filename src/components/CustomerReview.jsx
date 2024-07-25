import { useContext } from 'react'
import { ReviewSectionData } from '../CustomHooks/UseContext'
import PropTypes from 'prop-types'
import { Quotes } from '@phosphor-icons/react'
import {motion} from 'framer-motion'




const CustomerReviewCard = ({ Data }) => {
    const {Comment,Name} = Data
    return (
        <motion.div className='h-[340px] w-[265px] bg-review-card relative p-8 rounded-[9px]'
            whileInView={{ scale: 1 }}
            transition={{ ease: 'easeIn', duration: 1 }}
            initial={{ scale: 0}}
        >
            <div className='h-[80px] w-[80px] bg-white text-review-card inline-flex justify-center items-center rounded-[50%] absolute top-[-30px] left-8 '>
                <Quotes size={52} weight='fill' />
            </div>
            <div className='mt-[3rem]'>
                <p className='text-[17px]'>{Comment}</p>
                <h2 className='font-bold text-[20px] mt-4'>{ Name}</h2>
            </div>
        </motion.div>
    )
}

CustomerReviewCard.propTypes = {
    Data: PropTypes.object
}






const CustomerReview = () => {
    const { Title, BackgroundImage, CardData } = useContext(ReviewSectionData)
    let MobileAnimeValue = null
    let LargeScreenAnime = null
    let MobileAnime 
    console.log(window.innerWidth)
    if (window.innerWidth > 358 && window.innerWidth < 450) {
        MobileAnimeValue = { x: -300 }
        MobileAnime = true
    }
    else if (window.innerWidth > 450 && window.innerWidth < 2000) {
        LargeScreenAnime = { x: -1000 }
        MobileAnime = false
    }
    return (
        <div className='h-[600px] w-full relative phone:h-[1750px]'>
            <img src={BackgroundImage} alt="background image" className='h-full w-full' />
            <div className='absolute top-0 left-0 h-full w-full bg-dark-cover-light text-white'>
                <motion.h1 className='text-[55px] font-bold text-center mt-[70px] mb-[80px] phone:mb-[65px] phone:mt-[10px] phone:w-[90%] phone:text-[40px]'
                    whileInView={{ x: 1 }}
                    transition={{ ease: 'easeIn', duration: 1 }}
                    initial={MobileAnime ? MobileAnimeValue : LargeScreenAnime}
                >{Title}</motion.h1>
                <div className='flex justify-center items-center'>
                    <div className='grid grid-cols-4 gap-5 phone:grid-cols-1 phone:gap-12'>
                        {
                            CardData.map((data, index) => {
                                return (
                                    <CustomerReviewCard Data={data} key={index} />
                               )
                           })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerReview
