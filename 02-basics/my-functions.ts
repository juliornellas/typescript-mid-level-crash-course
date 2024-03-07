function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

addTwo(7);
getUpper("pele");
signUpUser("pele", "pele@sfc.com", true);
loginUser("pele", "pele@sfc.com");

function getValue(myVal: number): string | boolean {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}

const hello = (message: string): string => {
  return message;
};

//Automatic detection
const heros = ["batman", "hulk", "spiderman"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
  return `The hero is ${hero}`;
});

function consoleError(errormessage: string): void {
  console.log(errormessage);
}

//Never is similar to void, but the function throws an exception or terminates execution of the program
function handleError(errormessage: string): never {
  throw new Error(errormessage);
}

export default {};
