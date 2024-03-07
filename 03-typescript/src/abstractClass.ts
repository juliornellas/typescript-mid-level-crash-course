abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    //Do things
    return 13;
  }
}

//Abstract class are made to be consumed by other classes, not directly be calling in the code
// const user13 = new TakePhoto("front", "sun");

class Instagram2 extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }

  getReelTime(): number {
    return 81;
  }
}
const user13 = new Instagram2("front", "sun", 3);
