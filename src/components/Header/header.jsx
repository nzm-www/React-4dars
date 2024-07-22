import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/logms.svg";
import react from "../../assets/react.svg";

function header() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState(null);
  const [count, setCount] = useState([]);
  const [shahar, setShahar] = useState([]);
  const [joy, setJoy] = useState("");
  const [people, setpeople] = useState(null);
  const [desc, setDesc] = useState();

  // function handleName(event) {
  //   setName(event.target.value);
  // }
  // function handleEmali(event) {
  //   setEmail(event.target.value);
  // }
  // function handleNum(event) {
  //   setNum(event.target.value);
  // }

  // function handleCountry(event) {
  //   setCount(event.target.value);
  // }
  // function handleShahar(event) {
  //   setShahar(event.target.value);
  // }
  // function handleJoy(event) {
  //   setJoy(event.target.value);
  // }

  // function handlepeople(event) {
  //   setpeople(event.target.value);
  // }
  // function handleDesc(event) {
  //   setDesc(event.target.value);
  // }

  function handleForm(event) {
    event.preventDefault();

    let user = {
      name,
      email,
      num,
      count,
      shahar,
      joy,
      people,
      desc,
    };
    localStorage.setItem("user", JSON.stringify(user));

    setName("");
    setEmail("");
    setNum("");
    setCount("");
    setJoy("");
    setpeople("");
    setDesc("");
    setShahar("");
    console.log(user, "user");
  }
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
            <form className="form" onSubmit={handleForm}>
              <div>
                <h5>Kompaniya nomi *</h5>
                <input
                  onChange={(event) => setName(event.target.value)}
                  className="inputss"
                  type="text"
                  placeholder="Kompaniya nomi"
                  value={name}
                />
              </div>
              <div>
                <h5>Email *</h5>

                <input
                  className="inputss"
                  type="email"
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                />
              </div>
              <div>
                <h5>Telefon raqami *</h5>
                <input
                  className="inputss"
                  type="number"
                  placeholder="UZ +9989"
                  onChange={(event) => setNum(event.target.value)}
                  value={num}
                />
              </div>

              <h5>Linklar</h5>
              <div className="links">
                <div className="infos">
                  <i className="fa-solid fa-earth-americas"></i>
                </div>
                <div className="infos">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div className="infos">
                  <i className="fa-brands fa-telegram"></i>
                </div>
                <div className="infos">
                  <i className="fa-brands fa-facebook"></i>
                </div>
                <div className="infos">
                  <i className="fa-brands fa-github"></i>
                </div>
              </div>
              <div className="davShah">
                <span>
                  <h5>Davlat</h5>
                  <select
                    className="davselec"
                    value={count}
                    onChange={(event) => setCount(event.target.value)}
                  >
                    <option value="Davlatlar">Davlatlar</option>
                    <option value="Uz">Uz</option>
                    <option value="Ru">Ru</option>
                    <option value="Eng">Eng</option>
                  </select>
                </span>
                <span>
                  <h5>Shahar</h5>
                  <select
                    className="davselec"
                    value={shahar}
                    onChange={(event) => setShahar(value.target.value)}
                  >
                    <option value="Shahar">Shahar</option>
                    <option value="Tosh">Tosh</option>
                    <option value="Far">Far</option>
                    <option value="Jzx">Jzx</option>
                  </select>
                </span>
              </div>
              <h5>Yashash joyi *</h5>
              <div>
                <textarea
                  value={joy}
                  className="joylashuv"
                  placeholder="Joy"
                  onChange={(event) => setJoy(event.target.value)}
                ></textarea>
              </div>
              <h5>Hodimlar soni *</h5>
              <div>
                <input
                  value={people}
                  className="inputss"
                  placeholder="Hodimlar soni"
                  type="number"
                  onChange={(value) => setpeople(event.target.value)}
                />
              </div>
              <h5>Izoh</h5>
              <div style={{ paddingBottom: "42px" }}>
                <textarea
                  onChange={(value) => setDesc(event.target.value)}
                  value={desc}
                  className="fikr"
                ></textarea>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button className="btnn">Orqaga</button>
                <button className="btnn" type="submit">
                  Keyingisi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default header;
