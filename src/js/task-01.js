const categories = document.querySelectorAll('.item');
console.log(`Number of categories ${categories.length}`);

for (let animals of categories){
    console.log(`Category: ${animals.querySelector('h2').textContent}`);
    console.log(`Category: ${animals.querySelectorAll('li').length}`);
}