let input;
Array.from(document.getElementsByClassName("input-div")).forEach(element => {

    input = element.children[0];

    element.insertAdjacentHTML(
        "afterbegin",
        `<h3>${input.placeholder}</h3>`
    )
    input.addEventListener("input", animateThing)
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

const saveTemplateAsFile = (filename, dataObjToWrite) => {
    const blob = new Blob([JSON.stringify(dataObjToWrite)], { type: "text/json" });
    const link = document.createElement("a");

    link.download = filename;
    link.href = window.URL.createObjectURL(blob);
    link.dataset.downloadurl = ["text/json", link.download, link.href].join(":");

    const evt = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
    });

    link.dispatchEvent(evt);
    link.remove()
};

function downloadLoginJSON() {
    let data = {}

    data["username"] = document.getElementById("json-username").value;
    data["password"] = document.getElementById("json-password").value;
    data["subdomain"] = document.getElementById("json-subdomain").value;
    saveTemplateAsFile("edu-config.json", data);
}