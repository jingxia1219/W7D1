import React from 'react';
import uniqueId from '../../util/uniq_id';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: "", body: "", done: false };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value});
  }
  handleBodyChange(e) {
    this.setState({body: e.target.value});
  }

  handleClick(e) {

    e.preventDefault();
    const  todo  = Object.assign({}, this.state, {id: uniqueId()});
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body:""
    });
  }

  render () {
    const title = this.state.title;
    return (
    <div>
      <form onSubmit={this.handleClick}>
      <label>Title:
        <input value={title} onChange={this.handleTitleChange}  placeholder="buy milk..." />
      </label>
      <br/>
      <br/>
      <label>Body:
        <textarea value={this.state.body} onChange={this.handleBodyChange}  placeholder="2%...." />
      </label>
      <button>Create todo!</button>
      </form>
    </div>
    );
  }
}

export default TodoForm;
