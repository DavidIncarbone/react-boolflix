
import './App.css'
import { GlobalProvider } from "./contexts/GlobalContext";
import { Header } from "./components/Header";
import Main from "./components/Main";


function App() {


  return (
    <>
      <GlobalProvider>
        <Header />
        <Main />
      </GlobalProvider>

    </>

  )
}

export default App
