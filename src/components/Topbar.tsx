import React from 'react'
import { Link } from 'gatsby'
import ToggleDark from './common/ToggleDark'

export default function Topbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false)

  return (
    <header className="mx-auto w-full flex-none duration-100 ease-in">
      <div className="topbar mx-auto w-full max-w-6xl md:flex md:justify-between">
        <div className="flex justify-between">
          <a className="flex items-center" href="/">
            <span className="site-title text-gray-900 dark:text-white">equk</span>
          </a>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="ml-1.5 inline-flex items-center rounded-lg p-2.5 text-sm text-gray-500 transition hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-700"
              id="toggle-navigation-menu"
              aria-label="Toggle Menu"
              type="button"
              data-aw-toggle-menu=""
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  fill="none"
                  className="icon-tabler"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M4 8h16" />
                  <path d="M4 16h16" />
                </g>
              </svg>
            </button>
          </div>
        </div>
        <nav
          aria-label="Mobile navigation"
          id="mobile-nav"
          className={`${isNavOpen ? 'block' : 'hidden'}
          md:hidden w-full items-center overflow-y-auto dark:text-slate-200 md:mx-5 md:h-auto md:w-auto md:overflow-visible`}
        >
          <ul className="flex w-full flex-col text-xl md:w-auto md:flex-row md:self-center md:pt-0 md:text-base">
            <li>
              <Link className="navbar-item" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/projects">
                Projects
              </Link>
            </li>
          </ul>
          <ToggleDark />
        </nav>
        <nav
          aria-label="Main navigation"
          id="main-nav"
          className="hidden w-full items-center overflow-y-auto dark:text-slate-200 md:mx-5 md:flex md:h-auto md:w-auto md:overflow-visible"
        >
          <ul className="flex w-full flex-col text-xl md:w-auto md:flex-row md:self-center md:pt-0 md:text-base">
            <li>
              <Link className="navbar-item" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/projects">
                Projects
              </Link>
            </li>
          </ul>
          <ToggleDark />
        </nav>
      </div>
    </header>
  )
}
