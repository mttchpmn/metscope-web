const list = require("./aerodromeLookup");
const fs = require("fs");
const result = {};

for (const aeroCode of Object.keys(list)) {
  result[aeroCode] = {
    name: list[aeroCode],
    area: "AREA"
  };
}

fs.writeFileSync("./aerodromes.js", JSON.stringify(result));
