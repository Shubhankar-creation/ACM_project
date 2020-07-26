const products = document.querySelector('#products');
const nextBtn = document.querySelector('#nextBtn');
const poduct_item = document.querySelector('#poduct_item');

const size = product_item[0].clientWidth;
let counter = 1;
nextBtn.addEventListener('click', ()=>{
    products.style.transform = 'translate(-17vw)';
    counter++;
})
