/*
const dim = [20, 5];
const width1 = dim[0];
const height1 = dim[1];

const [width, height] = dim;
console.log(width);
console.log(height);
*/
const get = user => {
  const [fristName, LastName] = user;
  return `${fristName} ${LastName}`;
};
console.log(get(["AAA", "aaa"]));

const lat = [4125];
const lng = [7777];
const point = [...lat, ...lng];
console.log(point);

const items = ["Yissues", "orange"];

const otherArray = [...items, "AAAAA"];
console.log(otherArray);