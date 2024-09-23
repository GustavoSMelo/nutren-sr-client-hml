"use strict";

let planningInPracticeListItemIndex = 0;
let planningJobPracticeListItemIndex = 0;
let planningJob2PracticeListItemIndex = 0;
let isExpandedGlossary = false;
let isAwakeningDetailsOpen = false;
let isExpandDetailsOpen = false;
let isPlanningDetailsOpen = false;
let downloadImagePage = '1';

const planningJobPracticeListItems = [
    '<li class="planning-slide-message-item">Mapeie seus talentos e hobbies</li>',
    '<li class="planning-slide-message-item">Faça uma lista por ordem cronológica de todos os seus aprendizados formais (cursos, graduações, certificações) e outra de seus aprendizados informais (culinaria, botânica, costura, cuidado de pessoas, cuidado de animais, consertos em geral, habilidade social)</li>',
    '<li class="planning-slide-message-item">Conecte os principais aprendizados as pessoas que te orientam  e te ensinaram ao longo de sua jornada.</li>',
    '<li class="planning-slide-message-item">Analise cuidadosamente os talentos que você construiu até aqui</li>',
    '<li class="planning-slide-message-item">Atente-se para possíveis combinações que podem te render  novas profissões - ou novas formas de monetização</li>',
];
const planningInPracticeListItems = [
    '<li class="planning-slide-message-item">Faça uma lista dos seus amigos atuais.</li>',
    '<li class="planning-slide-message-item">Separe esses amigos em três grupos: os que você convidaria  para um café ou para um bate papo leve e informal; Os que você contaria uma conquista ou realização, e os que você poderia chamar em caso de uma emergência. </li>',
    '<li class="planning-slide-message-item">Veja com quem você tem mais proximidade</li>',
    '<li class="planning-slide-message-item">Mapeie com quais deles você gostaria de estreitar laços  e viver novas experiências.</li>',
    '<li class="planning-slide-message-item">Seja intencional e ativo nessas relações </li>',
    '<li class="planning-slide-message-item">Aproveite para refletir sobre o seu papel na vida desses amigos.</li>',
];
const planningJob2PracticeListItems = [
    '<li class="planning-slide-message-item">Monitore sua pressão arterial regularmente.</li>',
    '<li class="planning-slide-message-item">Mantenha uma alimentação equilibrada com fibras, proteínas  e bons carboidratos. Se o prato estiver colorido, melhor ainda.</li>',
    '<li class="planning-slide-message-item">Dê atenção ao consumo adequado de proteínas para garantir a integridade  dos músculos, ossos e articulações.</li>',
    '<li class="planning-slide-message-item">Aprenda com o seu corpo, após cada refeição, se os alimentos escolhidos  te trouxeram energia e vitalidade ou provocaram apatia e desânimo.</li>',
    '<li class="planning-slide-message-item">Aproveite os complementos e suplementos alimentares disponíveis  para ter mais vitalidade e imunidade.</li>',
    '<li class="planning-slide-message-item">Pratique exercícios físicos adequados e sob orientação regularmente,  para garantir mobilidade e força.</li>',
    '<li class="planning-slide-message-item">Preze por uma boa noite de sono: esse é um fator fundamental  para a manutenção da boa saúde.</li>',
    '<li class="planning-slide-message-item">Sempre que possível, visite um profissional de saúde que possa acompanhar  seu cuidado físico e mental.</li>',
];

const planningInPracticeList = window.document.querySelector(
    ".planning-slide-message"
);
const planningJobListSpan = window.document.querySelector(
    ".planning-job-list-span"
);

const planningJob2ListSpan = window.document.querySelector(
    ".planning-job-2-list-span"
);

const pipLeftArrow = window.document.querySelector(
    ".planning-in-practice-left-arrow"
);
const pipRightArrow = window.document.querySelector(
    ".planning-in-practice-right-arrow"
);

