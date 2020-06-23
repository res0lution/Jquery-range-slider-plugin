export interface Foo {
  executeDependency: Function;
}

export class SliderLibrary implements Foo {
  executeDependency() {
    return Math.floor(Math.random() * 10 + 1);
  }
}

export default SliderLibrary;
