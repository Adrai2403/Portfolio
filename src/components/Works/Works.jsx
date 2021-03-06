import React, { useContext } from "react";
import "./Works.css";
import Vscode from "../../img/vscode.png";
import Pycharm from "../../img/pycharm.jpg";

import Jupyter from "../../img/jupyter.png";
import Mysql from "../../img/mysql.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works on  these
          </span>
          <span>Platform</span>
          <spane>
            Visual Studio Code ,
            <br />
            Pycharm
            
            <br />
            MYSQL
            <br />
            Jupyter
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Vscode} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Pycharm} alt="" />
          </div>
          <div className="w-secCircle">
            
          </div>{" "}
          <div className="w-secCircle">
            <img src={Mysql} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Jupyter} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
