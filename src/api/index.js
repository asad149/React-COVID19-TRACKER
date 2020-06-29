import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeAbleurl = url;

  if (country) {
    changeAbleurl = `${url}/countries/${country}`;
  }

  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = await axios.get(changeAbleurl);

  return {
    confirmed,
    recovered,
    deaths,
    lastUpdate,
  };
};

export const fetchDailyData = async () => {
  const { data } = await axios.get(`${url}/daily`);

  return data.map(({ confirmed, deaths, reportDate: date }) => ({
    confirmed: confirmed.total,
    deaths: deaths.total,
    date,
  }));
};

export const fetchCountries = async () => {
  const {
    data: { countries },
  } = await axios.get(`${url}/countries`);

  return countries.map((country) => country.name);
};
