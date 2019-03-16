import React, { Component } from "react";

class Test extends Component {
  state = {
    id: "",
    title: "",
    body: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(data =>
        this.setState({
          id: data.id,
          title: data.title,
          body: data.body
        })
      );
  }
  //   componentWillMount() {
  //     console.log("componentWillMount...");
  //   }

  //   componentDidUpdate() {
  //     console.log("componentDidUpdate...");
  //   }

  //   componentWillUpdate() {
  //     console.log("componentWillUpdate...");
  //   }

  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log("componentWillReceiveProps");
  //   }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     return null;
  //   }

  //   static getSnapshotBeforeUpdate(prevProps, prevState) {
  //     return null;
  //   }

  render() {
    const { id, title, body } = this.state;
    return (
      <div>
        <ul type="none">
          <li>{id}</li>
          <li>{title}</li>
          <li>{body}</li>
        </ul>
      </div>
    );
  }
}

export default Test;
