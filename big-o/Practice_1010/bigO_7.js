function onlyElementsAtEvenIndex(array) {
  let newArray = Array(Math.ceil(array.length / 2)); // O(1/2)
  for (let i = 0; i < array.length; i++) //O(n)
  {
    if (i % 2 === 0) //O(2)
    {
      newArray[i / 2] = array[i]; // O(1)
    }
  }
  return newArray;
}

// O(n) Time complexity
// O(n) Space Complexity
