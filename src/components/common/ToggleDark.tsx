import React from 'react'
import useDarkMode from 'use-dark-mode'

const sun = '/media/icons/sun.svg'
const moon = '/media/icons/moon.svg'

function ToggleDark() {
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
