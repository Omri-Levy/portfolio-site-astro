import { debounce } from '@utils/debounce/debounce';

const getSections = () => document.querySelectorAll(`main section`);

const getNavlinks = () =>
	document.querySelectorAll(`nav a + div.underline-div`);

const getNavlinkByHash = (hash: string) =>
	document.querySelector(`nav a[data-hash="${hash}"] + div`);

const getHash = () => window.location.hash.split(`#`)[1];

const setHash = (hash: string) => {
	const oldHash = getHash();

	if (oldHash === hash || !hash) return;

	window.location.hash = hash;
};

const activateNavlink = (hash: string) => {
	// Add the active class to the nav link of the current hash
	const navlink = getNavlinkByHash(hash);

	navlink?.classList.add(`underline-div`);
};

/**
 * Set the url hash to the id of the intersecting section.
 */
const handleActiveLink = (entry: IntersectionObserverEntry) => {
	if (!entry.target.id || !entry.isIntersecting) return;

	// Remove the active class from all nav links
	const navLinks = getNavlinks();

	navLinks.forEach((link) => {
		link.classList.remove(`underline-div`);
	});

	// Only add the active class to about me / portfolio / contact me sections/nav links
	if (entry.target.id === `hero`) {
		setHash(`#`);

		return;
	}

	// Add the active class to the intersecting nav link
	activateNavlink(entry.target.id);
	// Update the url hash if it changed
	setHash(entry.target.id);
};

// Gives the nav link of the intersecting section the active class and updates the url hash
const createSectionScrollObserver = () => {
	/**
	 * Reduces the smooth scroll stopping prematurely and setting the wrong section/nav link as active.
	 */
	const debouncedHandleActiveLink = debounce(handleActiveLink, 500);

	return new IntersectionObserver(
		(entries) => {
			entries.forEach(debouncedHandleActiveLink);
		},
		{
			threshold: 0.5,
		}
	);
};

window.addEventListener(
	`load`,
	() => {
		if (!(`IntersectionObserver` in window)) return;

		const observer = createSectionScrollObserver();
		const sections = getSections();

		sections.forEach((section) => {
			observer.observe(section);
		});
	},
	false
);
