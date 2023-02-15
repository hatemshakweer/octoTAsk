import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider, Icon, Hamburger } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./HomeScreen/Home";
import About from "./AboutUsScreen/About";
import Contact from "./ContactScreen/Contact";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import Details from "./ProductDetailsScreen/Details";
import Cart from "./CartScreen/Cart";
import useWindowDimensions from "./ScreenSizeHandling/WindoSize";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";

function App() {
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
    <ChakraProvider>
      {/* <Router> */}
      <div>
        <NavBar></NavBar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="details" element={<Details />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
      {/* </Router> */}
    </ChakraProvider>
  );
}

export default App;
