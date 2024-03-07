//Use typeof to double check
function detectType(val: number | string) {
  if (typeof val === "string") return val.toLowerCase();
  return val + 3;
}

//Narrowing with IN operator
interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

//Verify if the attribute exists in the argument
function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

//instanceof
//Always when use the "new" keword, you can check the instanceof
const date = new Date();

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

//Type Predicates
type Fish = {
  swin: () => void;
};

type Bird = {
  fly: () => void;
};

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swin !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "bird food";
  }
}

//DISCRIMINATED UNION
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;

function getShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  //   return shape.side * shape.side; // Shows error, cause you've to provide an option to Rectangle too
}

//Avoid exhaustiveness check

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape;

    //This const with never is good to check if you really create a case for all options of the interface. They provide a warning
    default:
      const _exhaustive: never = shape;
      return _exhaustive;
  }
}
