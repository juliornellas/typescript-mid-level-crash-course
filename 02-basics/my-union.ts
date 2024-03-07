let grade: number | string = 8;
grade = 7.5;
grade = "A";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

//Extends User
// type Admin = User & {
//   username: string;
//   id: number;
// }

let pele: User | Admin = { name: "pele", id: 10 };
pele = { username: "Edson", id: 10 };

function getDbId(id: number | string) {
  typeof id === "string" && id.toLowerCase();
  console.log(`DB Id is: ${id}`);
}

getDbId(10);
getDbId("ABC");

//Array
const data: number[] = [1, 2, 3];
const data2: string[] | number[] = ["1", "2", "3"];
const data4: Array<string | number> = ["1", "2", "3"];
const data5: Array<string | number> = [1, 2, 3];
const data6: (string | number | boolean)[] = [1, "2", true];
const data7: any[] = [1, "2", true]; //Avoid to use ANY

//Fixed types assignment value
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew";

/**
 * The only difference between Types and Interfaces is that types cannot be re-opened to add new properties vs an interface which is alwas extendable.
 */
