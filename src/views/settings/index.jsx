import { Outlet, Link, useLocation } from "react-router-dom";

export default function App() {

  let location = useLocation();
  let splitLocation = location.pathname.split('/');

  let backButton = <Link to="/settings">Go Back</Link>;
  let settingsTitle = `Settings`;
  
  let page = '';

  if (splitLocation.length > 2) page = splitLocation[2];
  if (page.length > 0) page = page[0].toUpperCase() + page.slice(1).toLowerCase();

  if (page.length > 0) settingsTitle = `${page} Settings`;

  return (
    <>
      <h1>{ settingsTitle }</h1>
      { (settingsTitle != 'Settings') ? backButton : <></> }
      <Outlet />
    </>
  );
}