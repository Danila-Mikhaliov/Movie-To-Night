import { sign } from "crypto";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IStoreState } from "../../types";
import "./UserInfo.css";
const UserInfo = () => {
  const navigate = useNavigate();
  const username = useSelector(
    (state: IStoreState) => state.user.user.username
  );
  const letter = username?.split("");
  return (
    <div className="user-info" onClick={() => navigate("sign-in")}>
      <div className="user-info__icon">{letter ? letter[0] : "?"}</div>
      <p className="user-info__name">{username}</p>
    </div>
  );
};
export default UserInfo;
