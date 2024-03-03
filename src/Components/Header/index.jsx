import React from "react";
import { HeaderWrap } from "./header.styles";
import { TiTabsOutline } from "react-icons/ti";
// import Button from "../Button";
import Card from "../Card";
import About from "../About";
import Contact from "../Contact";
import Tabs from "../Tabs";
import Blog from "../Blog";

const tabs = [
  { label: "Home", component: <Card /> },
  { label: "About", component: <About /> },
  { label: "Blog", component: <Blog /> },
  { label: "Contact", component: <Contact /> },
 
];
const Header = () => {
  return (
    <>
      <HeaderWrap>
        <div className="container">
          <div className="heading-content">
            <div className="text-wrap">
              <TiTabsOutline className="icon" />
              <strong>
                Web<span>site</span>
              </strong>
            </div>
            <div className="tabs">
              <Tabs tabs={tabs} />
            </div>
          </div>
        </div>
      </HeaderWrap>
    </>
  );
};

export default Header;
