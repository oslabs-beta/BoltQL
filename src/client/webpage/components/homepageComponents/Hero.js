import React from 'react';
import '../../styling/hero.scss';
import { motion } from 'framer-motion';
import { Link, Route, Routes } from 'react-router-dom';

let leftLines = require('../../../../assets/lower-left-lines.png');
let rightLines = require('../../../../assets/upper-right-lines.png');
let logo = require('../../../../assets/nobg-LightQL.png');

const Hero = () => {
  return (
    <div id="hero-layout">
      <div id="hero">
        <aside id="hero-left">
          <img
            alt=""
            id="lower-left"
            className="hero-imgs"
            src={leftLines.default}
          ></img>
        </aside>
        <section id="main-info-section">
          <motion.img
            id="logo"
            whileHover={{
              scale: 1.1,
            }}
            initial={{ opacity: 0.6, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src={logo.default}
            alt="LightQL Logo"
          ></motion.img>
          <h1 id="welcome-text" className="text">
            This is LightQL.
          </h1>
          <p id="description-text" className="text">
            A lightspeed, lightweight client-side cache for GraphQL.
          </p>
          <section id="clipboard-docs">
            <section id="copy-npm">
              <p id="dollar-sign" className="npm-text">
                $
              </p>
              <p id="npm-link" className="npm-text">
                npm install lightql-cache
              </p>
              <i class="bi bi-clipboard"
                id="clipboard-icon"
                onClick={() =>
                  navigator.clipboard.writeText('npm install lightql-cache')
                }
                sx={{ color: '#323949' }}
              >

              </i>
            </section>
            <Link to="/docs" id="docs-link">
              <button id="docs-button" className="button-text">
                Read our docs
              </button>
            </Link>
          </section>
          <Link to="/aboutUs" id="demo-link">
            <p>Contact us</p>
          </Link>
        </section>
        <aside id="hero-right">
          <img
            alt=""
            id="upper-right"
            className="hero-imgs"
            src={rightLines.default}
          ></img>
        </aside>
      </div>
    </div>
  );
};

export default Hero;
