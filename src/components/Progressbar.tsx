import React from 'react'
import ScrollProgress from 'scrollprogress'

class Progressbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: 0,
    }
  }

  componentDidMount() {
    this.progressObserver = new ScrollProgress((x, y) => {
      this.setState({ progress: y * 100 })
    })
  }

  componentWillUnmount() {
    this.progressObserver.destroy()
  }

  render() {
    const { progress } = this.state
    const style = {
      backgroundColor: '#0093e5',
      height: '3px',
      position: 'fixed',
      top: 0,
      left: 0,
      width: `${progress}%`,
    }

    return <div className="progress-bar" style={style} />
  }
}

export default Progressbar