const pijLeftArrow = window.document.querySelector(
    ".planning-arrow-left-planning-job"
);
const pijRightArrow = window.document.querySelector(
    ".planning-arrow-right-planning-job"
);

const pij2LeftArrow = window.document.querySelector(
    ".planning-arrow-left-planning-job-2"
);
const pij2RightArrow = window.document.querySelector(
    ".planning-arrow-right-planning-job-2"
);

const expandGlossaryArrowBtn = window.document.querySelector(
    ".expand-glossary-arrow"
);
const expandGlossaryExpansive = window.document.querySelector(
    ".expand-glossary-expansive"
);

const anchorToChapter02 = window.document.querySelector(
    `.anchor-to-chapter-02`
);
const anchorToChapter03 = window.document.querySelector(
    `.anchor-to-chapter-03`
);

const detailAwakening = window.document.querySelector(".detail-awakening");
const detailExpand = window.document.querySelector(".detail-expand");
const detailPlanning = window.document.querySelector(".detail-planning");

const summaryAwakening = window.document.querySelector(
    ".main-awakening-summary"
);
const summaryExpand = window.document.querySelector(".main-expand-summary");
const summaryPlanning = window.document.querySelector(".main-planning-summary");

const mainSummaryAwakeningClosed = window.document.querySelector(
    ".main-summary-awakening-closed"
);
const mainSummaryExpandClosed = window.document.querySelector(
    ".main-summary-expand-closed"
);
const mainSummaryPlanningClosed = window.document.querySelector(
    ".main-summary-planning-closed"
);

const mainSummaryAwakeningExpanded = window.document.querySelector(
    ".main-summary-awakening-expanded"
);
const mainSummaryExpandExpanded = window.document.querySelector(
    ".main-summary-expand-expanded"
);
const mainSummaryPlanningExpanded = window.document.querySelector(
    ".main-summary-planning-expanded"
);

const btnCopy = window.document.querySelector(".btn-copy");

planningInPracticeList.innerHTML =
    planningInPracticeListItems[planningInPracticeListItemIndex];
planningJobListSpan.innerHTML =
    planningJobPracticeListItems[planningJobPracticeListItemIndex];

/**
 * @param {number} indexPosition
 * @returns void
 */
function changePipIndex(indexPosition) {
    planningInPracticeListItemIndex = indexPosition;
    planningInPracticeListChangeElement();

    const listOfPlanningSlide =
        window.document.querySelectorAll(".number-pip-index");
    listOfPlanningSlide.forEach((li) => {
        li.classList.remove("selected-slide-number");
    });

    const listElemet = listOfPlanningSlide[indexPosition];
    listElemet.classList.add("selected-slide-number");
}

/**
 * @param {number} indexPosition
 * @returns void
 */
function changePijIndex(indexPosition) {
    planningJobPracticeListItemIndex = indexPosition;
    planningJobPracticeListChangeElement();

    const listOfPlanningSlide =
        window.document.querySelectorAll(".number-pij-index");
    listOfPlanningSlide.forEach((li) => {
        li.classList.remove("selected-slide-number");
    });

    const listElement = listOfPlanningSlide[planningJobPracticeListItemIndex];
    listElement.classList.add("selected-slide-number");
}

/**
 * @param {number} indexPosition
 * @returns void
 */
function changePij2Index(indexPosition) {
    planningJob2PracticeListItemIndex = indexPosition;
    planningJob2PracticeListChangeElement();

    const listOfPlanningSlide = window.document.querySelectorAll(
        ".planning-slide-numbers-job-item"
    );
    listOfPlanningSlide.forEach((li) => {
        li.classList.remove("selected-slide-number");
    });

    const listElement = listOfPlanningSlide[planningJob2PracticeListItemIndex];
    listElement.classList.add("selected-slide-number");
}

/**
 * @param {'left' | 'right'} side
 * @returns void
 */
