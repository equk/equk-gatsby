/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-expressions */
import React from 'react'
import { Link } from 'gatsby'
import Progressbar from './Progressbar'
import ToggleDark from './common/ToggleDark'

class Topbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    const { active } = this.state
    this.setState(
      { active: !active },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        // eslint-disable-next-line react/destructuring-assignment
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    const { navBarActiveClass } = this.state
    return (
      <div className="top">
        <Progressbar />
        <div className="topbar">
          <nav className="navbar container" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <h1 className="site-title navbar-item">
                <Link className="title-link" to="/">
                  equk
                </Link>
                <span className="cursor" />
              </h1>
              <div
                className={`navbar-burger burger ${navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
                onKeyDown={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div id="navMenu" className={`navbar-menu navbar-end ${navBarActiveClass}`}>
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/projects">
                Projects
              </Link>
              <ToggleDark />
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default Topbar
