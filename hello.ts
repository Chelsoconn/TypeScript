type Pair<T, U> = {
  first: T;
  second: U;
};

const myPair: Pair<number, string> = {
  first: 42,
  second: "Answer",
};

// const yourPair: Pair<number, string> = {
//   first: "Another answer",
//   second: 42,
// };