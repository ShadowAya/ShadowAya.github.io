function cookiesPopup() {

    document.body.insertAdjacentHTML(
        "afterbegin",
        `
        <div id='cookies-popup'>
            <p>This website uses cookies for user entries (not for advertisements)</p><button type='button' onclick="$('#cookies-popup').css({'display': 'none'})">Okay</button>
        </div>
        `
    )

}