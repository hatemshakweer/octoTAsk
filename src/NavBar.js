import "./App.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import useWindowDimensions from "./ScreenSizeHandling/WindoSize";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const { height, width } = useWindowDimensions();
  const [menuBool, setMenuBool] = useState(false);

  const toggleMenuList = () => {
    console.log("hamada");
    if (menuBool) setMenuBool(false);
    if (!menuBool) setMenuBool(true);
  };

  // useEffect(() => {
  //   console.log("bool changed: ", menuBool);
  // }, [menuBool]);

  return (
    <div>
      <div class="flex justify-center bg-gray-100">
        {/* {width > 768 ? ( */}
        <div class="hidden md:block rounded-full pr-4">
          <Breadcrumb
            spacing="20px"
            separator={<ArrowRightIcon></ArrowRightIcon>}
            class="py-4 pl-4 text-lg font-bold "
          >
            <BreadcrumbItem class=" hover:scale-125  hover:rounded-full active:bg-violet-700">
              <BreadcrumbLink as={Link} to="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem class=" hover:scale-125  hover:rounded-full active:bg-violet-700">
              <BreadcrumbLink as={Link} to="/about">
                About
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem class=" hover:scale-125  hover:rounded-full active:bg-violet-700">
              {/*Here you can pass a 'isCurrentPage' prop i dont know what it does it has no effect that i can see*/}
              <BreadcrumbLink as={Link} to="/Contact">
                Contact
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem class="hover:scale-125  hover:rounded-full active:bg-violet-700">
              {/*Here you can pass a 'isCurrentPage' prop i dont know what it does it has no effect that i can see*/}
              <BreadcrumbLink as={Link} to="/Cart" state={{ data: false }}>
                Cart
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        {/* ) : ( */}
        <div class="block md:hidden flex-col">
          <div class="flex justify-center pt-4" onClick={toggleMenuList}>
            <ArrowRightIcon></ArrowRightIcon>
          </div>
          {menuBool && (
            <div class="rounded-full pr-4">
              <Breadcrumb
                spacing="20px"
                separator={<ArrowRightIcon></ArrowRightIcon>}
                class="py-4 pl-4 text-lg font-bold flex-col"
              >
                <ul>
                  <li>
                    <BreadcrumbItem class=" hover:scale-125  hover:rounded-full active:bg-violet-700">
                      <BreadcrumbLink as={Link} to="/">
                        Home
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </li>

                  <li>
                    <BreadcrumbItem class=" hover:scale-125  hover:rounded-full active:bg-violet-700">
                      <BreadcrumbLink as={Link} to="/about">
                        About
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </li>

                  <li>
                    <BreadcrumbItem class=" hover:scale-125  hover:rounded-full active:bg-violet-700">
                      {/*Here you can pass a 'isCurrentPage' prop i dont know what it does it has no effect that i can see*/}
                      <BreadcrumbLink as={Link} to="/Contact">
                        Contact
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </li>

                  <li>
                    <BreadcrumbItem class="hover:scale-125  hover:rounded-full active:bg-violet-700">
                      {/*Here you can pass a 'isCurrentPage' prop i dont know what it does it has no effect that i can see*/}
                      <BreadcrumbLink
                        as={Link}
                        to="/Cart"
                        state={{ data: false }}
                      >
                        Cart
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </li>
                </ul>
              </Breadcrumb>
            </div>
          )}
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default NavBar;
