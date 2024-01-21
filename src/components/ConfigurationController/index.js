// Write your code here
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
          } = value
          const onChangeToggleShowContent = () => onToggleShowContent()
          const onChangeToggleShowLeftNavbar = () => onToggleShowLeftNavbar()
          const onChangeToggleShowRightNavbar = () => onToggleShowRightNavbar()
          return (
            <div className="configuration-bg-container">
              <h1 className="layout-heading">Layout</h1>
              <div className="checkbox-container">
                <input
                  id="content"
                  type="checkbox"
                  className="checkbox"
                  onChange={onChangeToggleShowContent}
                  checked={showContent}
                />
                <label htmlFor="content" className="label-text">
                  Content
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  id="left-navbar"
                  type="checkbox"
                  className="checkbox"
                  onChange={onChangeToggleShowLeftNavbar}
                  checked={showLeftNavbar}
                />
                <label htmlFor="left-navbar" className="label-text">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  id="right-navbar"
                  type="checkbox"
                  className="checkbox"
                  onChange={onChangeToggleShowRightNavbar}
                  checked={showRightNavbar}
                />
                <label htmlFor="right-navbar" className="label-text">
                  Right Navbar
                </label>
              </div>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default ConfigurationController
