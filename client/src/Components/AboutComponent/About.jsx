import React from "react";
import background from "../../assets/images/background.jpg";
import "./About.scss";

const About = () => {
  return (
    <div className="major">
      <div className="about">
        <img src={background} alt="background" />
        <p className="about-us">About Us</p>
      </div>

      <div className="info">
        <h3>Welcome to Jabari Furniture Store</h3>
        <p>
          Jabari Furniture Store offers you a unique shopping experience in
          welcoming showrooms, featuring a wide range of products under one roof
          and offers a distinctive customer service that is second to none.
          Furniture is the vital ingredient that makes your house your home, a
          real expression of your style and individuality.Our motivation is not
          to ‘close the sale’ but to give you the best, impartial advice so you
          can make an informed and considered choice – after all choosing
          yourself is fun.Contemporary furniture doesn’t have to be sterile. We
          take pride in sourcing unique modern furniture solutions that
          complement a variety of different brand aesthetics while still being
          functional.We are a one-stop-shop for all your home decor needs,
          offering a wide selection of high-quality products at affordable
          prices. Our passion for beautiful and functional furniture has driven
          us to curate a range of products that will elevate the look and feel
          of your space, no matter your style or budget
        </p>
      </div>
    </div>
  );
};

export default About;
