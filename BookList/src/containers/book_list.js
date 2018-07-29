import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  return { books: state.books };
}

// Anything returned by this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // When selectBook is called, result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - It nees to know about the dispatch method, selectBook.
// Make it availble as a prop.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
