import "./Header.css";
import { UserInfo } from "../UserInfo";
import { useNavigate } from "react-router-dom";
import { Search } from "../Search";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-logo" onClick={() => navigate("/")}>
            Movie-Night
          </div>
          <Search />
          <UserInfo />
        </div>
      </div>
    </header>
  );
};
export default Header;
