import React from 'react'

const Container = ({ className = null, children }) => {
  return (
    <div className={className + " container mx-auto"}>{children}</div>
  )
}

export default Container