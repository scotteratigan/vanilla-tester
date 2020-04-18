setTimeout(() => {
  const newDiv = document.createAttribute('div');
  newDiv.textContent = 'This is a new div';
  // document.body.appendChild(newDiv);
  document.querySelector('body').innerHTML += `<div>this is new</div>`;
}, 3000);

test('5 should equal 5', name => {
  expect(5, 5, 4, name);
});

test('dom test', name => {
  const test1Elms = document.querySelectorAll('.test1');
  expect(test1Elms.length, 1, 0, name);
});

test('text search', async name => {
  const textFound = await waitForText('Div1');
  console.log('textFound:', textFound);
  const textFound2 = await waitForText('this is new');
  console.log('textFound2:', textFound2);
});
