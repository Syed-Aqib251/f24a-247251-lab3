let nums = [2, 5, 1];

function total(arr) {
    let s = 0;

    for (let i = 0; i < arr.length; i = i + 1) {
        s = s + arr[i];
    }

    return s;
}

function biggest(arr){
    let b = arr[0];

    for(let i=1; i<arr.length;i=i+1){
        if(arr[i]>b){
            b=arr[i];
        }
    }
    return b;
}

function above(arr){
    let n=0;
    for(let i=1;i<arr.length;i=i+1){
        if (arr[i]>arr[0]){
            n=n+1;
        }
    }
    return n;
}

console.log(total(nums));
console.log(biggest(nums));
console.log(above(nums));