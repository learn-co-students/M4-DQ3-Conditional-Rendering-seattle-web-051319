import React, { Component } from 'react'

class MenuBar extends Component {

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  handleClick = event => {
    const anchors = document.getElementsByTagName('a')
    for (let anchor of anchors) {
      anchor.className = 'item'
    }
    if (event.target.nodeName === 'A') {
      event.target.className = 'item active'
    }
    else {
      event.target.parentNode.className = 'item active'
    }
    this.props.changePage(event.target.id)
  }

  render() {
    return (
      <div className="ui four item menu">
        <a className="item active" id="profile" onClick={this.handleClick}>
          <i className="user large icon" id="profile" />
        </a>

        <a className="item" id="photo" onClick={this.handleClick}>
          <i className="photo large icon" id="photo" />
        </a>

        <a className="item" id="cocktail" onClick={this.handleClick}>
          <i className="cocktail large icon" id="cocktail" />
        </a>

        <a className="item" id="pokemon" onClick={this.handleClick}>
          <i className=" themeisle large icon" id="pokemon" />
        </a>
      </div>
    )
  }
}

export default MenuBar
