class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let numsMap = new Map();
        for (const num of nums) {
            if (numsMap.has(num)) {
                numsMap.set(num, numsMap.get(num) + 1);
            } else {
                numsMap.set(num, 1)
            }
        }
        let numsMapArr = [...numsMap].sort((a, b) => {
            return b[1] - a[1];
        }).slice(0, k).map((key, value) => {
            return key[0];
        });
        return numsMapArr;
    };
}
