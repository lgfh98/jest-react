const cities = [
  "Ciudad de México",
  "Bogotá",
  "Lima",
  "Buenos Aires",
  "Colombia",
];

const randomString = () => {
  const str = cities[Math.floor(Math.random() * (cities.length - 0) + 0)];
  return str;
};

const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("String vacio"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

module.exports = randomString;
