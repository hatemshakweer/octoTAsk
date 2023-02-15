import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import Inquiry from "./Inquiry";

function LocationCard(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [alertBool, setAlertBool] = useState(false);

  const handleAlertBool = () => {
    setAlertBool(true);
  };

  const handleAlertBoolReset = () => {
    setAlertBool(false);
  };

  // const handleChangeLocationb = () => {
  //   // setAlertBool(false);
  //   props.handleChangeLocation("hghghgh");
  // };

  useEffect(() => {
    setAlertBool(false);
  }, []);

  useEffect(() => {
    console.log(alertBool);
  }, [alertBool]);
  return (
    <div class="grow-0 shrink-0 basis-auto w-full lg:w-8/12">
      {/* xl:w-8/12 */}
      <div class="flex flex-wrap pt-0 lg:mt-8 lg:pt-0">
        {props.location.map((item, index) => (
          <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-full lg:w-full  mx-3 md:px-6 ">
            {/* xl:w-6/12  xl:px-12 */}
            <div
              class="flex items-start md:pl-24 lg:pl-0 hover:bg-emerald-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:outline-double active:ring-4 active:ring-red-500 active:bg-blue-800 active:shadow-lg transition duration-700 ease-in-out"
              onClick={props.handleChangeLocation}
              data-value-1={item.id}
            >
              <div class="shrink-0 ">
                <div class="shadow-md w-14 h-14 flex items-center justify-center ">
                  <TriangleDownIcon class="w-14 h-14 text-blue-600 "></TriangleDownIcon>
                </div>
              </div>
              <div class="grow ml-6">
                <p class="font-bold mb-1">{item.name}</p>
                <p class="text-gray-500">
                  {item.address.substring(0, item.address.indexOf(","))}
                </p>
                <p class="text-gray-500">{item.phone}</p>
              </div>
            </div>
          </div>
        ))}

        <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-full lg:w-full  mx-3 md:px-6">
          <div class="flex align-start md:pl-24 lg:pl-0">
            <div class="grow px-6 sm:pr-24 md:pr-24 lg:pr-0 lg:mt-6 w-14 h-14 flex items-center justify-center">
              <button
                // type="submit"
                onClick={onOpen}
                class="w-full h-1/2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Send Inquiry
              </button>

              <Modal
                // class="p-10"
                onClose={onClose}
                // finalFocusRef={React.useRef(null)}
                isOpen={isOpen}
                size="xl"
                scrollBehavior="outside"
              >
                {/* <div class="w-1/2"> */}
                <ModalOverlay />
                <ModalContent>
                  <ModalCloseButton onClick={handleAlertBoolReset} />
                  <ModalBody>
                    {alertBool === false ? (
                      <Inquiry handleAlertBool={handleAlertBool}></Inquiry>
                    ) : (
                      <div class="p-12">
                        <Alert
                          status="success"
                          variant="subtle"
                          flexDirection="column"
                          alignItems="center"
                          justifyContent="center"
                          textAlign="center"
                          height="200px"
                        >
                          <AlertIcon boxSize="40px" mr={0} />
                          <AlertTitle mt={4} mb={1} fontSize="lg">
                            Inquiry Sent Successfully!
                          </AlertTitle>
                          <AlertDescription maxWidth="sm">
                            Please Wait for our reply within 3-5 bussiness days
                          </AlertDescription>
                        </Alert>
                      </div>
                    )}
                  </ModalBody>
                </ModalContent>
                {/* </div> */}
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationCard;
