import React, { Component } from 'react'
import './Content.css'
import '../SideNav/SideNav.css'

class Content extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: 0
    }
    this.setNewNumber = this.setNewNumber.bind(this)
  };
  setNewNumber (x) {
    this.setState({ data: this.state.data = x })
  }
  render () {
    return (
      <div className='bodyContent'>
        <div className='sidenav'>
          <button onClick={() => this.setNewNumber('about')}>About</button>
          <button onClick={() => this.setNewNumber('services')}>Services</button>
          <button onClick={() => this.setNewNumber('client')}>Client</button>
          <button onClick={() => this.setNewNumber('contacts')}>Contacts</button>
        </div>

        {this.state.data === 0
          ? <div id='mainContainer'>
            <div className='columnDiv'>
              <div className='left'>
                <img src={require('../../Assets/images/question1.png')} />
              </div>
              <div className='right'>
                <p>Description of first image</p>
              </div>
            </div>

            <div className='columnDiv'>
              <div className='left'><p>Description of second image</p></div>
              <div className='right'><img src={require('../../Assets/images/question2.png')} /></div>
            </div>

            <div className='columnDiv'>
              <div className='left'><img src={require('../../Assets/images/question3.png')} /></div>
              <div className='right'><p>Description of third image</p></div>
            </div>

            <div className='columnDiv'>
              <div className='left'><p>Description of fourth image</p></div>
              <div className='right'><img src={require('../../Assets/images/question4.png')} /></div>
            </div>

            <div className='columnDiv'>
              <div className='left'><img src={require('../../Assets/images/question5.png')} /></div>
              <div className='right'><p>Description of fifth image</p></div>
            </div>

            <div className='columnDiv'>
  <div className='left'><p>Description of six image</p></div>
  <div className='right'><img src={require('../../Assets/images/question6.png')} /></div>
            </div>
          </div>
			:		this.state.data == 'about'
				  ? <div id='mainContainer'>
  <div className='columnDiv'>
  <h1>About us</h1>
		 		    </div>
		 		  </div>
			:			this.state.data == 'services' ?
              <div id='mainContainer'>
  <div className='columnDiv'>
  <h1>services</h1>
				 </div>
			 </div>
			 :			 this.state.data == 'client' ?
  <div id='mainContainer'>
                  <div className='columnDiv'>
                    <h1>Clients</h1>
                  </div>
                </div>
				:				<div id='mainContainer'>
  <div className='columnDiv'>
  <h1>Contacts</h1>
					 </div>
				 </div>
        }
      </div>
    )
  }
}
export default Content
