// function expect(assertion, expected, unexpected) {
//   if (assertion !== expected) {
//     console.error('Expected value not equal.');
//   }
//   if (assertion === unexpected) {
//     console.error('Unexpected value is equal?!');
//   }
//   // console.log('this is:', this);
// }

function test(name, testFn) {
  testFn(name);
}

function expect(assertValue) {
  return {
      toBeNull: function() {
        if (assertValue !== null) {
          console.error(`Value ${assertValue} is not null!`);
        }
        return { not: this.not };
      },
      toBeEqualTo: function (testValue) {
        if (assertValue !== testValue) {
          console.error(`Value ${assertValue} (${typeof assertValue}) is not equal to ${testValue} (${typeof testValue})!`);
        }
        return { not: this.not };
      },
      not: function (notValue) {
        if (assertValue === notValue) {
          console.error(`Expect test fails not check. Test always passes?`);
        }
        return { not: this.not };
      }
  }
}