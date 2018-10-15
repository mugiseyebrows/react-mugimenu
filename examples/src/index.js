import React, { Component } from 'react'
import { render} from 'react-dom'
import MugiMenu from '../../src'
import Star from './star.svg'

class App extends Component {

    constructor(props) {
      super(props)
      this.state = {
        content: 'click menu item'
      }
      this.handleItemClick = this.handleItemClick.bind(this)
    }
  
    handleItemClick(item) {
      this.setState({content:`${item} clicked`})
    }
  
    render() {
      let items = [
        'no-icon',
        {name:'icon',icon:Star,caption:'icon'},
        {name:'drop',children:[{name:'item1',children:[{name:'item2',icon:Star,caption:'item2'},'item3','item4']}]},
        {name:'no-caption',icon:Star,children:['item1','item2']},
      ]
      
      return (
        <div className="App">
          <MugiMenu className="test" onItemClick={(item)=>this.handleItemClick(item)} items={items}/>
          <div className="content">
            {this.state.content}
          </div>
        </div>
      );
    }
  }

render(<App />, document.getElementById("root"));