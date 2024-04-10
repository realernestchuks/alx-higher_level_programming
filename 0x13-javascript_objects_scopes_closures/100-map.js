#!/usr/bin/node
const initList = require('./100-data.js').list;
const newList = initList.map((number, index) => number * index);

console.log(initList);
console.log(newList);
