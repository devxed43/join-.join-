let obj = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};

// entries on obj to be able to map/transform over each array
// join(" ") <-- the space is space between arrays
// array 1 is ["my" "name"]
// array 2 is ["is" "rudolf"]
// array 3 is ["the" "raindeer"]
// after mapping over each array with a space between key and value
// we join each array into one with a space between ==>
// [my name][is rudolf][the raindeer]

// ['my', 'name'] ['is', 'rudolf'] ['the', 'raindeer']-> 2 strings 3 arrays
// ['my name'] ['is rudolf'] ['the raindeer'] -> 1 string 3 arrays
//  my name is rudolf the raindeer -> 1 string 1 array
console.log(
  Object.entries(obj) // ['my', 'name'] ['is', 'rudolf'] ['the', 'raindeer']-> 2 strings 3 arrays
    .map((value) => value.join(" ")) // ['my name'] ['is rudolf'] ['the raindeer'] -> 1 string 3 arrays
    .join(" ") //  my name is rudolf the raindeer -> 1 string 1 array
);
