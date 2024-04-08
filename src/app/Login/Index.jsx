import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slice/user.slice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password });
    // Validar la información del usuario

    if (username === "usuario0" && password === "password0") {
      // Almacenar la información del usuario en el estado de la aplicación
      dispatch(
        login({
          username: "usuario0",
          modules: ["module1", "module2"],
        })
      );
      navigate("/");
    } else if (username === "usuario1" && password === "password1") {
      // Almacenar la información del usuario en el estado de la aplicación
      dispatch(
        login({
          username: "usuario1",
          modules: ["module1"],
        })
      );
      navigate("/");
    } else if (username === "usuario2" && password === "password2") {
      // Almacenar la información del usuario en el estado de la aplicación
      dispatch(
        login({
          username: "usuario2",
          modules: ["module2"],
        })
      );
      navigate("/");
    } else {
      // Mostrar un mensaje de error
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}
