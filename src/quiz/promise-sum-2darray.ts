const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const p = Promise.resolve(array2D_1[0]).then(v => v.reduce((a, b)=> a+ b))
const m = Promise.resolve(array2D_1[1]).then(v => v.reduce((a, b)=> a+ b))
const n = Promise.resolve(array2D_1[2]).then(v => v.reduce((a, b)=> a+ b))

Promise.all([p, m, n]).then(v => {
	console.log(v.reduce((a,b) => a + b))
})