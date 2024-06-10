const count = Array(26).fill(0);

for (const s of "abca") {
  count[s.charCodeAt(0) - "a".charCodeAt(0)]++;
}
const key = count.join("#");
console.log(key);
