"use strict";

const expandClasses = [
    "girl-number-two-img",
    "expand-title-01",
    "expand-title-02",
    "expand-title-03",
    "invite-txt-01",
    "invite-txt-02",
    "invite-txt-03",
    "invite-txt-04",
    "etaism-title-01",
    "etaism-title-02",
    "etaism-title-03",
    "etaism-title-04",
    'etaism-meditation-figure',
    'ageism-title',
    'ageism-description',
    'ageism-subdescription',
    'invite-container'
];

const expandObserver = () => {
    const intersectionCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const className = expandClasses.find((classes) => {
                    const regex = new RegExp(`(^|\\s)${classes}($|\\s)`);
                    return regex.test(entry.target.className);
                });
                entry.target.classList.add(`${className}-animate`);
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(intersectionCallback, {
        threshold: 0.2,
    });

    expandClasses.forEach((classes) => {
        const items = window.document.querySelectorAll(`.${classes}`);

        items.forEach((item) => {
            observer.observe(item);
        });
    });
};

expandObserver();
