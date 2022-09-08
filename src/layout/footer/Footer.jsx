import React from "react";
import "./Footer.scss";
import Heading from "../../components/core/heading/Heading";
import Text from "../../components/core/text/Text";
import Social from "../../components/core/social/Social";

Footer.propTypes = {};

function Footer(props) {
  return (
    <div className="footer ">
      <div className="footer-top">
        <div className="container footer-top-wrap">
          <div className="footer-contact">
            <div className="footer-heading">
              <Heading className="white-color sub-title">
                Contact the Publisher
              </Heading>
            </div>

            <div className="footer-text">
              <Text className="gray-text-color">mike@runo.com</Text>
            </div>
            <div className="footer-text">
              <Text className="gray-text-color">+944 450 904 505</Text>
            </div>
          </div>

          <div className="footer-exp">
            <div className="footer-heading">
              <Heading className="white-color sub-title">Explorate</Heading>
            </div>
            <div className="footer-text">
              <Text className="gray-text-color">About</Text>
            </div>
            <div className="footer-text">
              <Text className="gray-text-color">Partners</Text>
            </div>{" "}
            <div className="footer-text">
              <Text className="gray-text-color">Job Opportunities</Text>
            </div>{" "}
            <div className="footer-text">
              <Text className="gray-text-color">Advertise</Text>
            </div>{" "}
            <div className="footer-text">
              <Text className="gray-text-color">Membership</Text>
            </div>
          </div>

          <div className="footer-headquater">
            <div className="footer-heading">
              <Heading className="white-color sub-title">Headquarter</Heading>
            </div>
            <div className="footer-text ">
              <Text className="gray-text-color">
                191 Middleville Road, NY 1001, Sydney Australia
              </Text>
            </div>
          </div>

          <div className="footer-connec">
            <div className="footer-heading">
              <Heading className="white-color sub-title">Connections</Heading>
            </div>
            <Social />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-wrap ">
          <p>2021 | RUNO Publisher Studio</p>
          <p>Subscribe Now</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
