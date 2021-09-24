import React from 'react'
import useDarkMode from 'use-dark-mode'
import sun from '../../../static/media/icons/sun.svg'
import moon from '../../../static/media/icons/moon.svg'

const ToggleDark = () => {
  const darkMode = useDarkMode(false)

  return (
    <div className="navbar-item dark-toggle">
      <button className="toggle-darkmode" onClick={darkMode.toggle} type="submit">
        {darkMode.value ? (
          <img src={sun} className="sun-icon" alt="sun-icon" width="25px" height="25px" />
        ) : (
          <img src={moon} className="moon-icon" alt="moon-icon" width="25px" height="25px" />
        )}
      </button>
    </div>
  )
}

export default ToggleDark
