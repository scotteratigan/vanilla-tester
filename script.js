setTimeout(() => {
  const newDiv = document.createAttribute('div');
  newDiv.textContent = 'This is a new div';
  document.querySelector('body').innerHTML += `<div>this is new</div>`;
}, 1000);

test("the test", () => {
	expect(null).toBeNull().not(undefined).not("").not(false);
});

test("the other test", () => {
	expect(1).toBeEqualTo(1).not("1").not(true);
});

test("dom test", () => {
	const test1Elms = document.querySelectorAll(".test1");
	expect(test1Elms.length).toBeEqualTo(2).not(1);
});

test("excessive chaining", () => {
	expect(5).toBeEqualTo(5).not(4).not(3).not(6);
})

test("text search", async () => {
	// issue when we run async code before the first expect statement - we lose the name:
  const textFound = await waitForText("Div1");
	expect(textFound).toBeTrue();
  const textFound2 = await waitForText("this is new");
	expect(textFound2).toBeTrue();
});

