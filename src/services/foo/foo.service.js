// @flow

const foo = (a: string, b: "a" | "b"): string => {
  return a + b;
};

export default foo;
