import React,{useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext';

const Content = () => {
  const {isDark} = useContext(ThemeContext);

  return (
    <div className='content'
    style={{
      backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
      color: isDark ? '#f0f0f0' : '#000000',
      boxShadow: isDark
      ? '0 8px 30px rgba(0, 0, 0, 0.5)'
      : '0 4px 20px rgba(0, 0, 0, 0.1)',
    }}
    >
      <p>SVT user, Have a good day. </p>
    </div>
  )
}

export default Content;