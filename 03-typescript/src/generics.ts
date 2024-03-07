const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(value: boolean | number): boolean | number {
  return value;
}

function identityTwo(value: any): any {
  return value;
}

//Angular brackets <>
function identityThree<Type>(value: Type): Type {
  return value;
}

// identityThree(13);
// identityThree("13");
// identityThree(true);

//Shortcut
function identityFour<T>(value: T): T {
  return value;
}

//Shortcut can be any letter
function identityFive<J>(value: J): J {
  return value;
}

identityFive(13);

interface Bootle {
  brand: string;
  type: number;
}

identityFive<Bootle>({ brand: "Soccer", type: 500 });

function getSearchProducts<T>(products: T[]): T {
  const index = 3;
  return products[index];
}

//Arrow function
const searchMoreProducts = <T>(products: T[]): T => {
  const index = 13;
  return products[index];
};

//This comma <T,> is just to say that is not a html tag or a jsx syntax. It's a generic one
const searchMoreProductsTwo = <T>(products: T[]): T => {
  const index = 13;
  return products[index];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

// function anotherFunction<T, U extends number>(
function anotherFunction<T, U extends Database>(
  valueOne: T,
  valueTwo: U
): object {
  return {
    valueOne,
    valueTwo,
  };
}

// anotherFunction(3, 4.1);
anotherFunction(3, {
  connection: "1234",
  username: "user13",
  password: "123456",
});

//Class
interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
