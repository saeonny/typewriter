const spinners = ['\r|   ', '\r/   ','\r-   ','\r\\   ', '\r|   ' ,'\r/   ','\r-   ','\r|   '];
let time = 100;
for (let spin of spinners) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, time);
  time += 200;
}
