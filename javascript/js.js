burgur = document.querySelector('.burgur')
x = document.querySelector(".nav-list")
y = document.querySelector('.nav-main')

burgur.addEventListener('click', ()=>{
    x.classList.toggle('v-class-resp');
    y.classList.toggle('h-nav-resp');
})

search = document.querySelector ('.icon');
a=document.querySelector('.search-div');

search.addEventListener('click',()=>{
    a.classList.toggle('v-search');
});


inputElement = document.querySelector('.search-feild');
focusButton = document.querySelector('.icon');

focusButton.addEventListener('click', () => {
  inputElement.focus();
});







