import React from 'react';
import ReactDom from 'react-dom';


export default React.createClass({
  render() {

    clearClickHandler() {
      this.goto('.clear')};

  

    return (
      <div>
        <header>
          <h1>Things Todo</h1>
        </header>
        <main>
          <form className="todo-add">
            <input type="text" name="title" placeholder="Add Something"/>
            <button><i className="fa fa-plus"></i></button>
          </form>
          <ul className="todo-list"></ul>
        </main>
        <footer>
          <button
            onClick={this.restart}
            className="clear">Clear Complete</button>
        </footer>
      </div>
    );
  }
});