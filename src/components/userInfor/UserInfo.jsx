import React from "react";
import Img from "../core/img/Img";
import avt from "../../assets/imgs/avt.png";
import Heading from "../core/heading/Heading";
import Text from "../core/text/Text";
import "./UserInfo.scss";

const UserInfo = () => {
  return (
    <div className="user-info">
      <div>
        <Img img={avt} />
      </div>

      <div>
        <Heading className="sub-title gray-color">By Jennifer Lawrence</Heading>

        <Text>Thinker & Designer</Text>
      </div>
    </div>
  );
};

export default UserInfo;
