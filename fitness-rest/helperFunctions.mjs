function isValidExerciseEntries(name, reps, weight, unit, date){
    if (name === "" || name === null){
        console.log('name failed to validate')
        return false
    }
    if (reps <= 0 || weight <= 0){
        console.log('reps or weight failed to validate')
        return false
    }
    if (unit === 'lbs' || unit === 'kg' || unit === 'miles'){        
        // console.log('unit is validate in isValidExercise function')
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




export {isValidExerciseEntries}