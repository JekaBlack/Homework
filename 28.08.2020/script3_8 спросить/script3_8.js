/* С помощью цикла for с пустым телом сформируйте строку, представляющую из себя ряд Фибоначчи: 0 1 1 2 3 5 8 13... */

const fib2 = (n) => {
  let prev = 0,
    next = 1;
  let i = 0;
  for (; i < n; ) {
    i++;
    next = prev + next;
    prev = next - prev;
    console.log(prev);
  }
  return prev;
};
fib2(5);
