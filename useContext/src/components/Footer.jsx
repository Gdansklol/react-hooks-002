import React from 'react';


const Footer = ({isDark, setIsDark }) => {
    const toogleTheme = () => {
        setIsDark("isDakr");
    }
  return (
    <footer
     className='footer'
     style={{
        backgroundColor: isDark ? "black" : "lightgray",

     }}
     >
       <button className='button' onClick={toogleTheme}>
        Dark Mode
        </button> 
     </footer>
  )
}

export default Footer;