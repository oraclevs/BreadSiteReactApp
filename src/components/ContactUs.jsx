import { useContext } from 'react'
import { ContactUsData } from '../CustomHooks/UseContext'
import { PaperPlaneRight } from '@phosphor-icons/react'






const ContactUs = () => {
    const { Title,BackgroundImage, } = useContext(ContactUsData)
    return (
        <div className='h-[800px] w-full relative'>
            <img src={BackgroundImage} alt="background image" className='h-full w-full' />
            <div className='absolute h-full w-full top-0 left-0 bg-dark-cover-200 flex justify-center items-center'>
                <div className='h-[700px] w-[600px] phone:w-[90%] bg-main-bg pb-2 pt-2  rounded-[10px] '>
                    <h1 className='text-[40px] font-bold text-center'>{Title}</h1>
                    <form className='flex flex-col justify-center items-center'>
                        <div className='flex flex-col justify-center mt-4 mb-3 '>
                            <label htmlFor="text" className='text-[20px] font-[600]'>Full Name</label>
                            <input type="text" placeholder='Enter Your Name'
                                className=' h-[50px] w-[500px] phone:w-[300px] ps-[2rem] outline-none focus:border-[2px] border-black rounded-[9px]'
                                required />
                        </div>
                        <div className='flex flex-col justify-center mt-4 mb-3 '>
                            <label htmlFor="Email" className='text-[20px] font-[600]'>Email</label>
                            <input type="email" className=' h-[50px] w-[500px] phone:w-[300px] ps-[2rem] outline-none focus:border-[2px] border-black rounded-[9px]' placeholder='Enter your email address' required />
                        </div>
                        <div className='flex flex-col justify-center '>
                            <label htmlFor="textarea" className='text-[20px] font-[600]'>Comment</label>
                            <textarea name="" id="" className=' h-[260px] w-[500px] phone:w-[300px] ps-[2rem] pt-4 outline-none focus:border-[2px] border-black rounded-[9px]' placeholder='Enter your reason for contacting us' required />
                        </div>
                        <div>
                            <button
                                className='bg-black text-white text-[20px] font-[600] w-[270px] h-[50px] mt-8 inline-flex flex-row justify-center items-center rounded-[20px]'>
                                SEND {<PaperPlaneRight size={25} weight='fill' />}
                            </button>
                         </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
