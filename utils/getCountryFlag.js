const axios = require("axios");
const getCountryCode = async (city) => {
  const { data } = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${process.env.GEOCODING_API_KEY}`
  );
  let code = data.results[0].components.country_code;
  const country = data.results[0].components.country;
  return { flag: `https://flagcdn.com/48x36/${code}.png`, country };
};
module.exports = getCountryCode;
