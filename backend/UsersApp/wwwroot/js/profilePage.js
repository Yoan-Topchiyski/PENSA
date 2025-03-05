function updateOffersCount() {
    const offersCount = document.querySelectorAll('.offers .offer:not(.removed)').length;
    document.querySelector('.profile-info .data h2').textContent = `${offersCount} offers`;
}

let offerToRemove = null;

document.querySelectorAll('.delete svg').forEach((deleteIcon) => {
    deleteIcon.addEventListener('click', function () {
        offerToRemove = this.closest('.offer');
        document.querySelector('.delete-popUp').classList.add('show');
    });
});

document.querySelector('.delete-popUp .cancelButton').addEventListener('click', function () {
    document.querySelector('.delete-popUp').classList.remove('show');
    offerToRemove = null;
});

document.querySelector('.delete-popUp .okButton').addEventListener('click', function () {
    if (offerToRemove) {
        offerToRemove.classList.add('removed');
        updateOffersCount();
    }
    document.querySelector('.delete-popUp').classList.remove('show'); 
    offerToRemove = null;
});


updateOffersCount();


document.querySelectorAll('.sidebar-personal-info .buttons .okButton, .sidebar-personal-info .buttons .cancelButton').forEach((button) => {
    button.addEventListener('click', function () {
        const personalInfo = this.closest('.sidebar-personal-info');
        if (personalInfo) {
            personalInfo.classList.remove('show');
        }
    });
});


document.querySelector('.edit-profile').addEventListener('click', function () {
    const personalInfo = document.querySelector('.sidebar-personal-info');
    if (personalInfo) {
        personalInfo.classList.toggle('show');
    }
});


// --------- OFFERS | ABOUT ME -----------

const offersPage = document.querySelector('.offers');
const aboutMePage = document.querySelector('.cards');

const offersButton = document.querySelector('.which-page-btn .offers-page');
const aboutMeButton = document.querySelector('.which-page-btn .about-me-page');

document.querySelector('.which-page-btn .offers-page').addEventListener('click', function () {

    offersPage.classList.add('show');
    aboutMePage.classList.remove('show');

    offersButton.classList.add('show');
    aboutMeButton.classList.remove('show');
});

document.querySelector('.which-page-btn .about-me-page').addEventListener('click', function () {

    aboutMePage.classList.add('show');
    offersPage.classList.remove('show');

    aboutMeButton.classList.add('show');
    offersButton.classList.remove('show');
});


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');

    const cardStates = {};

    cards.forEach((card, cardIndex) => {
        const moreButton = card.querySelector('.more-btn');
        const saveButton = card.querySelector('.save-btn');
        const listItems = card.querySelectorAll('li');

        saveButton.style.display = 'none';

        cardStates[cardIndex] = Array.from(listItems).map((item, index) => ({
            checked: index < 2,
            visible: index < 2,
            disabled: index < 2
        }));

        function applyCardState() {
            cardStates[cardIndex].forEach((state, index) => {
                const checkbox = listItems[index].querySelector('input[type="checkbox"]');
                listItems[index].style.display = state.visible ? 'flex' : 'none';
                checkbox.checked = state.checked;
                checkbox.disabled = state.disabled;
            });
        }

        applyCardState();

        moreButton.addEventListener('click', () => {
            cardStates[cardIndex].forEach(state => {
                state.visible = true;
                state.disabled = false;
            });
            applyCardState();
            saveButton.style.display = 'block';
            card.classList.add('expanded');
        });

        saveButton.addEventListener('click', () => {
         
            let anyChecked = false;

            cardStates[cardIndex].forEach((state, index) => {
                const checkbox = listItems[index].querySelector('input[type="checkbox"]');
                state.checked = checkbox.checked;
                state.visible = checkbox.checked || index < 2;
                state.disabled = checkbox.checked || index < 2;

                if (checkbox.checked) {
                    anyChecked = true;
                }
            });

           
            if (!cardStates[cardIndex][0].checked && !cardStates[cardIndex][1].checked) {
                cardStates[cardIndex][0].visible = false;
                cardStates[cardIndex][1].visible = false;
            }
   
            applyCardState();
            saveButton.style.display = 'none';
            card.classList.remove('expanded');
        });
    });
});
