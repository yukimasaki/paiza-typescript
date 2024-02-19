export const binarySearch = (
  array: number[],
  searchArray: number[]
): string[] => {
  const size = array.length;
  let left = 0;
  let right = size - 1;

  const results = searchArray.map((searchKey) => {
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (array[mid] === searchKey) {
        return "Yes";
      } else if (array[mid] < searchKey) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return "No";
  });

  return results;
};