const pipArrowChangeIndex = (side) => {
    if (side === "left") {
        if (planningInPracticeListItemIndex > 0) {
            planningInPracticeListItemIndex--;
        } else {
            planningInPracticeListItemIndex =
                planningInPracticeListItems.length - 1;
        }
        planningInPracticeListChangeElement();
    } else if (side === "right") {
        const helper = planningInPracticeListItems.length - 1;
        if (planningInPracticeListItemIndex < helper) {
            planningInPracticeListItemIndex++;
        } else {
            planningInPracticeListItemIndex = 0;
        }
        planningInPracticeListChangeElement();
    }

    const listOfPlanningSlide =
        window.document.querySelectorAll(".number-pip-index");
    listOfPlanningSlide.forEach((li) => {
        li.classList.remove("selected-slide-number");
    });

    const listElement = listOfPlanningSlide[planningInPracticeListItemIndex];
    listElement.classList.add("selected-slide-number");
};

/**
 * @param {'left' | 'right'} side
 * @returns void
 */
const pijArrowChangeIndex = (side) => {
    if (side === "left") {
        if (planningJobPracticeListItemIndex > 0) {
            planningJobPracticeListItemIndex--;
        } else {
            planningJobPracticeListItemIndex =
                planningJobPracticeListItems.length - 1;
        }
    } else if (side === "right") {
        const helper = planningJobPracticeListItems.length - 1;
        if (planningJobPracticeListItemIndex < helper) {
            planningJobPracticeListItemIndex++;
        } else {
            planningJobPracticeListItemIndex = 0;
        }
    }

    planningJobPracticeListChangeElement();

    const listOfPlanningSlide =
        window.document.querySelectorAll(".number-pij-index");
    listOfPlanningSlide.forEach((li) => {
        li.classList.remove("selected-slide-number");
    });

    const listElement = listOfPlanningSlide[planningJobPracticeListItemIndex];
    listElement.classList.add("selected-slide-number");
};

const pij2ArrowChangeIndex = (side) => {
    if (side === "left") {
        if (planningJob2PracticeListItemIndex > 0) {
            planningJob2PracticeListItemIndex--;
        } else {
            planningJob2PracticeListItemIndex =
                planningJob2PracticeListItems.length - 1;
        }
    } else if (side === "right") {
        const helper = planningJob2PracticeListItems.length - 1;
        if (planningJob2PracticeListItemIndex < helper) {
            planningJob2PracticeListItemIndex++;
        } else {
            planningJob2PracticeListItemIndex = 0;
        }
    }

    planningJob2PracticeListChangeElement();

    const listOfPlanningSlide = window.document.querySelectorAll(
        ".planning-slide-numbers-job-item"
    );
    listOfPlanningSlide.forEach((li) => {
        li.classList.remove("selected-slide-number");
    });

    const listElement = listOfPlanningSlide[planningJob2PracticeListItemIndex];
    listElement.classList.add("selected-slide-number");
};

/**
 * @returns void
 */
const planningInPracticeListChangeElement = () => {
    planningInPracticeList.innerHTML =
        planningInPracticeListItems[planningInPracticeListItemIndex];
};

/**
 * @returns void
 */
const planningJobPracticeListChangeElement = () => {
    planningJobListSpan.innerHTML =
        planningJobPracticeListItems[planningJobPracticeListItemIndex];
};

const planningJob2PracticeListChangeElement = () => {
    planningJob2ListSpan.innerHTML =
        planningJob2PracticeListItems[planningJob2PracticeListItemIndex];
};

const inviteByWhatsapp = () => {
    const URLEncoded = encodeURIComponent(
        "http://nutren.com.br/senior/guiaproidade"
    );

    window.open(
        `https://api.whatsapp.com/send?text=Eu%20tenho%20um%20convite%20Pró-Idade%20especial%20pra%20voce:${URLEncoded}`,
        "_blank"
    );
};

