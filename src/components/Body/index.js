// Write your code here
import {LoremIpsum} from 'react-lorem-ipsum'
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="navbar">
              <div className="navbar-content">
                <h1 className="body-headings">Left Navbar Menu</h1>
                <ul className="list-items-container">
                  <li className="item">item 1</li>
                  <li className="item">item 2</li>
                  <li className="item">item 3</li>
                  <li className="item">item 4</li>
                </ul>
              </div>
            </div>
          )}
          {showContent && (
            <div className="content-container">
              <h1 className="body-headings">Content</h1>
              <div className="content-text">
                <LoremIpsum p={2} />
              </div>
            </div>
          )}
          {showRightNavbar && (
            <div className="navbar">
              <div className="navbar-content">
                <h1 className="body-headings">Right Navbar</h1>
                <p className="ad">Ad 1</p>
                <p className="ad">Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
