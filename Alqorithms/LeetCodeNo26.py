# 26. Remove Duplicates from Sorted Array

def removeDuplicates(nums):
    # Check if the list is empty
    if len(nums) == 0:
        return 0
    # Define i as the index of the first element
    i = 0
    for j in range(1, len(nums)):
        # Check dublicated value
        if nums[j] != nums[i]:
            # increase i
            i += 1
            # Assign value in list
            nums[i] = nums[j]
    return i+1
