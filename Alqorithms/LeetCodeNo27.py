#  LeetCode No.27 Remove Element Algorithm
#  Version 1.0
def removeElementWidthPop(nums, val):
    i = 0
    # Dövr yaratmaq üçün i dəyişənini 0-dan başlatdım
    # i<len(nums) şərtini ona görə təyin etdim ki val dəyəri birdən çox ola bilər. Hər uyğun val dəyəri silindikdən sonra dövr normal davam edə bilsin
    while i < len(nums):
        # list daxilindəki dəyərin mənə lazım olan dəyər olub olmadığını yoxlayıram
        if nums[i] == val:
            nums.pop(i)
        else:
            # dövrün davam etməsini təmin edirəm
            i += 1
    return len(nums)
    
# Version 2.0

def  removeElementWithAppend(nums,val):
    requiredList = []
    for i in range(len(nums)):
        if nums[i] != val:
            requiredList.append(nums[i])
    
    return requiredList 
print(removeElementWithAppend([3,2,2,3],3))