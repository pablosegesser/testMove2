import "antd/dist/antd.min.css";
import React from "react";
import {Carousel} from "antd";
import {Card} from "../Card/card";

const contentStyle = {
  height: "auto",
  background: "black",
};

const Carrousel = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        <Card
          title={"Ashley Benson talks skincare"}
          name={""}
          description={"10 products she uses in her daily routine and why."}
          imgUrl={
            "https://superstarsbio.com/wp-content/uploads/2019/09/Ashley-Benson-cathy.jpg"
          }
          className={"bigger absolute white light mobile centerContain bottom"}
          withButton={true}
          buttonText={"JOIN"}
        />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <Card
          title={"Ashley Benson talks skincare"}
          name={""}
          description={"10 products she uses in her daily routine and why."}
          imgUrl={
            "https://superstarsbio.com/wp-content/uploads/2019/09/Ashley-Benson-cathy.jpg"
          }
          className={"bigger absolute white light mobile centerContain bottom"}
          withButton={true}
          buttonText={"JOIN"}
        />
      </h3>{" "}
    </div>
    <div>
      <h3 style={contentStyle}>
        <Card
          title={"Ashley Benson talks skincare"}
          name={""}
          description={"10 products she uses in her daily routine and why."}
          imgUrl={
            "https://superstarsbio.com/wp-content/uploads/2019/09/Ashley-Benson-cathy.jpg"
          }
          className={"bigger absolute white light mobile  centerContain bottom"}
          withButton={true}
          buttonText={"JOIN"}
        />
      </h3>{" "}
    </div>
    <div>
      <h3 style={contentStyle}>
        <Card
          title={"Ashley Benson talks skincare"}
          name={""}
          description={"10 products she uses in her daily routine and why."}
          imgUrl={
            "https://superstarsbio.com/wp-content/uploads/2019/09/Ashley-Benson-cathy.jpg"
          }
          className={"bigger absolute white light mobile centerContain bottom"}
          withButton={true}
          buttonText={"JOIN"}
        />
      </h3>{" "}
    </div>
  </Carousel>
);
export default Carrousel;
