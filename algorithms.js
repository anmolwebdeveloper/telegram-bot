export const algorithms = {
    binarysearch: `
const binarySearch = function search(arr, x) {
    let lo = 0, hi = arr.length - 1;
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if (arr[mid] == x) return mid;
        else if (arr[mid] < x) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
};
`,
    linearsearch: `
function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) return i;
    }
    return -1;
}
`,
    bubblesort: `
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
`,
    selectionsort: `
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min_idx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        let temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
`,
    insertionsort: `
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}
`,
    factorial: `
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
`,
    fibonacci: `
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
`,
    gcd: `
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}
`,
    prime: `
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
`,
    palindrome: `
function isPalindrome(str) {
    let cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let left = 0, right = cleanStr.length - 1;
    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) return false;
        left++;
        right--;
    }
    return true;
}
`,
    reverse: `
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
`
};
