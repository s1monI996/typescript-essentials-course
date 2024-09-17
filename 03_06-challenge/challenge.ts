type MyType = string | false | (string | number)[]

export function Challenge() {
  let foo: MyType = "Hello!";
  foo = false;
  foo = ["test", 100];
}
