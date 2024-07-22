import { useContext } from 'react'
import { OurBreadSection2Data } from '../CustomHooks/UseContext'
import PropTypes from 'prop-types'






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
                <h1 className='text-white font-bold text-[50px] text-center mt-10 mb-7'  >{Title}</h1>
                <div className='flex justify-center items-center h-auto w-full'>
                    <div className='grid grid-cols-3 gap-4 w-[1100px] h-[auto] pb-8 '>
                        {
                            CardData.map((data,index) => {
                                return (
                                    <OurBreadCard Data={data} key={index} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurBread
