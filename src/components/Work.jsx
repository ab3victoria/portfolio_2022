import React from 'react';
import "./styles.css";
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#051233]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='reveal'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
            <div
            style={{ backgroundImage: `url(https://i.postimg.cc/L8mLGJrK/githubuserimg.png)` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Github Users Application
              </span>
              <div className='pt-8 text-center'>
                <a target="_blank" href='https://github-user-app-acf1b.web.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Website
                  </button>
                </a>
                <a href='https://github.com/ab3victoria/github_users_app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(https://i.postimg.cc/k5b7FZv7/shop.png)` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Online Shopping App
              </span>
              <div className='pt-8 text-center'>
                <a target="_blank" href='https://vikashop2202.herokuapp.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Website
                  </button>
                </a>
                <a href='https://github.com/ab3victoria/electronics_shop'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


          <div
            style={{ backgroundImage: `url(https://i.postimg.cc/SsMzQs1r/hangmanimg.png)` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Hangman Application
              </span>
              <div className='pt-8 text-center'>
                <a target="_blank" href='https://hangman-react-app-ec3c0.web.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Website
                  </button>
                </a>
                <a href='https://github.com/ab3victoria/hangman_react_app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
           
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(https://i.postimg.cc/kGXSPZmJ/triviaimg.png)` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Quiz Application
              </span>
              <div className='pt-8 text-center'>
                <a target="_blank" href='https://trivia-react-app.firebaseapp.com'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Website
                  </button>
                </a>
                <a href='https://github.com/ab3victoria/quiz_app_react'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(https://i.postimg.cc/0yYpk1YR/todolistimg.png)` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Todo List Application
              </span>
              <div className='pt-8 text-center'>
                <a target="_blank" href='https://todo-react-app-806da.web.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Website
                  </button>
                </a>
                <a href='https://github.com/ab3victoria/todo_list_app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
          
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(https://i.postimg.cc/pXNxDwF6/groceryimg.png)` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Grocery List Application
              </span>
              <div className='pt-8 text-center'>
                <a target="_blank" href='https://grocery-react-app.web.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Website
                  </button>
                </a>
                <a href='https://github.com/ab3victoria/grocery_list_app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    </div>
  );
};

export default Work;