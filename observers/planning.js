"use strict";

const planningClasses = [
    "planning-title-img",
    "planning-title-txt-01",
    "planning-title-txt-02",
    "planning-title-txt-03",
    'introduction-to-planning-txt-01',
    'introduction-to-planning-txt-02',
    'introduction-to-planning-txt-03',
    'introduction-to-planning-txt-04',
    'introduction-to-planning-txt-05',
    'introduction-to-planning-txt-06',
    'introduction-to-planning-img',
    'planning-introduction-description',
    'planning-introduction-subdescription'
];

const planningObserver = () => {
    const intersectionCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const className = planningClasses.find((classes) => {
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

    planningClasses.forEach((classes) => {
        const items = window.document.querySelectorAll(`.${classes}`);

        items.forEach((item) => {
            observer.observe(item);
        });
    });
};

planningObserver();
