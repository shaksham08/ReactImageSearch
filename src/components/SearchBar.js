import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSearchSubmit(this.state.search);
  };
  render() {
    return (
      <div className="ui segment">
        <form action="" className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="imagesearch">Search Image</label>
            <input
              value={this.state.search}
              id="imagesearch"
              type="text"
              placeholder="Search..."
              onChange={(evt) => this.setState({ search: evt.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
