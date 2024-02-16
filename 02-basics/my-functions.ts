function addTwo(num: number) {
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

export default {};
