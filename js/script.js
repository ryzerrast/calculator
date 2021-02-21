const input = document.querySelector('input'),
      elems = document.querySelectorAll('.elem'),
      clean = document.querySelector('.clean'),
      backspace = document.querySelector('.backspace'),
      equal = document.querySelector('.equal');

for(let elem of elems) {
   elem.addEventListener('click', function() {
      input.value += elem.innerHTML;
   });
}

clean.addEventListener('click', function() {
   input.value = '';
});

backspace.addEventListener('click', function() {
   let arr = input.value.split('');
   arr.splice(this.length, 1);
   input.value = arr.join('');
});

equal.addEventListener('click', function() {
   input.value = eval(input.value);
});

