import React from "react";
import { BlogWrap } from "./Blog.styles";
import Slider from "react-slick";
import BlogImg from "../../assets/blog.jpg";
const blogData = [
  {
    id: 1,
    blogImg: BlogImg,
    title: "Title 1",
    desc: "Lorem ipsum dolor sit amet",
    // desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum aliquid cum reprehenderit laborum voluptates voluptatum harum modi. Iure modi fuga cum tempore cumque minus maxime laborum illo nihil quidem pariatur fugit ex, vero at, ipsum, sint totam odit delectus sapiente enim. Officiis facilis dolor mollitia? Vero id illum adipisci quo?",
  },
  {
    id: 2,
    blogImg: BlogImg,
    title: "Title 2",
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    blogImg: BlogImg,
    title: "Title 3",
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    id: 4,
    title: "Title 4",
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    id: 5,
    title: "Title 5",
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    id: 6,
    title: "Title 6",
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    id: 7,
    title: "Title 7",
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    id: 8,
    title: "Title 8",
    desc: "Lorem ipsum dolor sit amet",
  },
];
const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
  };
  return (
    <>
      <BlogWrap>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <div className="container">
          <Slider {...settings} className="slider">
            {blogData.map((val, ind) => (
              <div className="container">
                <div className="blog" key={ind}>
                  <img src={BlogImg} alt="BlogImage" className="bImg" />
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}

            {/* <div className="blog">
              <h3>2</h3>
            </div>
            <div className="blog">
              <h3>3</h3>
            </div>
            <div className="blog">
              <h3>4</h3>
            </div>
            <div className="blog">
              <h3>5</h3>
            </div>
            <div className="blog">
              <h3>6</h3>
            </div>
            <div className="blog">
              <h3>7</h3>
            </div>
            <div className="blog">
              <h3>8</h3>
            </div> */}
          </Slider>
        </div>
      </BlogWrap>
    </>
  );
};

export default Blog;
