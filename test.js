function test(name, testFn) {
  function expect(assertValue) {
    const errors = [];
    function report() {
      if (errors.length) {
        console.log(name, "test Failed!");
        errors.forEach(err => console.error(err));
      } else {
        console.log(name, "test Passed!");
      }
    }
    setTimeout(report, 0);
  
    return {
      toBeNull: function() {
        if (assertValue !== null) {
          const err = `Value ${assertValue} is not null!`;
          errors.push(err)
        }
        return this;
      },
      toBeUndefined: function() {
        if (assertValue !== undefined) {
          const err = `Value ${assertValue} is not undefined!`;
          errors.push(err);
        }
        return this;
      },
      toBeDefined: function() {
        if (assertValue === undefined) {
          const err = `Value ${assertValue} is undefined!`
          errors.push(err);
        }
        return this;
      },
      toBeEqualTo: function (testValue) {
        if (assertValue !== testValue) {
          const err = `Value ${assertValue} (${typeof assertValue}) is not equal to ${testValue} (${typeof testValue})!`
          errors.push(err);
        }
        return this;
      },
      not: function (notValue) {
        if (assertValue === notValue) {
          const err = `Expect test fails not check. Test always passes?`;
          errors.push(err);
        }
        return this;
      }
    }
  }
  
  testFn(expect);
}

function waitForText(text) {
  // todo: add counter and reject after x seconds
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