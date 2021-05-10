import React, { Component } from "react";
import Cards from "./Cards";
class Sheets extends Component {
  _isMounted = false;
  _isRefreshed = false;
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      error: null,
    };
    this.updateData = this.updateData.bind(this);
    this.fetchAndConvert = this.fetchAndConvert.bind(this);
  }

  fetchAndConvert() {
    const Papa = require("papaparse");
    const dataFilePath =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSVEuqJsQdYS4LQECD1w6FT0Ij7NjfJMaqV8qTzMjRFgRmmtj8v-9BHmQkfH4qegXBVKe7utJnbkNAR/pub?output=csv";
    Papa.parse(dataFilePath, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: this.updateData,
    });
  }
  updateData(result) {
    const data = result.data;
    const mapData = data;
    if (this._isMounted) {
      this.setState({
        data: mapData,
        isLoading: false,
        error: false,
      });
    } //tried to add an _isRefreshed condition, not working?
    else if (this._isMounted && this._isRefreshed === false) {
      this.setState({
        data: mapData,
        isLoading: false,
        error: false,
      });
    }
  }
  componentDidMount() {
    this._isMounted = true;
    this.fetchAndConvert();
    this._isRefreshed = true;
    setInterval(this.fetchAndConvert, 30000);
  }

  componentWillUnmount() {
    this._isMounted = false;
    this._isRefreshed = false;
  }

  renderLoading() {
    return <div> "loading..."" </div>;
  }
  renderError() {
    return <div> Error... </div>;
  }
  renderMap() {
    return (
      <div>
        <Cards data={this.state.data} />
      </div>
    );
  }
  render() {
    if (this.state.loading) {
      return this.renderLoading();
    } else if (this.state.data.length > 0) {
      return this.renderMap();
    } else {
      return this.renderError();
    }
  }
}

export default Sheets;
