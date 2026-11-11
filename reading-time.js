class ReadingTime extends HTMLElement {
    // Medium documents an adult reading speed of roughly 265 WPM.
    static readingRate = 265;

    constructor() {
        super();
        this._textToRead = null;
    }

    connectedCallback() {
        const contentId = this.getAttribute('for');
        const content = contentId && document.getElementById(contentId);

        if (!(content instanceof HTMLElement)) {
            console.error('reading-time: "for" must reference an existing HTML element ID.');
            return;
        }

        this._textToRead = content.innerText;

        const text = this._textToRead.trim();
        const wordCount = text === '' ? 0 : text.split(/\s+/).length;

        if (wordCount === 0) {
            this.textContent = '';
            return;
        }

        // Round to nearest minute.
        const minutes = Math.max(1, Math.round(wordCount / ReadingTime.readingRate));
        this.textContent = `Estimated reading time: ${minutes} minute${minutes === 1 ? '' : 's'}`;
    }
}

customElements.define('reading-time', ReadingTime);
