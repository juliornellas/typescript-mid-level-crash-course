//Great for restrict users choice

enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
}

const seat = SeatChoice.AISLE;

//Define start value. Number is automatic defined to the others
enum SeatChoice2 {
  AISLE = 13,
  MIDDLE, //14
  WINDOW, //15
}

const seat2 = SeatChoice2.AISLE;

//Define default value
enum SeatChoice3 {
  AISLE = 13,
  MIDDLE = 33,
  WINDOW, //34
}

const seat3 = SeatChoice3.AISLE;

//Define string value. It's needed for everyone
enum SeatChoice4 {
  AISLE = "AISLE",
  MIDDLE = "MIDDLE",
  WINDOW = "WINDOW",
}

const seat4 = SeatChoice4.AISLE;

//Define mixed values. If the last defined is a number the next will be the continuation of the previous number
enum SeatChoice5 {
  AISLE = "AISLE",
  MIDDLE = 13,
  WINDOW, //14
}

const seat5 = SeatChoice5.AISLE;

//To generate less javascript code. Just put "const" before enum.
const enum SeatChoice6 {
  AISLE = "AISLE",
  MIDDLE = 13,
  WINDOW, //14
}

const seat6 = SeatChoice6.AISLE;
