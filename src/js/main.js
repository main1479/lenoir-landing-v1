AOS.init({
	once: true,
});
// mobile nav ==========================
const toggleBtn = document.querySelectorAll('.nav__toggle');
const nav = document.querySelector('.mobile__nav');

toggleBtn.forEach((btn) => {
	btn.addEventListener('click', function () {
		nav.classList.toggle('active');
	});
});
