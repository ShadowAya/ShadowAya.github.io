function cookiesPopup() {

    document.body.insertAdjacentHTML(
        "afterbegin",
        `
        <div id='cookies-popup'>
            <p>This website uses cookies to store user entries (not for advertisements) ...actually not yet lol</p><button type='button' onclick="$('#cookies-popup').css({'display': 'none'})">Okay</button>
        </div>
        `
    )

}

function notificationTop(type, title, text) {

    let parent = document.getElementById('notifications-top');

    if (!parent) {
        document.body.insertAdjacentHTML(
            "afterbegin",
            "<div id='notifications-top'></div>"
        );
        parent = document.getElementById('notifications-top');
    }

    let icon, bgColor, textColor;

    switch (type) {
        case "warning" :
            icon = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M464 720a48 48 0 1 0 96 0a48 48 0 1 0-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z" fill="rgba(0, 0, 0, 0)"/></svg>';
            bgColor = 'rgb(237, 240, 81)';
            textColor = 'rgb(0,0,0)'
            break;
        default :
            icon = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><circle cx="12" cy="12" r="10" stroke="rgba(0, 0, 0, 0)" stroke-width="2"/><path d="M12 7h.01" stroke="rgba(0, 0, 0, 0)" stroke-width="2" stroke-linecap="round"/><path d="M10 11h2v5" stroke="rgba(0, 0, 0, 0)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 16h4" stroke="rgba(0, 0, 0, 0)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>';
            bgColor = 'rgb(10,10,10)';
            textColor = 'rgb(255,255,255)';
    }

    let x = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="rgba(0, 0, 0, 0)"><path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0z"/><path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0z"/></g></svg>';
    x = x.replace(
        "rgba(0, 0, 0, 0)", textColor
    );

    let titleParagraph = (title) ? `<p style='color:${textColor}'>${title}</p>` : "";

    parent.insertAdjacentHTML(
        "beforeend",
        `<div style='background-color:${bgColor}'>
            ${icon.replace("rgba(0, 0, 0, 0)", textColor)}
            <div>
                ${titleParagraph}
                <p style='color:${textColor}'>${text}</p>
            </div>
            <div onclick="closeNotification(this)">${x}</div>
        </div>
        `
    );

}


function closeNotification(element) {
    element.parentElement.classList.add("notification-close-class");
    element.remove();
    setTimeout(() => {
        element.parentElement.remove();
    }, 295);
}