import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        person: {
          fullName: "Rami",
          bio: "All things will be alright.",
          imgSrc: "", // Provide a valid image source URL here
          profession: "Architect"
        }
        this.state ={counter  :0 } ; 
      }; 

      componentDidMount () { 
        setInterval(() => {
            this.setState ((PrevState )) => {
                count : PrevState.count+1  
            }
        }, 1000);
      }
      componentWillUnmount () {
        clearInterval{this.state} ;
      }
  render() {

    return (
      <div>
        <h2>{this.person.fullname}</h2>
        <h2>{this.person.bio}</h2>
        <h2>{this.person.profession}</h2>
        <div> counter : {this.state.counter} </div>
        <img src={this.person.imgSrc} alt='profile' >


      </div>
    )
  }
}
