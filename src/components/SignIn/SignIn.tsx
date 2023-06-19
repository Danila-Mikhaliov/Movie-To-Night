import { useNavigate, NavLink } from "react-router-dom";
import { Button } from "../Button";
import { ArrowLeft } from "../Icons";
import { useState } from "react";
import "./SignIn.css";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/action-creators/user-action-creators";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = (e: any) => {
    e.preventDefault();
    dispatch(
      signIn({
        email: email,
        password: password,
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
            <h1 className="sign-in__content-name">Войти</h1>
          </div>
          <form
            className="sign-in__content-registration"
            onSubmit={(e) => handleSignIn(e)}
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
            <Button content="Sign in" isActive={true} typeSubmit={true} />
            <NavLink to={"/sign-up"}>Нет аккаунта ?</NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
