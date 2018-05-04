import React, { Component } from 'react';
import PropTypes from 'prop-types';


 export default class ItemForm extends Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.submitHandler}>
        {/* the Category selection */}
          <label>Category<br/>
            <select
              onChange={this.props.categoryHandler}
            >
              <option value="Webdesign">Webdesign</option>
              <option value="NodeJS">NodeJS</option>
              <option value="Database">Database</option>
              <option value="Architecture">Architecture</option>
            </select>
          </label>
          <br/>

          {/* the difficulty selection */}
          <label>difficulty<br/>
            <select
              onChange={this.props.difficultyHandler}
            >
              <option value="easy">Easy</option>
              <option value="intermediate">Intermediate</option>
              <option value="hard">Hard</option>
            </select>
          </label>

          {/* the link input */}
          <br/>
          <label>Link: <input type='text' onChange={this.props.linkHandler}/></label>

          {/* the title input */}
          <br/>
          <label>title:
            <input type='text'
              onChange={this.props.titleHandler}/>
          </label>

          <br/>
          <label>Description:
          <textarea
            rows="4"
            cols="37"
            placeholder="Describe what you are linking to and why the link is worth visiting."
            onChange={this.props.descriptionHandler}
          >
          </textarea>
          </label>

          <br/>
          <input type="submit" value="Submit"/>
        </form>
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
