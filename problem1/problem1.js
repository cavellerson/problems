// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.


let array = [-1,0,3,5,9,12]
let number = 9
const search = (target, nums) => {
    if (nums.includes(target)) {
      return nums.indexOf(target)
  } else {
      return -1
  }
}

console.log(search(number, array));
