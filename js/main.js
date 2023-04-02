const darkModeBtn = document.querySelector('.bark-mode-btn');

darkModeBtn.onclick = () => {
   darkModeBtn.classList.toggle('bark-mode-btn--active');
   document.body.classList.toggle('dark');
}

// darkModeBtn.onclick = function () {
//    darkModeBtn.classList.toggle('bark-mode-btn--active');
//    document.body.classList.toggle('dark');
// }

//const body = document.querySelector('body').classList.add('dark');
