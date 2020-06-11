var chocolateBars= ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  array= [element, ...array]
  return addElementToBeginningOfArray()
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return destructivelyAddElementToBeginningOfArray ()
}
