import React from 'react'
import useDarkMode from 'use-dark-mode'

/**
 * Mock element for SSR
 *
 * "document" is not available during server-side rendering.
 */

const noop = () => {}

const mockElement = {
  classList: {
    add: noop,
    remove: noop,
  },
}

const sun = '/media/icons/sun.svg'
const moon = '/media/icons/moon.svg'

function ToggleDark() {
  const docElement = (global.document && global.document.documentElement) || mockElement
  const darkMode = useDarkMode(false, {
    classNameDark: 'dark',
    classNameLight: 'light',
    element: docElement,
  })

  return (
    <div className="navbar-item dark-toggle">
      <button className="toggle-darkmode inline-flex items-center p-2.5" onClick={darkMode.toggle} type="submit">
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
