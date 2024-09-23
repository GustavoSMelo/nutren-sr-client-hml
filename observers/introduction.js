"use strict";

const introductionClasses = [
    "introduction-sr-title-container",
    "introduction-sr-title",
    "introduction-sr-description",
    "introduction-sr-description-after-figure",
    'introduction-sr-img',
    'line-introduction-description',
    'pro-line',
    'age-line',
    'invite-sr-title',
    'invite-sr-description',
    'invite-sr-figure'
];

const introductionObserver = () => {
    const intersectionCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const className = introductionClasses.find(classes => {
                    const regex = new RegExp(`(^|\\s)${classes}($|\\s)`);
                    return regex.test(entry.target.className);
                });
                entry.target.classList.add(`${className}-animate`);
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(intersectionCallback, {threshold: 0.2});

    introductionClasses.forEach((classes) => {
        const items = window.document.querySelectorAll(`.${classes}`);

        items.forEach((item) => {
            observer.observe(item);
        });
    });
};

introductionObserver();
