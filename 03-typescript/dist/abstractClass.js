"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //Do things
        return 13;
    }
}
//Abstract class are made to be consumed by other classes, not directly be calling in the code
// const user13 = new TakePhoto("front", "sun");
class Instagram2 extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
    getReelTime() {
        return 81;
    }
}
const user13 = new Instagram2("front", "sun", 3);
