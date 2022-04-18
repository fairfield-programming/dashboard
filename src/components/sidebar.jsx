import {
  useLocation,
  Link
} from "react-router-dom";
import '../styles/sidebar.css';

export default function Sidebar() {

  let location = useLocation();
  
  return (
    <nav className="navbar">
      <SidebarButton location={location} endpoint="/" icon="🏠" name="Dashboard" />
      <SidebarButton location={location} endpoint="/articles" icon="📓" name="Articles" />
      <SidebarButton location={location} endpoint="/questions" icon="🤔" name="Questions" />
      <SidebarButton location={location} endpoint="/live" icon="📡" name="Live" />
      <SidebarButton location={location} endpoint="/earning" icon="💸" name="Earnings" />
      <SidebarButton location={location} endpoint="/settings" icon="⚙️" name="Settings" />
    </nav>
  );

}

function SidebarButton({ location, endpoint, icon, name }) {

  return (
    <Link to={ endpoint } className={ location.pathname === endpoint ? ("active") : ("") }>
      <div className="icon">
        { icon }
      </div>
      <div className="text">
        { name }
      </div>
    </Link>
  );

}