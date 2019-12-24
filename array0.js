//creation

var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ]
 
 //non-mutate add element to beginning
function addElementToBeginningOfArray(array, element) {
 return [element, ...array]
  
}

//mutate add element ot beginngin
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

//non-mutate add element to end
function addEleemntToEndOfArray(array, element) {
  return[...array, element]
}

//mutate add element to end
function destructiveAddEleemntToEndOfArray(array, element){
  array.push(element)
  return array
}

//accessing element in position 2 = #3
function accessElementInArray(array, index) {
  return(index[2])
}

//mutate remove element from beginning
function destructivelyRemoveelementFromBeginningOfArray(array) {
  array.shift()
  return array
}

//non-mutate remove element form beginning of array
function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.slice(1)
}

//mutate remove an element form the end of an array
function destructivelyRemoveEelementFromEndOfArray(array) {
  array.pop()
  return array
  }
  
//non-mutate remove element form end of array
  function removeElementFromEndOfArray(array) {
    return array.slice(0, array.length - 1)
  }


