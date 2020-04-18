function expect(assertion, expected, unexpected) {
  if (assertion !== expected) {
    console.error('Expected value not equal.');
  }
  if (assertion === unexpected) {
    console.error('Unexpected value is equal?!');
  }
  console.log('this is:', this);
}

function test(name, testFn) {
  testFn(name);
}