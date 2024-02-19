import { binarySearch } from "./binary_search";
import { input, toArray } from "./common/input";

const main = (() => {
  const inputs = toArray(input(), "\n");

  const arrayA = inputs[1].split(" ").map((str) => parseInt(str));
  const arrayK = inputs[3].split(" ").map((str) => parseInt(str));

  const results = binarySearch(arrayA, arrayK);
  results.map((result) => console.log(result));
})();
