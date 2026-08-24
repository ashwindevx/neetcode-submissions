class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hash = new Map();
        for (let i = 0; i < nums.length; i++) {
            let currNum = nums[i];
            let diffNum = target - currNum;
            if (hash.has(diffNum)) {
                return [i, hash.get(diffNum)]
            } 
            hash.set(nums[i], i)
        }
    }
}
