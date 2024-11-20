var checkPossibility = function(nums) {
    let changes = 0
    for(let i=0; i < nums.length - 1 && changes < 2; i++){
        if(nums[i] > nums[i+1]) {
            changes++

            if(i === 0 || nums[i+1] >= nums[i-1]){
                nums[i] = nums[i+1]
            } else {
                nums[i+1] = nums[i]
            }
        }
    }
    return changes < 2
};