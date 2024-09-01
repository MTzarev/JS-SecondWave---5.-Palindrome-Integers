function palindrom(arr) {
    let nums = arr.toString().split(`,`);
    let isPalindrom = true;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let reversedNum = num.split(``).reverse().join(``)
        if (num === reversedNum) {
            isPalindrom = true;
        } else {
            isPalindrom = false;
        }
        console.log(isPalindrom);
    }
}
palindrom([32, 2, 232, 1010]);
