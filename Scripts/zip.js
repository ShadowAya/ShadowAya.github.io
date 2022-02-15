window.addEventListener("load", () => {

    let input;
    Array.from(document.getElementsByClassName("input-div")).forEach(element => {

        input = element.children[0];

        element.insertAdjacentHTML(
            "afterbegin",
            `<h3>${input.placeholder}</h3>`
        )
        input.addEventListener("input", animateThing)
    });

    Array.from(document.getElementsByClassName("upload-container")).forEach(element => {
        element.children[1].addEventListener("dragover", (e) => {
            e.preventDefault();
        })
        element.children[1].addEventListener("drop", (e) => {
            e.preventDefault();
            document.getElementById("files-upload").files = e.dataTransfer.files;
        })
    });

    document.getElementById("files-upload").addEventListener("change", (e) => {
        console.log(e.target.files);
    });

});

function animateThing(event) {
    let input = event.target;
    let inputTitle = input.parentElement.children[0];

    if (input.value.length == 0) {
        inputTitle.style.margin = "20px 0 0 10px";
    } else {
        inputTitle.style.margin = "-5px 0 0 10px";
    }
}