//---- 1) use this file for pulling 3rd party api -----
//---- 2) change filename getXample.js  to get('newName'), then delete this comment-----
//---- 3) ctrl+H change field xample to newName. then delete this comment --------------------

// ------  import axios & fs -----
const axios = require("axios");
const fs = require("fs");


const baseURL = "replace me with real third party url";
const reqLimit = "replace me if API allows controlled fetch limit";
const randomKey = [];

for (let i = 0; i < reqLimit.length; i++) {
  let keyGenerator = Math.floor(Math.random() * 10000);
  randomKey.push(keyGenerator);
}

// Execute API --> returns stringified JSON
const getData = async () => {
  let data = newData.map((id) => {
    `${BaseUrl}${id}`.map((url) => axios.get(url));
  });

  Promise.all(await data)
    .then((success) => {
         let dataStorage = await success.map((res) => res.data);
         let dataJSON = JSON.stringify(dataStorage);
         fs.writeFile(__dirname + "/xample.json", dataJSON, "utf8", (err) => {
           if (err) {
             console.error(err);
           } else {
             console.log(
               `successfully wrote ${dataStorage.length} records to db/xample.json`
             );
           }
        });
    })
    .catch((err) => {
        console.error(err);
        console.error
        ("there was an error with the API, try again later.");
  });
};
