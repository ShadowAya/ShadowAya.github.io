
const NAV_LIMIT = 1150;

// lang

function selectLang(selectedLang, selectedFlag = undefined) {

    if (!selectedFlag)
    selectedFlag = document.querySelector(`img.flag-icon[data-lang='${selectedLang}']`);

    localStorage.setItem("lang", selectedLang);
    const langElements = document.querySelectorAll('[data-lang-' + selectedLang + ']');
    
    for (const elem of langElements) {
        const langContent = elem.getAttribute('data-lang-' + selectedLang);
        elem.innerHTML = langContent;
    }

    const allFlags = document.querySelectorAll('.flag-icon');
    for (const flag of allFlags) {
        flag.classList.remove('active');
    }

    selectedFlag.classList.add('active');
}

document.getElementById('language-switcher').addEventListener('click', function (event) {
    const selectedFlag = event.target;
    if (selectedFlag.tagName !== 'IMG') return;

    selectLang(selectedFlag.getAttribute('data-lang'), selectedFlag)

});

//resize

function handleNavItems() {
    const windowWidth = $(window).innerWidth();

    if (windowWidth < NAV_LIMIT) {
        const navItems = $(".nav-items a:not([id])");

        if (!$('.dropdown-container').length) {

            $(".nav-items svg").show();

            navItems.detach();
            $('<dropdown>')
                .addClass('dropdown-container')
                .append(navItems)
                .appendTo('.nav-items');
        }
    } else {
        const navItems = $('.dropdown-container a');

        if (navItems.length) {
            $(".nav-items svg").hide();
            $('.dropdown-container').css({
                "display": "none"
            })

            $('.dropdown-container').detach();
            $('.nav-items').append(navItems);
        }
    }
}

handleNavItems();
if ($(window).innerWidth() > NAV_LIMIT) {
    $(".nav-items svg").hide();
}

$(window).resize(function () {
    handleNavItems();
});

$("#categories").click(() => {

    if ($(window).innerWidth() > NAV_LIMIT) return;

    console.log("triggered");

    let container = $('.dropdown-container');

    if (container.is(":visible")) {
        $('.dropdown-container').css({
            "display": "none"
        })
    } else {
        $('.dropdown-container').css({
            "display": "flex"
        })
    }

});

// default lang

selectLang(localStorage.getItem("lang")??'en');
