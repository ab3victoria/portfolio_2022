import "./styles.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_83w5ykx', 
    'template_f8z9cln', 
    form.current, 
    'QO0APk6bSVihBe01R'
    )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#051233] flex justify-center items-center p-4'>
      <div className='reveal'>
    <form className='flex flex-col max-w-[600px] w-full' 
    ref={form} 
    >

      <div className='pb-8'>
               <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
               <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - ab3victoria@gmail.com</p>
         </div>
      <input placeholder='Name' className='bg-[#ccd6f6] p-2' type="text" name="user_name" />
      <input placeholder='Email' className='my-4 p-2 bg-[#ccd6f6]' type="email" name="user_email" />
      <textarea placeholder='Message' className='bg-[#ccd6f6] p-2' name="message" />
      <button onClick={sendEmail} className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      
    </form>
    </div>
    </div>
  );
 
}

export default Contact


/***************************** */
// return (
//   <div name='contact' className='w-full h-screen bg-[#051233] flex justify-center items-center p-4'>
//       <form method='POST' action="https://vikvik2020.getform.com/1mpw8" className='flex flex-col max-w-[600px] w-full'>
//           <div className='pb-8'>
//               <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
//               <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - ab3victoria@gmail.com</p>
//           </div>
//           <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
//           <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
//           <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
//           <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
//       </form>
//   </div>
// )