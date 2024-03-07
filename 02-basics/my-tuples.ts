// const user: (string | number)[] = [1, "hc"];

let tupleUser: [string, number, boolean];

//The order matters
tupleUser = ["abc", 123, true];

let rgb: [number, number, number] = [255, 123, 456];

type TheUser = [number, string];

const newUser: TheUser = [123, "email@mail.com"];

newUser[1] = "other@mail.com";
