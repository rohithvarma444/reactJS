import { useState,useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./context/themeContext";
import Themebtn from "./components/Themebtn";
import Card from "./components/Card";

function App() {

  const [theme,useTheme] = useState("light");
  

  const darkTheme = () => {
    useTheme("dark");
  }

  const lightTheme = () => {
    useTheme("light");
  }

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    htmlElement.classList.remove('dark', 'light');
    htmlElement.classList.add(theme);
    return () => {
      htmlElement.classList.remove(theme);
    };
  }, [theme]);
  

  return (
    <>
      <ThemeProvider value={{theme,darkTheme,lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <Themebtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
