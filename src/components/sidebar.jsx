import {
  useLocation,
} from "react-router-dom";
import '../styles/sidebar.css';

export default function Sidebar() {

  let location = useLocation();
  
  return (
    <nav className="navbar">
      <img src="/logo.svg" alt="" />
      <SidebarButton location={location} endpoint="/" icon="🏠" name="Home" />
      <SidebarButton location={location} endpoint="/articles" icon="📓" name="Articles" />
      <SidebarButton location={location} endpoint="/questions" icon="🤔" name="Questions" />
      <SidebarButton location={location} endpoint="/live" icon="📡" name="Live" />
      <SidebarButton location={location} endpoint="/settings" icon="⚙️" name="Settings" />
    </nav>
  );

}

function SidebarButton({ location, endpoint, icon, name }) {

  return (
    <a href={ endpoint } className={ location.pathname === endpoint ? ("active") : ("") }>
      <div className="icon">
        { icon }
      </div>
      <div className="text">
        { name }
      </div>
    </a>
  );

}