import React, { Component } from 'react'
import './button.css'

export default class Button extends Component{
  constructor(){
    super()
    this.state = {
      active: false,
      deltaX: 0,
      deltaY: 0
    }
    this.myRef = React.createRef()
  }
  change(event){
    let {x,y} = this.myRef.current.getBoundingClientRect()
    event.persist()
    let {clientX,clientY} = event
    let deltaX = clientX - x - 5
    let deltaY = clientY - y - 5
    this.setState({
      active: true,
      deltaX: deltaX,
      deltaY: deltaY
    })
  }
  end(){
    this.setState({
      active: false
    })
  }
  render(){
    return(
      <button className="btn" ref={this.myRef} onClick={this.change.bind(this)}>
        <span className="content">{this.props.value}</span>
        {this.state.active === true ? 
        (<span 
          className="circle" 
          style={{ left: this.state.deltaX, top: this.state.deltaY}}
          onAnimationEnd={this.end.bind(this)}
        ></span>) :
        ('')
        }
      </button>
    )
  }
}