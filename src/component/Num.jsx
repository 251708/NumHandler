/*
import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';


const Num = () => {
  const [num , setNum] = useState("");
  const [text, setText] = useState("");

  const HandleChange = (event) => {
    const value = event.target.value;
  

  
  if(!/^-?\d*$/.test(value)){
    return;
  }
  setNum(value);

  if(value === ""){
    setText("");
    return;
  }

  const number = parseInt(value, 10);
   if(number<0){
    setText("Enter a positive number");
  }else if(number % 2 === 0){
    setText(`
      Next possible 3 even numbers are: ${number+2}  , ${number+4} , ${number+6}`);
  }else{
    setText(`
      Next 3 odd numbers are: ${number+2} , ${number+4} , ${number+6}`);
  }
}
    return (
        <section>
         <div className="container h-full px-6 mt-2">
         <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
         <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
         <div className="outer-card-box bg-gray-50 rounded-lg border-4 shadow-2xl p-6   dark:bg-gray-700  ">
         <div className="inner-card-box bg-gray-10 rounded-lg border-gray-500 border-4 p-4">
         <div className="card-image mb-4 flex justify-center">
        <Player
          src="https://lottie.host/bcedae99-1765-4784-88e9-e5e8a38be0df/NZfqiTKmOY.json"
          style={{ width: '300px', height: '300px' }}
          loop
          autoplay
        />
      </div>

      <div className="inner-card-box-content bg-white text-black shadow-lg rounded-lg p-4">
        <h1 className="text-xl font-bold mb-2">Number Handler</h1>
        <p className="text-sm">
        "Check Numbers: Get Next Even/Odd Values or Prompt for Positivity!"
        </p>
      </div>
        </div>
        </div> 
         </div>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-gray-50 rounded-lg border-gray-50 border-4 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-700 dark:border-gray-200 shadow-2xl">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "25px", color: "white" }}>Number Checker</h1>
      <input
        type="text"
        value={num}
        onChange={HandleChange}
        placeholder="Enter a number"
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "200px",
          marginBottom: "10px",
        }}
      />
      <p style={{ fontSize: "16px", color: "white" }} >{text}</p>
    </div>
               
        </div>
        </div>
        </div>
        </div>
        </div>
         
         
       </section>
    )
};
export default Num;

*/



import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Num = () => {
  const [num, setNum] = useState("");
  const [text, setText] = useState("");

  const HandleChange = (event) => {
    const value = event.target.value;

    if (!/^-?\d*$/.test(value)) {
      return;
    }
    setNum(value);

    if (value === "") {
      setText("");
      return;
    }

    const number = parseInt(value, 10);
    if (number < 0) {
      setText("Enter a positive number");
    } else if (number % 2 === 0) {
      setText(`
        Next possible 3 even numbers are: ${number + 2}, ${number + 4}, ${
        number + 6
      }`);
    } else {
      setText(`
        Next 3 odd numbers are: ${number + 2}, ${number + 4}, ${number + 6}`);
    }
  };

  return (
    <section>
      <div className="container h-full px-6 mt-2">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <div className="outer-card-box bg-gray-100 dark:bg-gray-800 rounded-lg border-4 shadow-2xl p-6">
              <div className="inner-card-box bg-gray-200 dark:bg-gray-700 rounded-lg border-gray-500 border-4 p-4">
                <div className="card-image mb-4 flex justify-center">
                  <Player
                    src="https://lottie.host/bcedae99-1765-4784-88e9-e5e8a38be0df/NZfqiTKmOY.json"
                    style={{ width: "300px", height: "300px" }}
                    loop
                    autoplay
                  />
                </div>

                <div className="inner-card-box-content bg-white dark:bg-gray-600 text-black dark:text-white shadow-lg rounded-lg p-4">
                  <h1 className="text-xl font-bold mb-2">Number Handler</h1>
                  <p className="text-sm">
                    "Check Numbers: Get Next Even/Odd Values or Prompt for
                    Positivity!"
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-lg border-gray-50 border-4 dark:border-gray-200 shadow-2xl">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
                  <h1 style={{ fontSize: "25px", color: "white" }}>
                    Number Checker
                  </h1>
                  <input
                    type="text"
                    value={num}
                    onChange={HandleChange}
                    placeholder="Enter a number"
                    style={{
                      padding: "10px",
                      fontSize: "16px",
                      width: "200px",
                      marginBottom: "10px",
                    }}
                  />
                  <p style={{ fontSize: "16px", color: "white" }}>{text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Num;
