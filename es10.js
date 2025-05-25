// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1], [2], [3], [[[4]]], [[[5]]]];

// flatten nested array by 2 layers
console.log(array.flat(2));

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast!"],
];

// ========== edit the strings inside multiple arrays ==========
greeting.flatMap((x) => x.join(" "));

// ========== multiple arrays -> one string ==========
greeting.flatMap((x) => x.join(" ")).join(" ");

// ========== flatten by 100 layers ==============
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(100));

// ========== trim space at start ================
const userEmail3 = "     cannotfillemailformcorrectly@gmail.com   ";
console.log(userEmail3.trimStart());

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 };
console.log(Object.entries(users))

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

console.log(Object.entries(users).map((user) => {
    return ("id doubled:" + " " + user[1]  * 2)
}))


//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }

// // Solve the below questions:

// // #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
// const array = [[1],[2],[3],[[[4]]],[[[5]]]]
// //Solution:
// console.log(array.flat(2))

// // #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
// //Solution:
// console.log(greeting.flatMap(x => x.join(' ')))

// //#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
// //Solution
// console.log(greeting.flatMap(x => x.join(' ')).join(' '))

// //#4 Turn the trapped 3 number into: [3]
// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
// //Solution
// console.log(trapped.flat(Infinity))
// // Infintiy is actually a LARGE number in JavaScipt. It represents the maximum amount of memory that we can hold for a number! Learn more here: https://riptutorial.com/javascript/example/2337/infinity-and--infinity

// //#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
// const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
// //Solution:
// console.log(userEmail3.trimEnd().trimStart())

// //#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// const users = { user1: 18273, user2: 92833, user3: 90315 }
// //Solution
// const usersArray = Object.entries(users)

// //#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
// //Solution
// updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2])

// //#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
// //Solution
// const updatedUsers = Object.fromEntries(updatedUsersArray)
// console.log(updatedUsers)
