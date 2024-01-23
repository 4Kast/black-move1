import React from "react";
import classes from "./Home.module.css";
import { NavLink } from "react-router-dom";
import imgHome from "../assets/imghome.jpg";
import showcase1 from "../assets/showcase1.webp";
import showcase2 from "../assets/showcase2.webp";
import showcase3 from "../assets/showcase3.webp";
import showcase4 from "../assets/showcase4.webp";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.container}>
        <div className={classes.txts}>
          <h1>
            Black Move <br /> 
            <p className={classes.h6}>Car Wash And Lifestyle</p>
          </h1>
          <p className={classes.descricao}>
            Where Flavour & Good Vibes Collide
          </p>

          <NavLink
            to="/cardapio"
            className={`btn-style ${classes.linkCardapio}`}
          >
            Menu
          </NavLink>
        </div>
        <div className={classes.img}>
  <div className={classes.scrollContainer}>
    <img src={imgHome} alt="visao de cima de uma bandeja com duas porçoes de batata frita e um hamburger" />
    <img src={showcase1} alt="visao de cima de uma bandeja com duas porçoes de batata frita e um hamburger" />
    <img src={showcase2} alt="visao de cima de uma bandeja com duas porçoes de batata frita e um hamburger" />
    <img src={showcase3} alt="visao de cima de uma bandeja com duas porçoes de batata frita e um hamburger" />
    <img src={showcase4} alt="visao de cima de uma bandeja com duas porçoes de batata frita e um hamburger" />
  </div>
</div>

        
      </div>
    </div>
  );
};

export default Home;
