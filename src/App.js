import React from "react";

import { Cards, Chart, CountryPicker } from "./components";

import styles from "./App.module.css";

import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const FethcedData = await fetchData();

    this.setState({ data: FethcedData });
  }

  handleChangeCountry = async (country) => {
    const FethcedData = await fetchData(country);

    this.setState({ data: FethcedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>COVID-19 Tracker App</h1>
        <CountryPicker handleChangeCountry={this.handleChangeCountry} />

        <Cards data={data} />

        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
