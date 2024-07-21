import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/logms.svg";
import react from "../../assets/react.svg";

export default function header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="hed">
            <img src={logo} alt="" />
            <nav className="nav">
              <ul className="nav-list">
                <li className="nav-itme">
                  <a className="nav-link">Vakansiyalar</a>
                </li>
                <li className="nav-itme">
                  <a className="nav-link">Kandidatlar</a>
                </li>
                <li className="nav-itme">
                  <a className="nav-link">Kompaniyalar</a>
                </li>
                <li className="nav-itme">
                  <a className="nav-link">Xizmatlar</a>
                </li>
                <li className="nav-itme">
                  <a className="nav-link">Ta’lim</a>
                </li>
              </ul>
            </nav>
            <div style={{ display: "flex", gap: "38px" }}>
              <select className="select" name="" id="">
                <option value="">O’zb</option>
                <option value="">Eng</option>
                <option value="">Rus</option>
              </select>
              <button className="btn">Boshlash</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="box">
            <h2>Kompaniya ma’lumotlari</h2>
            <p>Kompaniya haqidagi ma’lumotlarni kiriting</p>
            <b className="logo">
              <img className="react" src={react} alt="" />
              <p>Yuklash</p>
            </b>
            <form className="form">
              <div>
                <h5>Kompaniya nomi *</h5>
                <input
                  className="inputss"
                  type="text"
                  placeholder="Kompaniya nomi"
                />
              </div>
              <div>
                <h5>Email *</h5>
                <input className="inputss" type="email" placeholder="Email" />
              </div>
              <div>
                <h5>Telefon raqami *</h5>
                <input
                  className="inputss"
                  type="number"
                  placeholder="UZ +9989"
                />
              </div>

              <h5>Linklar</h5>
              <div className="links">
                <div className="infos">
                  <i class="fa-solid fa-earth-americas"></i>
                </div>
                <div className="infos">
                  <i class="fa-brands fa-instagram"></i>
                </div>
                <div className="infos">
                  <i class="fa-brands fa-telegram"></i>
                </div>
                <div className="infos">
                  <i class="fa-brands fa-facebook"></i>
                </div>
                <div className="infos">
                  <i class="fa-brands fa-github"></i>
                </div>
              </div>
              <div className="davShah">
                <span>
                  <h5>Davlat</h5>
                  <select className="davselec" name="" id="">
                    <option value="Davlatlar">Davlatlar</option>
                    <option value="Uz">Uz</option>
                    <option value="Ru">Ru</option>
                    <option value="Eng">Eng</option>
                  </select>
                </span>
                <span>
                  <h5>Shahar</h5>
                  <select className="davselec" name="" id="">
                    <option value="Shahar">Shahar</option>
                    <option value="Uz">Uz</option>
                    <option value="Ru">Ru</option>
                    <option value="Eng">Eng</option>
                  </select>
                </span>
              </div>
              <h5>Yashash joyi *</h5>
              <div>
                <textarea className="joylashuv" placeholder="Joy"></textarea>
              </div>
              <h5>Hodimlar soni *</h5>
              <div>
                <input
                  className="inputss"
                  placeholder="Hodimlar soni"
                  type="number"
                />
              </div>
              <h5>Izoh</h5>
              <div style={{ paddingBottom: "42px" }}>
                <textarea className="fikr"></textarea>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button className="btnn">Orqaga</button>
                <button className="btnn">Keyingisi</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
