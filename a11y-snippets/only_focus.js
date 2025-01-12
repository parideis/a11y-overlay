// When activated, this feature highlights the currently focused element on the page
export function onlyFocus() {
	const overlay = document.createElement('div');
	overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.95);
    pointer-events: none;
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.3s ease;
  `;
	document.body.appendChild(overlay);

	function scrollIntoViewIfNeeded(element) {
		const rect = element.getBoundingClientRect();
		if (rect.bottom > window.innerHeight || rect.top < 0) {
			element.scrollIntoView({ behavior: 'instant', block: 'center' });
			return true;
		}
		return false;
	}

	function updateMask(e) {
		if (e.target === document.body) {
			overlay.style.opacity = '0';
			return;
		}

		const scrolled = scrollIntoViewIfNeeded(e.target);

		if (scrolled) {
			setTimeout(() => updateMaskPosition(e.target), 50);
		} else {
			updateMaskPosition(e.target);
		}
	}

	function updateMaskPosition(target) {
		const rect = target.getBoundingClientRect();
		overlay.style.clipPath = `
      polygon(
        0% 0%,
        0% 100%,
        ${rect.left}px 100%,
        ${rect.left}px ${rect.top}px,
        ${rect.right}px ${rect.top}px,
        ${rect.right}px ${rect.bottom}px,
        ${rect.left}px ${rect.bottom}px,
        ${rect.left}px 100%,
        100% 100%,
        100% 0%
      )
    `;
		overlay.style.opacity = '1';
	}

	function resetMask() {
		overlay.style.opacity = '0';
	}

	document.addEventListener('focusin', updateMask);
	document.addEventListener('focusout', resetMask);
};