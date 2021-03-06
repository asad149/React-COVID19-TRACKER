import React, { useState, useEffect } from "react";

import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleChangeCountry }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const FetchApi = async () => {
      setCountries(await fetchCountries());
    };
    FetchApi();
  }, []);

  return (
    <div>
      <FormControl>
        <NativeSelect
          className={styles.formControl}
          defaultValue=""
          onChange={(e) => handleChangeCountry(e.target.value)}
        >
          <option value="">Global</option>
          {countries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
