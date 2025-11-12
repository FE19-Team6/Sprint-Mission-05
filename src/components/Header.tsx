import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import LoginLogo from "../assets/LoginLogo.png";

function getLinkStyle({
  isActive,
}: {
  isActive: boolean;
}): React.CSSProperties {
  return { color: isActive ? "var(--blue)" : undefined };
}

function Header() {
  return (
    <header className="flex justify-between items-center mx-auto px-4 bg-white border-b border-gray-200">
      <div className="flex items-center gap-2">
        <Link to="/" className="headerLogo" aria-label="홈으로 이동">
          <img src={Logo} alt="판다마켓 로고" />
        </Link>

        <nav>
          <ul className="flex gap-2 md:gap-9 font-bold text-gray-600 text-base">
            <li>
              <NavLink to="/community" style={getLinkStyle}>
                자유게시판
              </NavLink>
            </li>
            <li>
              <NavLink to="/items" style={getLinkStyle}>
                중고마켓
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Link
        to="/login"
        className="text-base font-semibold rounded-lg py-[11.5px] px-[23px] "
      >
        <img src={LoginLogo} alt="로그인로고"></img>
      </Link>
    </header>
  );
}

export default Header;
