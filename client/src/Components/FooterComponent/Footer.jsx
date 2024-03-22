import React from "react";
import "./Footer.scss";
import mpesa from "../../assets/images/mpesa.png";
import paypal from "../../assets/images/paypal.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Footer = ({ width, height, color }) => {
  return (
  <div className="footer">
      <div className="icons">
        <div className="icon1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill={color ?? " currentColor"}
            class="bi bi-truck"
            viewBox="0 0 16 16"
          >
            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
          </svg>
          <div className="detail">
            <h1>Free Delivery</h1>
            <p>We deliver for FREE around Nyeri.</p>
          </div>
        </div>
        <div className="icon1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill={color ?? "currentColor"}
            class="bi bi-telephone-inbound"
            viewBox="0 0 16 16"
          >
            <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0m-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
          </svg>
          <div className="detail">
            <h1>Support</h1>
            <p>We are reachable by Email, SMS,WhatsApp and Calls</p>
          </div>
        </div>
        <div className="icon1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill={color ?? "currentColor"}
            class="bi bi-credit-card-2-back"
            viewBox="0 0 16 16"
          >
            <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z" />
            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1" />
          </svg>
          <div className="detail">
            <h1>Payment</h1>
            <p>We have secure payment options for you.</p>
          </div>
        </div>
        <div className="icon1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill={"color"}
            class="bi bi-wallet"
            viewBox="0 0 16 16"
          >
            <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a2 2 0 0 1-1-.268M1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1" />
          </svg>
          <div className="detail">
            <h1>Orders</h1>
            <p>Amazing Discounts available.</p>
          </div>
        </div>
      </div>
      <div className="pay-details">
        <div className="pay">
          <h1>We accept:</h1>
          <img src={mpesa} alt="mpesa" />
          <img src={paypal} alt="paypal" />
        </div>
        <div className="support">
          <h2>Reach us on:</h2>
          <div className="support-details">
            <p>0746797399</p>
            <div className="socials">
              <a
                href="https://www.linkedin.com"
                className="likedin social"
                target="__blank"
              >
                {" "}
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://www.facebook.com"
                className="facebook social"
                target="__blank"
              >
                {" "}
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2x"
                  color="rgb(2, 135, 224)"
                />
              </a>
              <a
                href="https://twitter.com "
                className="twitter social"
                target="__blank"
              >
                {" "}
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="2x"
                  color="rgb(0, 255, 255)"
                />
              </a>
              <a
                href="https://www.instagram.com"
                className="instagram social"
                target="__blank"
              >
                {" "}
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  color="rgb(237, 97, 121)"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="end">
        <p>Copyright@2023 JABARI FURNITURES.ALL RIGHTS RESERVED</p>
      </div>
      </div>
  );
};

export default Footer;
