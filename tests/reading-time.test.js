import { expect } from '@esm-bundle/chai';
import '../reading-time.js';

describe('ReadingTime', () => {
    beforeEach(() => {
        document.querySelectorAll('reading-time').forEach(element => element.remove());
        document.querySelectorAll('[data-reading-time-test-content]').forEach(element => element.remove());
    });

    function addReadingTime(contentText) {
        const content = document.createElement('div');
        content.id = 'test-content';
        content.setAttribute('data-reading-time-test-content', '');
        content.textContent = contentText;
        document.body.append(content);

        const readingTime = document.createElement('reading-time');
        readingTime.setAttribute('for', content.id);
        document.body.append(readingTime);
        return readingTime;
    }

    it('calculates and displays the estimated reading time for the referenced text', () => {
        const readingTime = addReadingTime('word '.repeat(265));

        expect(readingTime.textContent).to.equal('Estimated reading time: 1 minute');
    });

    it('rounds to the nearest minute and uses the plural form', () => {
        const readingTime = addReadingTime('word '.repeat(400));

        expect(readingTime.textContent).to.equal('Estimated reading time: 2 minutes');
    });

    it('displays nothing when the referenced text is empty', () => {
        const readingTime = addReadingTime(' \n\t ');

        expect(readingTime.textContent).to.equal('');
    });
});
