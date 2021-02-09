var next = document.getElementById('next');
var prev = document.getElementById('prev');
var progress = document.getElementById('progress');
var circles = document.querySelectorAll('.circle');
next.addEventListener('click', nextStep);
var currentActive = 1;
var a = 0;
function nextStep() {
    currentActive++;
    if(currentActive > circles.length - 1) {
        next.setAttribute('disabled', 'True');
        currentActive = circles.length;  
    }
    circles[currentActive -1].classList.add('active');
    a += 33.33;
    progress.style.width = a +"%";
    prev.removeAttribute('disabled');
}
prev.addEventListener('click', previous);
function previous() {
    next.removeAttribute('disabled')
    if(currentActive == 2) {
        prev.setAttribute('disabled', 'True');
    }
    currentActive--;
    a-=33.33;
    circles[currentActive].classList.remove('active');
    progress.style.width = a+ "%";
}