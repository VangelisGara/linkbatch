import Logo from "../components/logo/logo";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
   return (
      <div>
         {" "}
         <div className="appNav">
            <ul>
               <li>React version</li>
               <li style={{ color: "lightgreen" }}>NextJS version</li>
            </ul>
         </div>
         <Logo />
         <Component {...pageProps} />
      </div>
   );
}

export default MyApp;
