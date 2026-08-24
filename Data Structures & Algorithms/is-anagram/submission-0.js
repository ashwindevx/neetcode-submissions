class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sArr = s.split('');
        const tArr = t.split('');
        if (sArr.length !== tArr.length) {
            return false;
        }
        const sMap = new Map();
        const tMap = new Map();
        for (let i = 0; i < sArr.length; i++) {
            const currS = sMap.get(sArr[i]) || 0;
            const currT = tMap.get(tArr[i]) || 0;
            sMap.set(sArr[i], currS + 1)
            tMap.set(tArr[i], currT + 1)
        }
        for (const [letter, count] of sMap) {
            if (tMap.get(letter) !== count) {
                return false;
            }
        }
        return true;
    }
}
