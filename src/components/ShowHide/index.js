// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Cpmponent{
    state={ showFirstName: false,
    showLastName: false,}
    
    onShowFirstName=()=>{
        this.setState(prevState=>({showFirstName:!prevState.showFirstName}))
    }

    onShowLastName=()=>{
        this.setState(prevState=>({showLastName:!prevState.showLastName}))
        
    }

    render(){
        const {showFirstName,showLastName}=this.state
        return(
            <div className="app-container">
              h1 className="heading">Show/Hide</h1>
              <div className="show-hide-container">
               <div className="name-container">
                <button className="show-hide-button" type="button" onClick={this.onShowFirstName}></button>
                {showFirstName && <p className="name">Joe</p>}
               </div>
               <div className="name-container">
                <button className="show-hide-button" type="button" onClick={this.onShowLastName}></button>
                {showLastName && <p className="name">Jonas</p>}
               </div>
              </div>
            </div>
        )
    }
}
export default ShowHide
