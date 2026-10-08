const btn = document.getElementById('toggle-btn');
const sidebar = document.querySelector('.sidebar');

btn.addEventListener('click', function () {
    sidebar.classList.toggle('open'); // slide sidebar in/out
    btn.classList.toggle('open');     // animate bars into X
});
