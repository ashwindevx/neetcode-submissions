class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let numsMap = new Map();
        let bucket = Array.from({ length: nums.length + 1 }, () => []); // creates empty arrays
        let result = [];

        for (let num of nums) {
            if (!numsMap.has(num)) {
                numsMap.set(num, 1);
            } else {
                numsMap.set(num, numsMap.get(num) + 1);
            }
        }

        for (const [key, count] of numsMap) {
            bucket[count].push(key);
        }

        for (let i = bucket.length - 1; i >= 0; i--) {
            for (let j = 0; j < bucket[i].length; j++) {
                if (result.length !== k) {
                    result.push(bucket[i][j]);
                }
            }
        }
        return result;
    }
}
