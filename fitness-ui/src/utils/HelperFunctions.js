function formatDate(date) {
    // Input: 2022-09-19
    // Output: 9/19/2022
    const string = String(date);
    const year = string.slice(0, 4);
    const month = string.slice(6, 7);
    const day = string.slice(8, 10);
    const result = `${month}/${day}/${year}`;
    return result;
  }


  export {formatDate}