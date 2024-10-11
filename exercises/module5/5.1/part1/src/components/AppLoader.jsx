import { ProviderWrapper} from "../contexts/counterContext.jsx";
import App from "../components/App/App.jsx";    

const AppLoader= () => {
  return (
    < ProviderWrapper>
        <App />
 
      </ProviderWrapper>
  )
}

export default AppLoader;