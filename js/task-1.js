const listItems = document.querySelectorAll('.item');
console.log('Number of categories: ', listItems.length);

listItems.forEach(listItem => {
  console.log('Category: ', listItem.querySelector('h2').textContent);
  console.log('Elements: ', listItem.querySelectorAll('li').length);
});
