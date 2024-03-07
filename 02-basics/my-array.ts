const superHeros: string[] = [];
// const herosPower: number[] = [];
const herosPower: Array<number> = [];

type User = {
  name: string;
  isActive: boolean;
};

// const allUsers: User[] = [];
const allUsers: Array<User> = [];

//Array inside Array
const MLModels: number[][] = [];

superHeros.push("batman");
herosPower.push(3);

allUsers.push({ name: "Pele", isActive: false });
MLModels.push([123, 123, 123], [321, 321, 321]);
