let testName;

function test(name, fn) {
    testName = name;
    fn();
}

function expect(val) {
    if (val) {
        console.log(testName, "passed");
    } else {
        console.log(testName, "failed");
    }
}


test("scott", () => {
    expect(true);
})

test("scott2", () => {
    expect(true);
})