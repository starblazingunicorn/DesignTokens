const { readFileSync, writeFileSync } = require("fs");

// Color gloable
try {
  const data = readFileSync("./output.json", "utf8");
  const jsonData = JSON.parse(data);
  const colorLevel1 = jsonData["Color"];

  let dataTest = {
    Color: {
      primary: [],
      neutral: [],
      destructive: [],
    },
  };


  colorLevel1.forEach((color) => {
 
    const name = color.C;
    const value = color.D;
    const category = color.B.match(/\/\*(.*?)\*\//)[1].toLowerCase();

    if (dataTest.Color.hasOwnProperty(category)) {
      dataTest.Color[category].push({
        "name": name,
        "value": value,
      });
    }
  });
 

  const dataTestJson = JSON.stringify(dataTest, null, 2);

  writeFileSync("./globalsTokens.json", dataTestJson, "utf8");
  console.log("Output saved to globalsTokens.json file.");
} catch (error) {
  console.log("Failed!", error);
}
