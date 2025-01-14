import React from 'react'

const LayoutPage = ({ children, className = null }) => {
  return (
    <main className={className + " w-full min-h-[500px]"} id="main">
        <div className="w-full" id="main-content">
            {children}
        </div>
    </main>
  )
}

export default LayoutPage