//class
export default class MyLogger {
  constructor(props) {
    this.lectures = ["java", "IOS"];
  }
  getLectures() {
    return this.lectures;
  }
  getHour() {
    return new Date().getHours();
  }
  getTime() {
    return Date.now();
  }
}
