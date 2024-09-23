"use strict";

const mainDetailsClasses = [
    'detail-awakening',
    'detail-expand',
    'detail-planning'
];

/**
 *
 * @param {'02' | '03'} anchorNumber
 * @param {'flex' | 'none'} displayStyle
 */
const applyAnchorDisplayStyle = (anchorNumber, displayStyle) => {
    const anchor = window.document.querySelector(`.anchor-to-chapter-${anchorNumber}`);
    anchor.style.display = displayStyle;
};

const mainDetailsObserver = () => {
    const intersectionCallback = (entries) => {
        entries.forEach(entry => {
            const className = mainDetailsClasses.find(classes => {
                const regex = new RegExp(`(^|\\s)${classes}($|\\s)`);
                return regex.test(entry.target.className);
            });

            if (entry.isIntersecting) {
                entry.target.classList.add(`${className}-animate`);

                if (className === 'detail-expand') {
                    applyAnchorDisplayStyle('02', 'none');
                } else if (className === 'detail-planning') {
                    applyAnchorDisplayStyle('03', 'none');
                }

                return;
            }

            if (className === 'detail-expand') {
                applyAnchorDisplayStyle('02', 'flex');
            } else if (className === 'detail-planning') {
                applyAnchorDisplayStyle('03', 'flex');
            }
        });
    };

    const observer = new IntersectionObserver(intersectionCallback, {threshold: 0.2});

    mainDetailsClasses.forEach((classes) => {
        const items = window.document.querySelectorAll(`.${classes}`);

        items.forEach((item) => {
            observer.observe(item);
        });
    });
};

mainDetailsObserver();
