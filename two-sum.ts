function twoSum(arr: number[], sum: number) {
  const cache: { [key: number]: number } = {};
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    const pair = sum - cur;
    if (cache[pair]) return [cache[pair], cur];
    cache[cur] = cur;
  }
}

console.log(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
