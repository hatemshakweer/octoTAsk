import { interactivity } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

function Cart(props) {
  const location = useLocation();
  // const { temp } = state;

  const [cartData, setCartData] = useState("");
  const [initialCartData, setInitialCartData] = useState("");
  const [subTotal, setSubTotal] = useState(0);
  const [bool, setBool] = useState();

  useEffect(() => {
    if (location.state)
      if (location.state.data === false)
        //because it showed cannot access null when no data coming
        setBool(false);
      else setBool(true);
  }, []);

  useEffect(() => {
    if (bool) setInitialCartData([location.state]); //true means coming from details page false is coming from otherwise
  }, [bool]);

  useEffect(() => {
    let temp = [];
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems) {
      temp = [...cartItems, ...initialCartData];
      if (!bool) {
        localStorage.setItem("cartItems", JSON.stringify(temp)); //not needed
        let subtotal = 0;
        // console.log(temp);
        // if (temp[0] != null)
        for (let i = 0; i < temp.length; i++) {
          subtotal += parseFloat(temp[i].finalPrice);
        }
        setSubTotal(subtotal.toFixed(2));
        setCartData(temp);
      }
    } else {
      temp = [...initialCartData];
    }
    if (bool) {
      localStorage.setItem("cartItems", JSON.stringify(temp));
      let subtotal = 0;
      for (let i = 0; i < temp.length; i++) {
        subtotal += parseFloat(temp[i].finalPrice);
      }
      setSubTotal(subtotal.toFixed(2));
      setCartData(temp);
    }
  }, [initialCartData]);

  const navigate = useNavigate();
  const handleContinueShopping = () => {
    navigate("/");
  };

  return (
    <div class="h-full bg-gray-100">
      <div class="py-12">
        <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg  md:max-w-5xl">
          <div class="md:flex ">
            <div class="w-full p-4 px-5 py-5">
              <div class="md:grid md:grid-cols-3 gap-2 ">
                <div class="col-span-2 p-5">
                  <h1 class="text-xl font-medium ">Shopping Cart</h1>

                  {cartData !== "" ? (
                    cartData.map((item, key) => (
                      <div class="flex justify-between items-center mt-6 pt-6 border-t">
                        <div class="flex  items-center">
                          <img
                            src={item.thumbnail}
                            width="60"
                            class="rounded-full "
                          ></img>

                          <div class="flex flex-col ml-3">
                            <span class="md:text-md font-medium">
                              {item.brand + " " + item.title}
                            </span>
                            <span class="text-xs font-light text-gray-400">
                              {item.id}
                            </span>
                          </div>
                        </div>

                        <div class="flex justify-center items-center">
                          {/* <div class="pr-8 flex ">
                            <span class="font-semibold">-</span>
                            <input
                              type="text"
                              class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                              value="1"
                            ></input>
                            <span class="font-semibold">+</span>
                          </div> */}

                          <div class="pr-8 ">
                            <span class="text-xs font-medium">
                              {"$" + item.finalPrice}
                            </span>
                          </div>
                          <div>
                            <i class="fa fa-close text-xs font-medium"></i>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div>
                      <Alert
                        status="error"
                        variant="subtle"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        textAlign="center"
                        height="200px"
                      >
                        <AlertIcon boxSize="40px" mr={0} />
                        <AlertTitle mt={4} mb={1} fontSize="lg">
                          No Items Found!
                        </AlertTitle>
                        <AlertDescription maxWidth="sm">
                          There are still no objects in cart
                        </AlertDescription>
                      </Alert>
                    </div>
                  )}

                  <div class="flex justify-between items-center mt-6 pt-6 border-t">
                    <div class="flex items-center">
                      <i class="fa fa-arrow-left text-sm pr-2"></i>
                      <span
                        onClick={handleContinueShopping}
                        class="text-md hover:text-blue-900 hover:font-bold font-medium text-blue-500"
                      >
                        Continue Shopping
                      </span>
                    </div>

                    <div class="flex justify-center items-end">
                      <span class="text-sm font-medium text-gray-400 mr-1">
                        Subtotal:
                      </span>
                      <span class="text-lg font-bold text-gray-800 ">
                        {"$" + subTotal}
                      </span>
                    </div>
                  </div>
                </div>

                <div class=" p-5 bg-gray-800 rounded flex items-end  ">
                  <div class="flex-col">
                    <span class="text-xl font-medium text-gray-100 block pb-3">
                      Card Details
                    </span>

                    <span class="text-xs text-gray-400 ">Card Type</span>

                    <div class="flex justify-center flex-col pt-3">
                      <label class="text-xs text-gray-400 ">Name on Card</label>
                      <input
                        type="text"
                        class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                        placeholder="Giga Tamarashvili"
                      ></input>
                    </div>

                    <div class="flex justify-center flex-col pt-3">
                      <label class="text-xs text-gray-400 ">Card Number</label>
                      <input
                        type="text"
                        class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                        placeholder="****     ****      ****      ****"
                      ></input>
                    </div>
                    <div class="grid grid-cols-3 gap-2 pt-2 mb-3">
                      <div class="col-span-2 ">
                        <label class="text-xs text-gray-400">
                          Expiration Date
                        </label>
                        <div class="grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                            placeholder="mm"
                          ></input>
                          <input
                            type="text"
                            class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                            placeholder="yyyy"
                          ></input>
                        </div>
                      </div>

                      <div class="">
                        <label class="text-xs text-gray-400">CVV</label>
                        <input
                          type="text"
                          class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                          placeholder="XXX"
                        ></input>
                      </div>
                    </div>
                    <button class="h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600">
                      Check Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
