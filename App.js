import { Outlet } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import ThemeProvider from "./contexts/ThemeContext"



const App = () => {
  // const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("darkMode")));second method
  return (
    <ThemeProvider>
      <Header />
      <Outlet/>
    </ThemeProvider>
    
    // second method with using context but state in App component 
    // <ThemeContext.Provider value={[isDark, setIsDark]}>
    // <Header />
    // <Outlet/>
    // </ThemeContext.Provider>

    //first method withput using context 
    // <Header theme={[isDark, setIsDark]}/>
    // <Outlet context={isDark}/>
  )
}

export default App