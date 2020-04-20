function test(name, testFn) {
  testFn(name);
}

function expect(assertValue) {
  return {
      toBeNull: function() {
        if (assertValue !== null) {
          console.error(`Value ${assertValue} is not null!`);
        }
        return this;
      },
      toBeUndefined: function() {
        if (assertValue !== undefined) {
          console.error(`Value ${assertValue} is not undefined!`);
        }
        return this;
      },
      toBeDefined: function() {
        if (assertValue === undefined) {
          console.error(`Value ${assertValue} is undefined!`);
        }
        return this;
      },
      toBeEqualTo: function (testValue) {
        if (assertValue !== testValue) {
          console.error(`Value ${assertValue} (${typeof assertValue}) is not equal to ${testValue} (${typeof testValue})!`);
        }
        return this;
      },
      not: function (notValue) {
        if (assertValue === notValue) {
          console.error(`Expect test fails not check. Test always passes?`);
        }
        return this;
      }
  }
}


// function expect(assertion, expected, unexpected, testName) {
//   const errs = [];
//   if (expected === unexpected) {
//     errs.push(`Expected and unexpected values cannot be equal!`);
//   }
//   if (assertion !== expected) {
//     errs.push(`Expected ${expected} but received ${assertion}.`);
//   }
//   if (assertion === unexpected) {
//     errs.push(`Expected ${assertion} to not equal ${unexpected}.`);
//   }
//   if (!errs.length) {
//     console.log(`+ ${testName} passed!`);
//   } else {
//     console.log(`- ${testName} failed:`);
//     errs.forEach(err => {
//       console.log(`   ${err}`);
//     });
//   }
// }

function waitForText(text) {
  return new Promise((resolve, reject) => {
    const i = setInterval(findText, 100);
    function findText() {
      if (document.body.innerText.includes(text)) {
        clearInterval(i);
        return resolve(true);
      }
    }
    findText();
  });
}