const inviteByFacebook = () => {
    window.open(
        "https://www.facebook.com/sharer/sharer.php?u=http://nutren.com.br/senior/guiaproidade",
        "_blank"
    );
};

const openInviteContainer = () => {
    const inviteContainer = window.document.querySelector(
        ".invite-container-blue"
    );
    inviteContainer.style.top = `${window.scrollY}`;
    inviteContainer.style.display = "flex";
    window.document.body.style.overflowX = "hidden";
};

const closeInviteContainer = () => {
    const inviteContainer = window.document.querySelector(
        ".invite-container-blue"
    );
    inviteContainer.style.display = "none";
    window.document.body.style.overflowX = "";
};

/**
 * @param {'1' | '2' | '3'} imgNumber
 */
const openShareContainer = (imgNumber = '1') => {
    downloadImagePage = imgNumber;
    const shareContainer = window.document.querySelector(".share-container");
    shareContainer.style.top = `${window.scrollY}`;
    shareContainer.style.display = "flex";
    window.document.body.style.overflowX = "hidden";
};

const closeShareContainer = () => {
    const shareContainer = window.document.querySelector(".share-container");
    shareContainer.style.display = "none";
    window.document.body.style.overflowX = "";
};

const downloadPDF = () => {
    const pdfLoader = document.createElement("a");
    pdfLoader.href = `./assets/nutren_sharepage${downloadImagePage}.png`;
    pdfLoader.download = "CONVITE_NUTREN_SR.png";

    window.document.body.appendChild(pdfLoader);
    pdfLoader.click();
    window.document.body.removeChild(pdfLoader);
};

const resetMainSummaryDisplayToDefault = () => {
    mainSummaryExpandClosed.style.display = "flex";
    mainSummaryPlanningClosed.style.display = "flex";
};

const rotateSandClock = () => {
    const speed = 0.42;
    const sandClock = window.document.querySelector(".longevity-img");
    let positionScroll = window.scrollY;
    let rotation = speed * positionScroll;

    sandClock.style.transform = `rotate(${rotation}deg)`;
};

/**
 * @param {'01' | '02' | '03'} chapterNumber
 * @param {number} topPixel
 */
const goToChapter = (chapterNumber, topPixel = 60) => {
    setTimeout(() => {
        const chapter = `chapter-${chapterNumber}`;

        const el = document.getElementById(chapter);
        const elementPosition = el.getBoundingClientRect().top;
        window.scrollBy({
            top: elementPosition - topPixel,
            behavior: "smooth",
        });
    }, 300);
};

pipLeftArrow.addEventListener("click", () => {
    pipArrowChangeIndex("left");
});

pipRightArrow.addEventListener("click", () => {
    pipArrowChangeIndex("right");
});

pijLeftArrow.addEventListener("click", () => {
    pijArrowChangeIndex("left");
});

pijRightArrow.addEventListener("click", () => {
    pijArrowChangeIndex("right");
});

pij2LeftArrow.addEventListener("click", () => {
    pij2ArrowChangeIndex("left");
});

pij2RightArrow.addEventListener("click", () => {
    pij2ArrowChangeIndex("right");
});

btnCopy.addEventListener("click", async () => {
    try {
        const link = "https://nestle.com.br/guiaproidade";
        await navigator.clipboard.writeText(link);

        const copyLinkH4 = window.document.querySelector(".copy-link-h4");
        copyLinkH4.innerText = "Link Copiado !";
    } catch (err) {
        const copyLinkH4 = window.document.querySelector(".copy-link-h4");
        copyLinkH4.innerText = "Erro ao copiar link !";
    }
});

