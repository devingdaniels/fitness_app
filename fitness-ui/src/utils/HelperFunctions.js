

function isValidExerciseEntries(name, reps, weight, unit, date){
    if (name === "" || name === null){
        console.log('name failed to validate')
        return false
    }
    if (reps <= 0 || weight <= 0){
        console.log('reps or weight failed to validate')
        return false
    }
    if (unit === 'lbs' || unit === 'kg' || unit === 'miles' || unit === 'meters'){        
        // do nothing
    }else {
        console.log('unit failed to validate')
        return false
    }
    if (date === ''){
        console.log('date failed to validate')
        return false
    }
    return true
}


function formatDate(date) {
  // Input: 2022-10-18
  // Output: 10/18/2022
  const string = String(date);
  const year = string.slice(0, 4);
  const month = string.slice(5, 7);
  const day = string.slice(8, 10);
  const result = `${month}-${day}-${year}`;
  return result;
}

  export { isValidExerciseEntries, formatDate}