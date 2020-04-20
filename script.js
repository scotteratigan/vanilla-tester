
// setTimeout(() => {
//   const newDiv = document.createAttribute('div');
//   newDiv.textContent = 'This is a new div';
//   document.querySelector('body').innerHTML += `<div>this is new</div>`;
// }, 3000);

test("the test", expect => {
	expect(null).toBeNull().not(undefined).not("").not(false);
});

test("the other test", expect => {
	expect(1).toBeEqualTo(1).not("1").not(true);
});


// test("dom test", () => {
// 	const test1Elms = document.querySelectorAll(".test1");
// 	expect(test1Elms.length).toBeEqualTo(2).not(1);
// });

// test("text search", async () => {
//   const textFound = await waitForText("Div1");
//   console.log("textFound:", textFound);
//   const textFound2 = await waitForText("this is new");
//   console.log("textFound2:", textFound2);
// });

// test("excessive chaining", () => {
// 	console.log("testing chaining...")
// 	expect(5).toBeEqualTo(5).not(4).not(3).not(6).not(5);
// })