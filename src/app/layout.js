

import '../../styles/global.scss';
import NavigationBar from "./components/NavigationBar/NavigationBar.js";

export default function Layout({ children }) {
  return (   
    <>
      <NavigationBar />
      <div className="container page-wrapper">
        {children}
      </div>   
    </>
  );
}
