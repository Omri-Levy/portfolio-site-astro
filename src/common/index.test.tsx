// Migrate to vitest + playwright / solid library
// import '@testing-library/jest-dom';

// // @ts-ignore
// window.IntersectionObserver = jest.fn(() => ({
// 	observe: jest.fn(),
// 	unobserve: jest.fn(),
// 	disconnect: jest.fn(),
// }));

// Object.defineProperty(window, `matchMedia`, {
// 	writable: true,
// 	value: jest.fn().mockImplementation((query) => ({
// 		matches: false,
// 		media: query,
// 		onchange: null,
// 		addListener: jest.fn(), // Deprecated
// 		removeListener: jest.fn(), // Deprecated
// 		addEventListener: jest.fn(),
// 		removeEventListener: jest.fn(),
// 		dispatchEvent: jest.fn(),
// 	})),
// });

// test(`renders the hero's heading`, () => {
// 	const props = {
// 		hero: {},
// 		aboutMe: {},
// 		portfolio: {},
// 		contactMe: {},
// 		navLinks: [],
// 		info: {},
// 	};
// 	// @ts-ignore
// 	render(<Home {...props} />);

// 	const heading = screen.getByRole(`heading`, {
// 		name: `landingPage`,
// 	});

// 	expect(heading).toBeInTheDocument();
// 	expect(heading.textContent).not.toHaveLength(0);
// });
