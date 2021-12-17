function comp(array1, array2){
  const firstArr = array1 === null ? [] : array1
  const secondArr = array2 === null ? [] : array2


  if (firstArr.length === secondArr.length && Array.isArray(array1) && Array.isArray(array2)) {
    const squaredArr = firstArr.map(x => x**2)

    let arr1 = squaredArr.sort((a,b) => a - b);
    let arr2 = secondArr.sort((a,b) => a - b);
    let newArr = [];

    let i = 0;

    while (i < arr1.length) {
      if (arr1[i] !== arr2[i]) {
        return false
      }
      i++;
    }
    return true
  }
  return false
}