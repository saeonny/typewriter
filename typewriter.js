const sentence = "hello there from lighthouse labs\n";
let delay = 0;
for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 100;
}