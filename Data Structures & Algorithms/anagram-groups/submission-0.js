class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groupsByKey = new Map();

        for (const currStr of strs) {
            // sort the strings
            const sortedStr = [...currStr].sort().join('');
            
            if (!groupsByKey.has(sortedStr)) {
                groupsByKey.set(sortedStr, []);
            }
            groupsByKey.get(sortedStr).push(currStr);
        }

        return [...groupsByKey.values()]
    }
}
