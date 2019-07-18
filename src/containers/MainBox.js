import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor() {
    super()
    this.state = {
      page: ''
    }
  }

  changePage = (data) => {
    this.setState({page: data})
  }

  displayComponent = () => {
    const currentPage = this.state.page
    if (currentPage === 'profile') {
      return <Profile />
    }
    else if (currentPage === 'photo') {
      return <Photos />
    }
    else if (currentPage === 'cocktail') {
      return <Cocktails />
    }
    else if (currentPage === 'pokemon') {
      return <Pokemon />
    }
    else {
      return null
    }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu,
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. Which component should have state?
    Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>{this.displayComponent()}</div>

    return (
      <div>
        <MenuBar changePage={this.changePage}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
