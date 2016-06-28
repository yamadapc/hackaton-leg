const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const superagent = require('superagent');

const countries = require('./countries.json');

mkdirp.sync(path.join(__dirname, 'countries'));

countries.forEach((country) => {
  const countryName = country.name + ' ' + country.code;
  country.legislatures.forEach((leg) => {
    const legName = countryName + ' - ' + leg.name;
    console.log('Downloading', legName, '...');
    superagent.get(leg.popolo_url).end((err, res) => {
      if(err) throw err;
      console.log('Downloaded', legName);
      fs.writeFileSync(path.join(__dirname, 'countries', legName + '.json'), res.text);
    });
  });
});
