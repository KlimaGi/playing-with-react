class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleShow = this.toggleShow.bind(this);
    this.state = {
      visibility: false,
    };
  }

  toggleShow() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Title</h1>
        <button onClick={this.toggleShow}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Every step matter. With the time value. Step by step.</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
