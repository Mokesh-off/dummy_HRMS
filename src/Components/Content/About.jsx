import React,{Component} from 'react';
import './Content.css';

class About extends Component{
render(){
  return(
    <div id="mainContainer">
      <div class="columnDiv">
        <div class="left"><img src={require("../../Assets/images/question1.png")}></img></div>
        <div class="right"><p>Description of first image</p></div>
    	</div>   
    </div>
        );
    }
} 
export default About;