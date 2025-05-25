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