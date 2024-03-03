import React from "react";
import { AboutWrap } from "./about.styles";
import AboutImg from "../../assets/about-img.png";
import Card from '../Card';
import Contact from '../Contact';
import Tabs from '../Tabs';
const tabs =[
  {label:"Title 1", component: <Card/>},
  {label: "Title 2", component: <Contact/>},

]
const About = () => {
  return (
    <>
      <AboutWrap>
        <div className="container">
          <div className="main">
          <div className="contentWrap">
            <h2>
              About <span>Us</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              enim architecto a sit consectetur, at commodi dolorum maiores
              doloremque reprehenderit odit numquam nam sunt nobis ratione, odio
              quia! Nihil tenetur, aliquam libero laboriosam suscipit alias
              inventore, quibusdam dicta itaque vel, voluptates ut! Vel unde
              adipisci possimus numquam. In magni, perspiciatis unde iusto
              soluta dignissimos ipsa, totam laborum accusantium optio, animi
              maxime temporibus doloribus vitae placeat deserunt autem corrupti
              impedit vero qui? Officia voluptate, assumenda aspernatur
              perspiciatis labore at obcaecati consequatur?
            </p>
            </div>
            <div className="about-img">
            <img src={AboutImg} alt="AboutImage" className="about-img" />
            </div>
          </div>
          </div>
        
      </AboutWrap>
      <Tabs tabs={tabs} />
    </>
  ); 
};

export default About;
