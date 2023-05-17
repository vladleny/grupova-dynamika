const button = document.querySelector('button');
button.addEventListener('click', function() {
   const h1 = document.querySelector('h1');
   h1.classList.add('visible');
   const h2 = document.querySelector('h2');
   h2.classList.add('visible');
   button.classList.add("invisible")
});