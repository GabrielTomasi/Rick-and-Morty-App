import React from "react";
import image from "../../images/About_img.png";
import style from "../About/About.module.css";
const About = () => {
  return (
    <div className={style.conteiner}>
      <div >
        <img className={style.image} src={image} alt="devimage"></img>
      </div>
      <div className={style.divText}>
        <h2>About</h2>
             

        <p className={style.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          numquam itaque tempore, hic voluptatem maxime voluptatum, fuga placeat
          deserunt tenetur quaerat, dignissimos temporibus aperiam eveniet vel
          quam. Repellendus, debitis minus.
        </p>
      </div>
    </div>
  );
};

export default About;
