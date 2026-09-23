// Assignment Details:
// Given the array, const nums = [2, 4, 7, 8, 11, 14];
// const target = 18;
// return the indices that have matching targets >> 7+11 (2, 4), 4+14 (1, 5)


const nums = [2, 4, 7, 8, 11, 14];
const target = 18;
 

function twoSum(){
let results =[] //Initialize an empty array `results`
    for(let i =0; i<nums.length; i++)
    {
      for(let j=i+1;j<nums.length;j++)
        {
            if(nums[i]+nums[j]===target)
            results.push([i,j])

        }  
    }
        return results
}
console.log(twoSum())