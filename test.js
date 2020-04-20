let globalName = "";

function expect(assertValue) {
  const errors = [];
  let name = globalName;
  function report() {
    if (errors.length) {
      console.log("-------");
      console.log(name, "test Failed:");
      errors.forEach(err => console.error(err));
      console.log("-------");
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
    toBeTrue: function () {
      if (assertValue !== true) {
        const err = `Value ${assertValue} is not true!`;
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

function test(name, testFn) {
  globalName = name;
  testFn();
}

function waitForText(text) {
  let c = 0;
  return new Promise((resolve) => {
    const i = setInterval(findText, 100);
    function findText() {
      c += 100;
      if (document.body.innerText.includes(text)) {
        clearInterval(i);
        return resolve(true);
      }
      if (c > 5000) {
        clearInterval(i);
        return resolve(false);
      }
    }
    findText();
  });
}