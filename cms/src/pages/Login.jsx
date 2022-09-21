import { useState, useContext } from "react";
import { JwtContext } from "../contexts/jwtContext";
import { useNavigate } from "react-router-dom";
import { API } from "../services/API";
import "./Login.css"
const Login = () => {

  let navigate = useNavigate();
  const { setJwt, setUser } = useContext(JwtContext);

  const [login, setLogin] = useState({});

  const sendlogin = () => {
    API.post("/user/login", login).then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.userInDb));
      setJwt(res.data.token);
      setUser(res.data.userInDb);
      if (res.data.token) {
        navigate("/home");
      }
    });
  }

  const handleInput = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  return (
    <div className="login-container">
      <div className="frase-container">
        <div className='title'>
          <h1>Disfruta una nueva expericencia</h1>
        </div>
        <div className='title-2'>
          <h2>Aprovecha cada dia, no te fies del mañana. Regala y comparte momentos.</h2>
        </div>
      </div>

      <section className="login">
        <form className="formulario">
          <h2>Please login:</h2>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleInput}
          />



          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInput}
          />

          <button type="button" className="button-login" onClick={sendlogin}>Login</button>
        </form>
      </section>
    </div>
  );
};

export default Login