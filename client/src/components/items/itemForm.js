import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/index.css'
import {Link} from 'react-router-dom';
import Selectbutton from './selectButton.js'


 export default class ItemForm extends Component {

  render() {
    return (
      <div>
        <div className="Form">
          <form onSubmit={this.props.submitHandler}>
          {/* the Category selection */}
            <Selectbutton
              changeHandler={this.props.categoryHandler}
              inputName='category' name='category' value={['Webdesign', 'NodeJS', 'Database','Git', 'Architecture']}
             />
            {/* the type selection */}

              <Selectbutton className='bla'
                changeHandler={this.props.typeHandler}
                inputName='type' name='type' value={['video', 'article', 'other']}
               />
            {/* the difficulty selection */}

            <Selectbutton
              changeHandler={this.props.difficultyHandler}
              inputName='difficulty' name='difficulty' value={['Amateur', 'World Class', 'Legendary']}
             />
            {/* the link input */}

            <div>
            <label>title:<br/>
              <input type='text'
              name='title' className='formItem'
                onChange={this.props.titleHandler} required
                />
            </label>
            </div>
            {/* the title input */}

            <div>
            <label>Link: <br/>
            <input className='formItem'  name='link' type='text' onChange={this.props.linkHandler} required/>
            </label>
            </div>
            {/* the Description input */}
            <div>
            <label>Description:<br/>
            <textarea className='formItem'
              name='description'
              rows="4"
              cols="37"
              placeholder="Describe what you are linking to and why the link is worth visiting."
              onChange={this.props.descriptionHandler}
              required
            >
            </textarea>
            </label>
            </div>
            {/*the submit button*/}
            <input className='formItem btn btn-success btn-form-submit' type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    );
  }
}

ItemForm.proptypes={
  submitHandler : PropTypes.func.isRequired,
  categoryHandler : PropTypes.func.isRequired,
  difficultyHandler : PropTypes.func.isRequired,
  linkHandler : PropTypes.func.isRequired,
  titleHandler : PropTypes.func.isRequired,
  descriptionHandler : PropTypes.func.isRequired,
  typeHandler:PropTypes.func.isRequired

}

// <Link to='/categories'>
// <input type="button" value='view content'/>
// </Link>
