import DropdownUtility from "../Components/DropdownUtility";
import Utility from "../Components/Utility";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Utility>
      <DropdownUtility>
        <Component {...pageProps} />
      </DropdownUtility>
    </Utility>
  );
}

export default MyApp;
