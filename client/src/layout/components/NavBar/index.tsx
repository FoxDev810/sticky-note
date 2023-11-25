import { Link } from "react-router-dom";
import { Header, LogoWrapper } from "../../styles";
import { MdOutlineStickyNote2 } from "react-icons/md";

export const NavBar = () => {
  return (
    <Header>
      <div>
        <Link to="/">
          <LogoWrapper>
            <MdOutlineStickyNote2 size={32} />
            <h1>Sticky Note</h1>
          </LogoWrapper>
        </Link>
      </div>
    </Header>
  );
}
