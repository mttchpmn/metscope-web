import { observable, computed, action, decorate } from "mobx";

class TestStore {
  colors = ["blue", "red"];
  flipFlop = true;

  addColor(col) {
    this.colors.push(col);
  }

  switch() {
    this.flipFlop = !this.flipFlop;
  }
}

decorate(TestStore, {
  colors: observable,
  flipFlop: observable,
  addColor: action.bound,
  switch: action.bound
});

export default TestStore;
