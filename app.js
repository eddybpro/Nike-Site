const full = document.getElementById('imagebox');
const showUl = document.getElementById('humber')
const closeUl = document.getElementById('close')
const ulList = document.getElementById('list')
const li_Item= ulList.querySelectorAll('li');

showUl.addEventListener('click',()=>{
    ulList.classList.remove('hidden')
    ulList.classList.add('blok')
    showUl.style.display = 'none';
    closeUl.style.display = 'block';
})

closeUl.addEventListener('click',()=>{
    ulList.classList.add('hidden')
    ulList.classList.remove('blok')
    showUl.style.display = 'block';
    closeUl.style.display = 'none';
})

li_Item.forEach(li=>{
    li.addEventListener('click',()=>{
        ulList.classList.add('hidden')
    ulList.classList.remove('blok')
    showUl.style.display = 'block';
    closeUl.style.display = 'none';
    })
})



function functio(small){
    full.src=small.src;
}