var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var toggleButton = document.querySelector('.toggle-button')
var mobileNav = document.querySelector('.mobile-nav')
var modalNoButton = document.querySelector(".modal__action--negative")

// console.log(backdrop);
// backdrop.style.display = 'block';

var selectPlanButtons = document.querySelectorAll('.plan button')
console.dir(selectPlanButtons);

backdrop.addEventListener('click', function() {
    mobileNav.style.display = 'none';
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}


function closeModal() {
    // backdrop.style.display = "none";
    // modal.style.display = "none";
    modal.classList.remove('open');
    backdrop.classList.remove('open')
}

for (var i=0; i<selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function(){
        // modal.style.display = "block";
        // backdrop.style.display = "block";
        modal.classList.add('open');
        backdrop.classList.add('open')
    })
}

toggleButton.addEventListener('click', function() {
    // backdrop.style.display = "block";
    // mobileNav.style.display = "block";
    backdrop.classList.add('open')
    mobileNav.classList.add('open')
});