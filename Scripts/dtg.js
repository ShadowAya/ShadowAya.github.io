var timestamp, timestampString, storedSeconds, myValues;

storedSeconds = "00";
myValues = {
    "date-format" : "Short Date",
    "time-format" : "Short Time"
};

setTimeout(
    () => {
        pickedNew();
        setInterval(function() {pickedNew();}, 60000);
    }, (60 - new Date().getSeconds()) * 1000 + 500
);

window.onload = function() {
    let date = new Date();
    let date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12)
    console.log(date);
    document.getElementById('datepicker').valueAsDate = date2;
    document.getElementById('timepicker').value = ((date.getHours() < 10) ? "0" : "") + date.getHours() + ":" + ((date.getMinutes() < 10) ? "0" : "") + date.getMinutes()
    pickedNew();   
}

function copyR() {
    navigator.clipboard.writeText(timestampString);
    summonDialog('copied timestamp!');
}

function copyt() {
    navigator.clipboard.writeText(
        `<t:${timestamp}:${
            {
                "Short Time" : "t",
                "Long Time" : "T",
            }[myValues["time-format"]]
        }>`
    );
    summonDialog('copied time!');
}

function copyD() {
    navigator.clipboard.writeText(
        `<t:${timestamp}:${
            {
                "Short Date" : "d",
                "Long Date" : "D",
                "Short Date/Time" : "f",
                "Long Date/Time" : "F"
            }[myValues["date-format"]]
        }>`
    );
    summonDialog('copied date!');
}

function summonDialog(text) {
    let dialog = document.getElementById('dialog');
    dialog.innerHTML = text;

    dialog.classList.remove("dialog-animation");
    void dialog.offsetWidth;
    dialog.classList.add("dialog-animation");
}

function buttonTimeActions(buttonTitle) {
    let timeSelected = document.getElementById('timepicker').value.split(":");
    timeSelected[0] = Number(timeSelected[0]);
    timeSelected[1] = Number(timeSelected[1]);
    if (timeSelected.length==3) {
        timeSelected[2] = Number(timeSelected[2]);
    }

    switch (buttonTitle) {
        case "round" :
            if (timeSelected[1] > 30) {
                if (timeSelected[0]!=23) {timeSelected[0] += 1;
                } else {
                    timeSelected[0] = 0
                    let date = document.getElementById('datepicker').valueAsDate;
                    date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);
                    document.getElementById('datepicker').valueAsDate = new Date(date.setDate(date.getDate() + 1))
                }
            }
            timeSelected[1] = 0;
            break;
        case "now" :
            timeSelected[0] = new Date().getHours();
            timeSelected[1] = new Date().getMinutes();
            timeSelected[2] = new Date().getSeconds();
            date = new Date();
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);
            document.getElementById('datepicker').valueAsDate = date;
            break;
        case "+1h" :
            if (timeSelected[0]!=23) {timeSelected[0] += 1;
            } else {
                timeSelected[0] = 0
                let date = document.getElementById('datepicker').valueAsDate;
                date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);
                document.getElementById('datepicker').valueAsDate = new Date(date.setDate(date.getDate() + 1))
            }
            break;
        case "-1h" :
            if (timeSelected[0]!=0) {timeSelected[0] -= 1;
            } else {
                timeSelected[0] = 23
                let date = document.getElementById('datepicker').valueAsDate;
                date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);
                document.getElementById('datepicker').valueAsDate = new Date(date.setDate(date.getDate() - 1))
            }
            break;
    }

    document.getElementById('timepicker').value = `${(timeSelected[0] < 10) ? "0" : ""}${timeSelected[0]}:${(timeSelected[1] < 10) ? "0" : ""}${timeSelected[1]}`;
    if (timeSelected.length==3) {
        document.getElementById('timepicker').value += `:${(timeSelected[2] < 10) ? "0" : ""}${timeSelected[2]}`
    }
    pickedNew();
}

