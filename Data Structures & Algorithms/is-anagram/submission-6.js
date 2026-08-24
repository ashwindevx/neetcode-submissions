class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let sMap = new Map();
        let tMap = new Map();

        for (const char of s) {
            sMap.set(char, (sMap.get(char) ?? 0) + 1);
        }

        for (const char of t) {
            tMap.set(char, (tMap.get(char) ?? 0) + 1);
        }

        for (const [char, count] of sMap) {
            if (tMap.get(char) !== count) return false;
        } 
        return true;
    }
}
