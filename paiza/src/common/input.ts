import { readFileSync } from "fs";

export const input = () => {
  return readFileSync("/dev/stdin", "utf8");
};

export const toArray = (input: string, split: string): string[] => {
  const array = input.split(split);
  return array;
};
