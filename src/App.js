import React from "react";
import unsplash from "./API/unsplash";
import SearchBar from "./components/SearchBar";
import Images from "./components/Images";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  onSearchSubmit = async (term) => {
    const res = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: res.data.results });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <Images images={this.state.images} />
      </div>
    );
  }
}

export default App;
