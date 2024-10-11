import { ProviderWrapper } from "../../contexts/opinionContext.jsx";
import App from "../App/App.jsx";

const AppLoader= () => {
  return (
    <ProviderWrapper>
        <App />
 
      </ProviderWrapper >
  )
}

export default AppLoader;
