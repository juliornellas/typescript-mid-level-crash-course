interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

//Re-open interface and inject new values
interface User {
  githubToken: string;
}

//Inheritance
// interface Admin extends User, AnotherInterface, AndAnotherInterface {
interface Admin extends User {
  // role: string
  role: "admin" | "editor" | "publisher";
}

// const user: User = {
const user: Admin = {
  dbId: 13,
  githubToken: "githubtoken",
  userId: 123,
  role: "admin",
  email: "mail@mail.com",
  startTrail() {
    // return 1;
    return "trail started";
  },
  getCoupon(name: "free10", off: 10) {
    return off;
  },
};

/**
 * The only difference between Types and Interfaces is that types cannot be re-opened to add new properties vs an interface which is alwas extendable.
 */
