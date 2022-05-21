import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.scss";

import { sizeScreen } from '../../utils/utils.js';

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(sizeScreen())
    })
  }, [screenWidth])

  return (
    <div className="container max-w-screen-2xl mx-auto p-6 home">
      <div className="flex items-center justify-between">
        <span className="logo flex items-center utils fz-20 line-height-24">
          <img src="/assets/icons/mini-logo.svg" alt="Top Vpn" className="mr-3" /> Top<span className="font-bold">VPN</span>
        </span>

        <span className="name utils color-orange-800 utils fz-16 line-height-19 fw-500">{screenWidth > 600 ? 'Fraza Aditya Wiguna' : `${'Fraza Aditya Wiguna'.substring(0, 5)}...`}</span>
      </div>

      <header className="top-header">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center">
            <div className="mt-10 md:mt-0 text-center md:text-left">
              <h1 className="utils fz-50 line-height-70 color-black-800">Want anything to be easy with <span className="utils fw-500">TopVPN</span>.</h1>
              <p className="utils fz-16 line-height-30 color-gray-700 mt-5">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
              <Link to="#" className="utils btn-1 fz-16 fw-700 text-white mt-12 mx-auto md:mx-0">Get Started</Link>
            </div>
          </div>

          <div className="row-start-1 md:row-auto">
            <img src="/assets/imgs/illustration-1.webp" alt="illustration 1" className="mt-10 md:mt-0" />
          </div>
        </div>
      </header>

      <section className="information-data">
        <div className="utils card-info flex flex-col justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex items-center justify-center">
              <div className="utils circle-1">
                <img src="/assets/icons/user.svg" alt="user" />
              </div>
              <div className="ml-9">
                <h3 className="utils fz-25 line-height-30 fw-700">
                  90+
                </h3>
                <p className="utils fz-20 line-height-30 color-gray-700">
                  Users
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="utils circle-1">
                <img src="/assets/icons/location.svg" alt="location" />
              </div>
              <div className="ml-9">
                <h3 className="utils fz-25 line-height-30 fw-700">
                  30+
                </h3>
                <p className="utils fz-20 line-height-30 color-gray-700">
                  Locations
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="utils circle-1">
                <img src="/assets/icons/database.svg" alt="database" />
              </div>
              <div className="ml-9">
                <h3 className="utils fz-25 line-height-30 fw-700">
                  50+
                </h3>
                <p className="utils fz-20 line-height-30 color-gray-700">
                  Servers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
