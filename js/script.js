document.addEventListener('DOMContentLoaded', () => {
	const selectsHeader = document.querySelectorAll('.select__header');

selectsHeader.forEach(header => {
	header.addEventListener('click', selectClicked);
})

function selectClicked(event) {
	const currentSelect = event.target.closest('.select');
	const selectBody = currentSelect.querySelector('.select__body');
	const selectHeader = currentSelect.querySelector('.select__header');

	if (currentSelect.classList.contains('active')) {
		closeSelect(currentSelect, selectHeader, selectBody);
		return;
	}

	openSelect(currentSelect, selectHeader, selectBody);
}

function openSelect(select, selectHeader, selectBody) {
	select.classList.add('active');
	selectHeader.classList.add('active');
	selectBody.classList.add('active');

	const currentInput = document.getElementById(select.dataset.inputId);
	const selectItems = selectBody.querySelectorAll('.select__item');
	const currentItem = selectHeader.querySelector('.select__current');

	selectItems.forEach(item => {
		item.addEventListener('click', () => {
			currentItem.textContent = item.textContent;
			currentInput.value = item.textContent;

			closeSelect(select, selectHeader, selectBody);
		})
	})
}

function closeSelect(select, selectHeader, selectBody) {
	select.classList.remove('active');
	selectHeader.classList.remove('active');
	selectBody.classList.remove('active');
};
	const links = document.querySelectorAll('.smooth-scroll-link');

links.forEach(link => {
	link.addEventListener('click', smoothScroll);
})

function smoothScroll(event) {
	event.preventDefault();

	const targetId = event.currentTarget.getAttribute('href') === '#' ? 'header'
		: event.currentTarget.getAttribute('href');
	const targetPosition = document.querySelector(targetId).offsetTop;
	const currentPosition = window.pageYOffset;
	const distance = targetPosition - currentPosition;
	const duration = 1000;
	let start = null;

	requestAnimationFrame(step);

	function step(timestamp) {
		if (!start) start = timestamp;
		const progress = timestamp - start;

		window.scrollTo(0, easeInOutCubic(progress, currentPosition, distance, duration));
		if (progress < duration) requestAnimationFrame(step);
	}
}

function easeInOutCubic(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return c / 2 * t * t * t + b;
	t -= 2;
	return c / 2 * (t * t * t + 2) + b;
};
	const swiper = new Swiper('.specialties__swiper', {
	spaceBetween: 50,
	pagination: {
		el: '.specialties__pagination',
		type: 'bullets'
	}
});
	const burger = document.querySelector('.burger');
const headerNav = document.querySelector('.header__nav');
const navLinks = headerNav.querySelectorAll('.nav__link');
const socailList = document.querySelector('.social-list');
const body = document.body;

burger.addEventListener('click', openBurger);
navLinks.forEach(link => {
	link.addEventListener('click', openBurger);
})

function openBurger(event) {
	if (!burger.classList.contains('active')) {
		body.classList.add('lock');
		burger.classList.add('active');
		headerNav.classList.add('active');
		socailList.classList.add('active');

		return;
	}

	closeBurger();
}

function closeBurger(event) {
	if (burger.classList.contains('active')) {
		body.classList.remove('lock');
		burger.classList.remove('active');
		headerNav.classList.remove('active');
		socailList.classList.remove('active');
	}
};
})