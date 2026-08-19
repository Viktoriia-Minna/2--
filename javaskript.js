const sliderInput = document.querySelector(".slider__input");
const sliderImage = document.querySelector(".slider__image");
const imageSizeValue = document.querySelector("#image-size-value");
const movementArea = document.querySelector("#movement-area");
const box = document.querySelector("#box");

const updateImageSize = _.debounce((event) => {
	const size = Number(event.target.value);

	sliderImage.style.width = `${size}%`;
	imageSizeValue.value = `${size}%`;
	imageSizeValue.textContent = `${size}%`;
}, 100);

const moveBox = _.debounce((event) => {
	const areaBounds = movementArea.getBoundingClientRect();
	const boxRadius = box.offsetWidth / 2;
	const x = Math.min(Math.max(event.clientX - areaBounds.left, boxRadius), areaBounds.width - boxRadius);
	const y = Math.min(Math.max(event.clientY - areaBounds.top, boxRadius), areaBounds.height - boxRadius);

	box.style.left = `${x}px`;
	box.style.top = `${y}px`;
}, 100);

sliderInput.addEventListener("input", updateImageSize);
movementArea.addEventListener("mousemove", moveBox);
