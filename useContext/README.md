# React + Vite

- props version

- App,jsx
```jsx
import { useState } from 'react'
import './App.css';
import Page from './components/Page';

function App() {
const [isDark, setIsDark] = useState(false);

  return (
    <>
      <Page isDark={isDark} setIsDark={setIsDark} />
    </>
  )
}

export default App;

```

- Page.jsx
```jsx
import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer'

const Page = ({isDark,setIsDark}) => {
    return (
        <div className="page">
            <Header isDark={isDark}/>
            <Content isDark={isDark} />
            <Footer isDark={isDark} setIsDark={setIsDark} />
        </div>
    )
}

export default Page;
```

- Header.jsx
```jsx
import React from 'react';

const Header = ({isDark}) => {
  return (
    <header 
    className='header'
        style={{
            backgroundColor : isDark ? "black" : "lightgray",
            color: isDark ? "white" : "black",
        }}
        >
            <h1>Welcom SVT user !</h1>
    </header>
  )
}

export default Header
```

- Content.jsx
```jsx
import React from 'react'

const Content = ({isDark}) => {
  return (
    <div className='contents'
    style={{
      backgroundColor: isDark ? "black" : "white",
      color: isDark ? "white" : "black",
    }}
    >
      <p>SVT user, Have a good day. </p>
    </div>
  )
}

export default Content;
```

- Foooter.jsx
```jsx
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
```