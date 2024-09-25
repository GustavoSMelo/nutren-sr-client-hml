"use strict";

const awakeningClasses = [
    'awakening-img',
    'awake-title-pt1',
    'awake-title-pt2',
    'awake-title-pt3',
    'awake-invite-text',
    'awake-invite-figure',
    'longevity-intro-figure',
    'longevity-intro-txt-1',
    'longevity-intro-txt-2',
    'longevity-intro-txt-3',
    'longevity-intro-txt-4',
    'longevity-intro-txt-5',
    'longevity-title',
    'longevity-text',
    'awakening-text',
    'life-expectation-item',
    'longevity-figure'
];

const awakeningObserver = () => {
    const intersectionCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const className = awakeningClasses.find(classes => {
                    const regex = new RegExp(`(^|\\s)${classes}($|\\s)`);
                    return regex.test(entry.target.className);
                });
                entry.target.classList.add(`${className}-animate`);
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(intersectionCallback, {threshold: 0.2});

    awakeningClasses.forEach((classes) => {
        const items = window.document.querySelectorAll(`.${classes}`);

        items.forEach((item) => {
            observer.observe(item);
        });
    });
};

awakeningObserver();