function pickedNew() {
    let date = document.getElementById("datepicker").value;
    let time = document.getElementById("timepicker").value.split(":");

    timestamp = Math.floor(new Date(date).getTime() / 1000);
    timestamp += Number(time[0]) * 3600 + Number(time[1]) * 60;
    if (time.length==3) {
        timestamp += Number(time[2]);
    }
    
    document.getElementById("preview-format").innerHTML = `&lt;t:${timestamp}:R>`;
    timestampString = `<t:${timestamp}:R>`

    let now = Math.floor(new Date().setSeconds(0)/1000);

    //console.log(now - timestamp);
    let timeValue = now - timestamp;
    let stringPreview = ''

    if (timeValue < 0) {
        var timeNegative = true;
        timeValue = Math.abs(timeValue);
    } else {var timeNegative = false;}

    if (timeValue < 60) {stringPreview = "a few seconds"}
    else if (timeValue < 3600) {stringPreview = `${Math.floor(timeValue/60)} minute#`}
    else if (timeValue < 86400) {stringPreview = `${Math.floor(timeValue/3600)} hour#`}
    else if (timeValue < 2592000) {stringPreview = `${Math.floor(timeValue/86400)} day#`}
    else if (timeValue < 31536000) {stringPreview = `${Math.floor(timeValue/2592000)} month#`}
    else {stringPreview = `${Math.floor(timeValue/31536000)} year#`}

    stringPreview = (timeNegative) ? `in ${stringPreview}` : `${stringPreview} ago`;
    
    if (stringPreview.match(/\b1\s/)) {
        stringPreview = stringPreview.replace("#", "");
        stringPreview = stringPreview.replace("1", (stringPreview.match("hour")) ? "an" : "a");
    } else {
        stringPreview = stringPreview.replace("#", "s");
    }

    document.getElementById("preview-text").innerHTML = stringPreview;
}

/*//////*/

function sendData(e) {
    let value = e.innerHTML;

    let dropdownEl = e.parentElement.parentElement;
    let dropdownField = dropdownEl.getElementsByTagName('button')[0];
    let dataField = dropdownEl.getAttribute("name");

    myValues[dataField] = value;
    dropdownField.innerHTML = `${
        dropdownField.innerHTML.match(/^<span>(.*?)<\/span>/)[0]
    }<span>${value}</span><span>⋮</span>`;
}

function toggleDropdownContentAnimationHandler(e) {
    let dropdownField = e;
    let dropdownContent = e.parentElement.getElementsByTagName('div')[0];

    dropdownField.insertAdjacentHTML(
        "afterend",
        `<button class="dropdown-field" onclick="toggleDropdownContent(this)">${dropdownField.innerHTML}</button>`
    )
    dropdownField.remove()
    dropdownContent.classList.add("dropdown-content-animate");
}

function toggleDropdownContent(e) {
    let dropdownContent = e.parentElement.getElementsByTagName('div')[0];
    let dropdownField = e.parentElement.getElementsByTagName('button')[0];

    if (dropdownContent.classList.contains("dropdown-content-static")) {
        
        if (!window.matchMedia("(pointer: coarse)").matches) {

            dropdownField.setAttribute("onmouseleave", "toggleDropdownContentAnimationHandler(this)")
            dropdownField.insertAdjacentHTML(
                "afterend",
                `<button class="dropdown-field" onmouseleave="toggleDropdownContentAnimationHandler(this)" onclick="toggleDropdownContent(this)">${dropdownField.innerHTML}</button>`
            )
            dropdownField.remove()
        }
        dropdownContent.classList.remove("dropdown-content-static");
        
    } else {
        dropdownContent.classList.add("dropdown-content-static");
        dropdownContent.classList.remove("dropdown-content-animate");
    }

}

/*/////*/

function changeTimePicker(type) {
    let timeSelected = document.getElementById('timepicker').value.split(":");

    if (type=="short") {
        document.getElementById("timepicker").value = `${timeSelected[0]}:${timeSelected[1]}:00`;
        if (timeSelected.length==3) {
            storedSeconds = timeSelected[2];
        }
        document.getElementById("timepicker").setAttribute("step", 0);
    } else {
        document.getElementById("timepicker").setAttribute("step", 1);
        document.getElementById("timepicker").value = `${timeSelected[0]}:${timeSelected[1]}:${storedSeconds}`;
    }
    
    pickedNew();
}