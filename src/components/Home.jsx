import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Typed from 'react-typed';


const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#051233]'>

            {/*Container*/}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, my name is</p>
                {/* <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Victoria Ablogeev</h1> */}
                <Typed
          className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'
            strings={['Victoria Ablogeev']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>Seeking a position as a full stack developer.</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    <Link to="work" smooth={true} duration={500}>View Work</Link>
                        <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-2' /></span>
                    </button>
                </div>
                  
            </div>
        </div>
    )
}

export default Home
