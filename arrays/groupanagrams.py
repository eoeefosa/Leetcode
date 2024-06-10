# class solution:
#     def groupAnagrams(self, strs: list[str])-> list[list[str]]:
#         res= defaultdict(list) #mapping charCount to list of Anagrams
#         for s in strs:
#             count = [0] * 26 # a ...z
#             for c in s:
#                 count[ord(c)-ord("a")]+=1
#             res[tuple(count)].append(s)
#         return res.values()

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        ans = defaultdict(list)

        for s in strs:
            count = [0] * 26
            for c in s:
                count[ord(c) - ord("a")] += 1
            ans[tuple(count)].append(s)
        return ans.values()

    
print(solution.groupAnagrams("yu",["ate", "aar","aer","ara","eat"]))