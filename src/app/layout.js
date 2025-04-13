

import '../../styles/global.scss';

import { ReduxProvider } from './provider.js';
import NavigationBar from "./components/NavigationBar/NavigationBar.js";


export default function Layout({ children }) {
  return (
    <html lang="en">      
      <body>
        <ReduxProvider>
          <>
            <NavigationBar />
            <div className="container page-wrapper">
              {children}
            </div>          
          </>
        </ReduxProvider>
      </body>
    </html>
  );
}
