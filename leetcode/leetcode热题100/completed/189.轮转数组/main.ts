/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {

    if(nums.length < k){
        k = k % nums.length;
    }



    let last : number[] = [];

    for(let i = nums.length - k ; i <nums.length; i++){
        last.push(nums[i]);
    }

    for(let i = nums.length -1; i >= k; i--){
        nums[i] = nums[i-k];
    }

    for(let i = 0; i < k; i ++){
        nums[i] = last[i];
    }

    console.log(nums);


};


function rotate2(nums: number[], k: number): void {

    if(nums.length < k){
        k = k % nums.length;
    }

    for(let i = 0; i < nums.length/2; i++){
        let temp = nums[nums.length -1 -i ];
        nums[nums.length -1 -i] = nums[i];
        nums[i] = temp;
    }

    console.log(nums);

    for(let i = 0; i < k/2; i++){
        let temp = nums[k -1 -i];
        nums[k -1 -i] = nums[i];
        nums[i] = temp;
    }
    console.log(nums);

    for(let i = k; i< (k + nums.length -1)/2; i++){
        let temp = nums[k+nums.length -1 -i];
        nums[k+nums.length -1 -i] = nums[i];
        nums[i] = temp;
    }




    console.log(nums);



}

//rotate([1,2], 1);
//rotate([1,2], 2);

//rotate2([1,2,3,4,5,6,7], 3);
rotate2([-1,-100,3,99], 2);