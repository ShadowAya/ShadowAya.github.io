var timestamp, timestampString;

setTimeout(
    function() {
        pickedNew();
        setInterval(function() {pickedNew();}, 60000);
    }, (60 - new Date().getSeconds()) * 1000 + 500
);

window.onload = function() {
    date = new Date();
    date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12)
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
    var timeSelected = document.getElementById('timepicker').value.split(":");
    timeSelected[0] = Number(timeSelected[0]);
    timeSelected[1] = Number(timeSelected[1]);

    navigator.clipboard.writeText(
        "<t:" + (1577833200 + timeSelected[0]*3600 + timeSelected[1]*60).toString() + ":t>"
    );
    summonDialog('copied time!');
}

function copyD() {
    navigator.clipboard.writeText(
        "<t:" + (document.getElementById('datepicker').valueAsDate.getTime() / 1000).toString() + ":D>"
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
    var timeSelected = document.getElementById('timepicker').value.split(":");
    timeSelected[0] = Number(timeSelected[0]);
    timeSelected[1] = Number(timeSelected[1]);

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
    pickedNew();
}

function pickedNew() {
    let date = document.getElementById("datepicker").value;
    let time = document.getElementById("timepicker").value.split(":");

    timestamp = Math.floor(new Date(date.replace("-",".")).getTime() / 1000);
    timestamp += Number(time[0]) * 3600 + Number(time[1]) * 60;
    
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