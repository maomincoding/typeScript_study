function visitDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  descriptor.writable = true;
  console.log(descriptor);
};

class Test233 {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  @visitDecorator
  set name(name:string) {
    this._name = name;
  }
}

const test233 = new Test233("maomin");
test233.name = 'xqm';
console.log(test233.name);

