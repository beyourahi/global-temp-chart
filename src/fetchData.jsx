import dataset from "./DATA.json";

//// variable declaration
let labels = { xLabels: [], yLabels: [] };

//// Loop through the dataset
//// extract "DATA" and "Global Temp"
dataset.forEach(data => {
    labels.xLabels.push(data.Year);
    labels.yLabels.push(parseFloat(data.Glob) + 14);
});

export default labels;
