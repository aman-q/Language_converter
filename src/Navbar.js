import { lightcontext } from "./themeContext";
import { languageContext } from "./languageContext";
import { useContext } from "react";
export const Navbar = () => {
  // get theme and lanauge contexts here
  const {language} =useContext(languageContext);
  const {theme,setTheme} =useContext(lightcontext);
  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        <button onClick={changeTheme}> 
        {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        <span>{language}</span>
      </div>
    </div>
  );
};
