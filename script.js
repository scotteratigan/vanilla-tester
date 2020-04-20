setTimeout(() => {
  const newDiv = document.createAttribute('div');
  newDiv.textContent = 'This is a new div';
  // document.body.appendChild(newDiv);
  document.querySelector('body').innerHTML += `<div>this is new</div>`;
}, 3000);

test("the test", () => {
	expect(null).toBeNull().not("");
	expect(5).toBeEqualTo(5).not("5");
});


test("dom test", () => {
	const test1Elms = document.querySelectorAll(".test1");
	expect(test1Elms.length).toBeEqualTo(2).not(1);
});

test("text search", async () => {
  const textFound = await waitForText("Div1");
  console.log("textFound:", textFound);
  const textFound2 = await waitForText("this is new");
  console.log("textFound2:", textFound2);
});

