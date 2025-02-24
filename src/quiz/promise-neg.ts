type myPromise = (arr: number[]) => Promise<unknown>

const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

const myPromise: myPromise = (arr) =>   (
	new Promise ((resolve, reject) => {
		if (arr.filter(x => x < 0).length != 0) {
			resolve(arr)
		}
	})
)

Promise.any([ myPromise(array2D_3[0]), myPromise(array2D_3[1]), myPromise(array2D_3[2])])
       .then(response => {
       		console.log(response)
       })
       .catch(error => {
       		console.error(error)
       }) 