import React from 'react'
import "./styles.css";
import alice from '../assets/alice.svg'

const About = () => {
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);


    return (
        <div name='about' className='w-full h-screen bg-[#051233] text-gray-300' >
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='reveal'>
                    <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                        <div className='sm:text-right pb-8 pl-4'>
                            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                        </div>
                        <div></div>
                    </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-4xl font-bold'>
                            <p>I'm Victoria, Nice to meet you.
                                Please take a look around. </p>
                        </div>
                        <div>
                            <p>
                                I'm a recent computer science graduate with a passion for developing web applications.
                                Seeking a position as a fullstack devleoper to grow my skillset while contributing to the growth of my team.
                                I enjoy learning and improving my technical knowledge all the time.
                            </p>
                        </div>
                    </div>
                    

                </div>
                
            </div>

        </div>
    )
}

export default About


    // <div>
    // <img style={{ height: '35vh', width: '50vh' }} src={alice} alt='alice' />
                 
    //          </div >
    // <div>
    //     <p className='text-pink-300'>
    //         <br />
    //         <br />
    //         Currently, I volunteer in a leadership program called Alicecode.<br />
    //         As a Web Instructor, I teach teenage girls HTML,CSS and Javascript.
    //     </p>
    // </div>