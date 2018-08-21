import PropTypes from 'prop-types'
import React from 'react'
import CSSModules from 'browser/lib/CSSModules'
import styles from './ApplicationMenuDropdown.styl'

class ApplicationMenuDropdown extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isActive: false
    }
  }

  handleMouseDown (e) {
    this.setState({
      isActive: true
    })
  }

  handleMouseUp (e) {
    this.setState({
      isActive: false
    })
  }

  handleMouseLeave (e) {
    this.setState({
      isActive: false
    })
  }

  clickMenu (key) {
    this.props.menu.items[key].click()
  }

  render () {
    const { className } = this.props

    return (
      <div
        className='ApplicationMenuDropdown'
        styleName={this.state.open === true ? 'root' : 'root-hidden'}>
        <ul
          styleName='dropdown-items'>
          {Object.keys(this.state.menu).map(key =>
            <li
              key={key}
              styleName='submenu-item'
              onClick={() => this.props.menu.items[key].click()}>
              {this.props.menu.items[key].label}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

ApplicationMenuDropdown.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string
}

export default CSSModules(ApplicationMenuDropdown, styles)
