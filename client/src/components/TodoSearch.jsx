import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class TodoSearch extends Component {
  render() {
    let { dispatch, showCompleted, searchText } = this.props;

    return (
      <div>
        <div>
          <input
            type="search"
            ref="searchText"
            placeholder="Search todos"
            value={searchText}
            onChange={() => {
              var searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText));
            }}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              ref="showCompleted"
              checked={showCompleted}
              onChange={() => {
                dispatch(actions.toggleShowCompleted());
              }}
            />
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
}

export default connect()(TodoSearch);
