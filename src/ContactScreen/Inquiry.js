import React from "react";
import { useState, useEffect } from "react";

function Inquiry(props) {
  const [inquiry, setInquiry] = useState("");
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [checkBox, setCheckBox] = useState(true);

  const handleCheckBox = (event) => {
    if (checkBox) setCheckBox(false);
    if (!checkBox) setCheckBox(true);
  };

  const handleSubmit = (event) => {
    //here we used e.prevent default because the default that it reloads the page and we dont wwant that
    event.preventDefault();
    props.handleAlertBool();
    // if (fullName === "" || inquiry === "") alert(`oijoijiujuijiuhn`);
    // else alert(`Email: ${email} & fullName: ${fullName}`);
  };

  // useEffect(() => {
  //   console.log(alertBool);
  // }, [alertBool]);

  return (
    <section class=" text-gray-800 text-center">
      <div class="container">
        <div class="grid flex items-center">
          <div class="py-5 lg:py-10 px-0 lg:px-5">
            <div class="mp-style block rounded-lg shadow-lg px-6 py-12 md:px-12">
              <h2 class="text-3xl font-bold mb-12">Contact us</h2>
              <form onSubmit={handleSubmit}>
                <div class="form-group mb-6">
                  <input
                    type="text"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput7"
                    placeholder="Full Name"
                    onChange={(event) => setfullName(event.currentTarget.value)}
                  />
                </div>
                <div class="form-group mb-6">
                  <input
                    type="email"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput8"
                    placeholder="Email address"
                    onChange={(event) => setEmail(event.currentTarget.value)}
                  />
                </div>
                <div class="form-group mb-6">
                  <textarea
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlTextarea13"
                    rows="3"
                    placeholder="Message"
                    onChange={(event) => setInquiry(event.currentTarget.value)}
                  ></textarea>
                </div>
                <div class="form-group form-check text-center mb-6">
                  <input
                    type="checkbox"
                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                    id="exampleCheck87"
                    checked={checkBox}
                    onClick={handleCheckBox}
                  />
                  <label
                    class="form-check-label inline-block text-gray-800"
                    for="exampleCheck87"
                  >
                    Send me a copy of this message
                  </label>
                </div>
                <button
                  type="submit"
                  // onClick={props.onClose}
                  class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inquiry;
