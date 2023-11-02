import "./styles.css";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { languageContext } from "./languageContext";
import { lightcontext } from "./themeContext";

// get theme and language contexts here

export default function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");

  return (
   <languageContext.Provider value={{language,setLanguage}}>
    <lightcontext.Provider value={{theme,setTheme}}>
       <div className={`App ${theme}`}>
      <Navbar />
      <Home />
    </div>
    </lightcontext.Provider>
   </languageContext.Provider>
  );
}
