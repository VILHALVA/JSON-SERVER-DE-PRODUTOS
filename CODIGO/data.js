const fs = require('fs');

const generateData = () => {
  const data = { products: [] };
  for (let i = 0; i < 1000; i++) {
    data.products.push({ id: i, title: `product${i}` });
  }
  return data;
};

const data = generateData();

fs.writeFile('db.json', JSON.stringify(data, null, 2), (err) => {
  if (err) throw err;
  console.log('db.json has been generated with random data!');
});
