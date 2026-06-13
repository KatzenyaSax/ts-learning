function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if(n==0) return;

    let temp:number[] = [];
    let len1 = m, len2 = n;
    let ptr1=0, ptr2=0;

    while(ptr1<len1 && ptr2<len2){
        //console.log(ptr1, ptr2);
        if(nums1[ptr1] <= nums2[ptr2]) temp.push(nums1[ptr1++]);
        else temp.push(nums2[ptr2++]);
    }

    //console.log(ptr1, ptr2);

    if(ptr1>=len1 && ptr2<len2)while(ptr2<len2) temp.push(nums2[ptr2++]);
    

    if(ptr1<len1 && ptr2>=len2) while(ptr1<len1) temp.push(nums1[ptr1++]);

    for(let i=0; i<m+n; i++) nums1[i] = temp[i];
};

let nums1=[2,0];
let nums2=[1];

merge(nums1, 1, nums2, 1);
console.log(nums1);