summaryAwakening.addEventListener("click", () => {
    isAwakeningDetailsOpen = !isAwakeningDetailsOpen;

    if (isExpandDetailsOpen) {
        detailExpand.open = false;
        isExpandDetailsOpen = false;

        mainSummaryExpandExpanded.style.display = "none";
        mainSummaryExpandClosed.style.display = "flex";
    }

    if (isPlanningDetailsOpen) {
        detailPlanning.open = false;
        isPlanningDetailsOpen = false;
    }

    if (isAwakeningDetailsOpen && window.screen.width < 1280) {
        setTimeout(() => {
            mainSummaryAwakeningClosed.style.display = "none";
            mainSummaryAwakeningExpanded.style.display = "flex";
        }, 300);
    } else {
        mainSummaryAwakeningExpanded.style.display = "none";
        mainSummaryAwakeningClosed.style.display = "flex";
    }

    goToChapter("01");
});

summaryExpand.addEventListener("click", () => {
    isExpandDetailsOpen = !isExpandDetailsOpen;

    if (isAwakeningDetailsOpen) {
        detailAwakening.open = false;
        isAwakeningDetailsOpen = false;

        mainSummaryAwakeningExpanded.style.display = "none";
        mainSummaryAwakeningClosed.style.display = "flex";
    }

    if (isPlanningDetailsOpen) {
        detailPlanning.open = false;
        isPlanningDetailsOpen = false;

        mainSummaryPlanningExpanded.style.display = "none";
        mainSummaryPlanningClosed.style.display = "flex";
    }

    if (isExpandDetailsOpen && window.screen.width < 1280) {
        setTimeout(() => {
            mainSummaryExpandExpanded.style.display = "flex";
            mainSummaryExpandClosed.style.display = "none";
        }, 300);
    } else {
        mainSummaryExpandExpanded.style.display = "none";
        mainSummaryExpandClosed.style.display = "flex";
    }

    goToChapter("02");
});

summaryPlanning.addEventListener("click", () => {
    isPlanningDetailsOpen = !isPlanningDetailsOpen;

    if (isAwakeningDetailsOpen) {
        detailAwakening.open = false;
        isAwakeningDetailsOpen = false;

        mainSummaryAwakeningExpanded.style.display = "none";
        mainSummaryAwakeningClosed.style.display = "flex";
    }

    if (isExpandDetailsOpen) {
        detailExpand.open = false;
        isExpandDetailsOpen = false;

        mainSummaryExpandExpanded.style.display = "none";
        mainSummaryExpandClosed.style.display = "flex";
    }

    if (isPlanningDetailsOpen && window.screen.width < 1280) {
        setTimeout(() => {
            mainSummaryPlanningClosed.style.display = "none";
            mainSummaryPlanningExpanded.style.display = "flex";
        }, 300);
    } else {
        mainSummaryPlanningExpanded.style.display = "none";
        mainSummaryPlanningClosed.style.display = "flex";
    }

    goToChapter("03");
});

expandGlossaryArrowBtn.addEventListener("click", () => {
    const expandGlossaryArrowImg = window.document.querySelector(
        ".expand-glossary-arrow-img"
    );
    expandGlossaryArrowImg.style.transition = "0.5s";
    isExpandedGlossary = !isExpandedGlossary;

    if (!isExpandedGlossary) {
        expandGlossaryExpansive.style.display = "none";
        expandGlossaryArrowImg.style.transform = "rotate(0deg)";
        return;
    }

    expandGlossaryExpansive.style.display = "block";
    expandGlossaryArrowImg.style.transform = "rotate(180deg)";
});

anchorToChapter02.addEventListener("click", () => {
    summaryAwakening.click();
    if (!isExpandDetailsOpen) {
        summaryExpand.click();
        isExpandDetailsOpen = true;
    }
    goToChapter("02");
});

anchorToChapter03.addEventListener("click", () => {
    summaryExpand.click();
    if (!isPlanningDetailsOpen) {
        summaryPlanning.click();
        isPlanningDetailsOpen = true;
    }
    goToChapter("03");
});

window.addEventListener("scroll", () => rotateSandClock());
