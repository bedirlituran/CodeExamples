#  LeetCode No.27 Remove Element Algorithm

def removeElement(nums, val):
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
    
    
   