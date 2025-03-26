import { useTheme } from "./hooks/useTheme";


const Header = () => {
  // const [isDark, setIsDark] = theme; first method using props
  // const [isDark, setIsDark] = useContext(ThemeContext);
  const [isDark, setIsDark] = useTheme();//using custom hook
  const toggleDarkMode = () => {
    setIsDark(!isDark);
    localStorage.setItem("darkMode", !isDark);
  };
  return (
    <header className={`header-container ${isDark && "dark"}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={toggleDarkMode}
        >
          {isDark?<i className="fa-solid fa-sun"></i>:<i className="fa-solid fa-moon"></i>}
          {isDark?"Light Mode":"Dark Mode"}
        </p>
      </div>
    </header>
  );
};

export default Header;
