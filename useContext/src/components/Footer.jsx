import React,{useContext} from 'react';
import { ThemeContext } from '../context/ThemeContext';


const Footer = () => {
  const {isDark, setIsDark} = useContext(ThemeContext);

    const toogleTheme = () => {
        setIsDark(!isDark);
    }
  return (
    <footer
     className='footer'
     style={{
        backgroundColor: isDark ? "black" : "lightgray",

     }}
     >
       <button className='button'
        onClick={toogleTheme}
        style={{
          backgroundColor: isDark ? '#333': '#f0f0f0',
          color: isDark ? 'white' : 'black',
          border: '1px solid #ccc',
          borderRadius: '25px',
        }}
        >
        {isDark ? " Light Mode" : "Dark Mode"}
        </button> 
     </footer>
  )
}

export default Footer;