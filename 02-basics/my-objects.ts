// const User = {
//   name: "Pele",
//   email: "pele@soccer.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// createUser({ name: "pele", isPaid: false });

// function createCourse(): { name: string; price: number } {
//   return {
//     name: "vue js",
//     price: 123,
//   };
// }

//Type Aliases
// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
// function createUser({ name, email, isActive }: User): User {
//   //   return { name: user.name, email: user.email, isActive: user.isActive };
//   return { name, email, isActive };
// }

// createUser({ name: "Pele", email: "pele@mail.com", isActive: false });

type User = {
  readonly _id: string; //Readonly
  name: string;
  email: string;
  isActive: boolean;
  creditCard?: number; //Optional
};

let user: User = {
  _id: "abc123",
  name: "Pele",
  email: "pele@mail.com",
  isActive: false,
};

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

//Combine
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

user.email = "pele@soccer.com";
// user._id = "123abc";
