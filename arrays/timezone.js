function getTimeInCountry(timeZone) {
  const now = new Date();
  const options = {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const formatter = new Intl.DateTimeFormat([], options);
  return formatter.format(now);
}

// Example usage
const countries = {
  // "United States (New York)": "America/New_York",
  // "United States (Los Angeles)": "America/Los_Angeles",
  // India: "Asia/Kolkata",
  // Japan: "Asia/Tokyo",
  // "Australia (Sydney)": "Australia/Sydney",
  // "United Kingdom": "Europe/London",
  // Germany: "Europe/Berlin",
  // "Brazil (São Paulo)": "America/Sao_Paulo",
  // "South Africa": "Africa/Johannesburg",
  // China: "Asia/Shanghai",
  Spain: "Europe/Madrid",
};

Object.keys(countries).forEach((country) => {
  const timeZone = countries[country];
  const time = getTimeInCountry(timeZone);
  console.log(`Current time in ${country}: ${time}`);
});
