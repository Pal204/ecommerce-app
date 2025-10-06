import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
    return (
        <div>
            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={'About'} text2={'US'} />
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img src={assets.about_img} alt="" className='w-full max-w-[450px]' />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, consequuntur? Officiis, sed quod repudiandae deleniti corrupti necessitatibus, ut ipsam quas quasi est obcaecati quos eveniet cum repellendus, quibusdam et minima.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quos est pariatur unde aperiam suscipit, recusandae, quasi nam commodi illum maxime animi vel quae, labore repellendus vero. Corrupti at natus perferendis sunt esse, sapiente ipsum.</p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>Our mission" in the context of "our mission dummy text" refers to a placeholder mission statement used in design and development, rather than a literal mission statement. The term "dummy text" or "filler text" refers to "Lorem Ipsum," a jumbled Latin-based text used by designers to fill space and demonstrate a design without distracting with meaningful content. </p>
                </div>
            </div>

            <div className='text-xl py-4'>
                <Title text1={'WHY'} text2={'CHOOSE US'} />
            </div>
            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Quality Assurance:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sequi consequuntur asperiores nemo, voluptatibus sed quos praesentium similique facilis doloremque.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Convenience:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sequi consequuntur asperiores nemo, voluptatibus sed quos praesentium similique facilis doloremque.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Exceptional Customer Service:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sequi consequuntur asperiores nemo, voluptatibus sed quos praesentium similique facilis doloremque.</p>
                </div>
            </div>

            <NewsLetterBox />
        </div>
    )
}

export default About