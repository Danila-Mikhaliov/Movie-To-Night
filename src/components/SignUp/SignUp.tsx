import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../redux/action-creators/user-action-creators";
import { Button } from "../Button";
import { ArrowLeft } from "../Icons";
import "./SignUp.css";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const handlerSignUp = (e: any) => {
    e.preventDefault();
    dispatch(
      signUp({
        email: email,
        password: password,
        username: username,
      })
    );
  };
  return (
    <div className="container">
      <div className="sign-in">
        <div className="sign-in__content">
          <div className="sign-in__content-header">
            <Button
              callback={() => navigate("/")}
              content={<ArrowLeft />}
              isActive={true}
            ></Button>
            <h1 className="sign-in__content-name">Регистрация</h1>
          </div>
          <form
            className="sign-in__content-registration"
            onSubmit={(e) => handlerSignUp(e)}
          >
            <label className="sign-in__content-registration-input-name">
              Email
            </label>
            <input
              name="sign-in-email"
              className="sign-in__content-registration-input"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="sign-in__content-registration-input-name">
              Username
            </label>
            <input
              name="sign-in-email"
              className="sign-in__content-registration-input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="sign-in__content-registration-input-name">
              Password
            </label>
            <input
              name="sign-in-password"
              className="sign-in__content-registration-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="sign-in__content-registration-input-name">
              Confirm Password
            </label>
            <input
              name="sign-in-password"
              className="sign-in__content-registration-input"
              type="password"
              placeholder="Confirm password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <Button content="Sign in" isActive={true} typeSubmit={true} />
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
