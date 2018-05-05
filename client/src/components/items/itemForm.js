import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/index.css'

 export default class ItemForm extends Component {

  render() {
    return (
      <div>
       <h3 className='header'>add content</h3>
        <div className="Form">
          <form onSubmit={this.props.submitHandler}>
          {/* the Category selection */}
          <div className='formItem'>
            <label className='formItem'>Category:<br/>
              <select
                onChange={this.props.categoryHandler}
              >
                <option value="Webdesign">Webdesign</option>
                <option value="NodeJS">NodeJS</option>
                <option value="Database">Database</option>
                <option value="Architecture">Architecture</option>
              </select>
            </label>
            </div>
            <br/>

            {/* the difficulty selection */}
            <div>
            <label>difficulty:<br/>
              <select
                onChange={this.props.difficultyHandler}
              >
                <option value="easy">Easy</option>
                <option value="intermediate">Intermediate</option>
                <option value="hard">Hard</option>
              </select>
            </label>
            </div>

            {/* the link input */}
            <br/>
            <div className='formItem'>
            <label>Link: <br/>
            <input type='text' onChange={this.props.linkHandler}/>
            </label>
            </div>

            {/* the title input */}
            <br/>
            <div className='formItem'>
            <label>title:<br/>
              <input type='text'
                onChange={this.props.titleHandler}/>
            </label>
            </div>

            {/* the Description input */}
            <br/>
            <div className='formItem'>
            <label>Description:<br/>
            <textarea
              rows="4"
              cols="37"
              placeholder="Describe what you are linking to and why the link is worth visiting."
              onChange={this.props.descriptionHandler}
            >
            </textarea>
            </label>
            </div>

            <br/>
            <input type="submit" value="Submit"/>
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
  descriptionHandler : PropTypes.func

}
