var passwordNames = [];
var passwordValues = [];

window.addEventListener("load", () => {

    loadPasswords();
    refreshPasswordsHTML();
    selectDefaultRadioButton()

    if (typeof(Storage) == "undefined") {
        alert("Your browser doesn't support Web Storage. Cannot store passwords!");
    }

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
            document.getElementById("files-upload").dispatchEvent(new Event("change"));
        })
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

function loadPasswords() {
    let currentPasswordName, currentPasswordValue;

    for (let i = 0; i < 10; i++) {
        currentPasswordName = localStorage.getItem(`password${i+1}_name`);
        currentPasswordValue = localStorage.getItem(`password${i+1}_value`);
        if (currentPasswordName == null) {
            break;
        } else {
            passwordNames.push(currentPasswordName);
            passwordValues.push(currentPasswordValue);
        }
    }
}

function refreshPasswordsHTML() {
    let container = document.getElementById("passwords-container");

    container.innerHTML = '<p>Saved Passwords</p>'
    for (let i = 0; i < passwordNames.length; i++) {
        container.insertAdjacentHTML(
            "beforeend",
            `
            <div>
                <label class="checkmark-container circular-check checkmark-bigger-text">
                    <input type="radio" name="password-type" value="${i+1}">
                    <span class="checkmark"></span>
                </label>
                <div><p>${passwordNames[i]}</p><p>∗∗∗∗∗</p></div>
                <div style="flex-grow:0;" onclick="removePassword(${i+1})"><span class="iconify icon-squared" data-icon="fluent:delete-20-regular"></span></div>
            </div>
            `
        )
    }
    if (container.innerHTML=='<p>Saved Passwords</p>') {
        container.innerHTML += "<h4>No saved passwords</h4>"
    }
}

function newPassword() {
    let value = document.getElementById("new-password-value").value;
    let label = document.getElementById("new-password-label").value;
    let errorMessage = '';

    if (passwordNames.length >= 10) {
        errorMessage += "You reached a maximum of 10 saved passwords\n";
    }

    if (value == '') {
        errorMessage += "Password field is empty\n";
    } else if (value.length > 30) {
        errorMessage += "Password cannot be longer than 30 characters\n";
    }

    if (label == '') {
        errorMessage += "Label field is empty\n";
    } else if (label.length > 20) {
        errorMessage += "Label cannot be longer than 20 characters\n";
    }

    /////////

    let whereToSave = passwordNames.length+1;

    if (errorMessage != "") {
        alert(errorMessage);
        return;
    }
    if (passwordNames.includes(label)) {
        if (!confirm("This label is already in use. Overwrite?")) {
            document.getElementById("new-password-label").value = "";
            return;
        } else {
            whereToSave = passwordNames.indexOf(label)+1;
            passwordValues.splice(whereToSave-1, 1, value)
        }
    } else {
        passwordNames.push(label);
        passwordValues.push(value);
    }

    document.getElementById("new-password-label").value = "";
    localStorage.setItem(`password${whereToSave}_name`, label);
    localStorage.setItem(`password${whereToSave}_value`, value);

    refreshPasswordsHTML();
    document.querySelector(`input[name="password-type"][value="${whereToSave}"]`).checked = true;
}

function removePassword(n) {
    if (n>10 | n<1) {
        alert("Couldn't remove password");
    } else {

        localStorage.removeItem(`password${n}_name`);
        localStorage.removeItem(`password${n}_value`);

        passwordNames.splice(n-1,1);
        passwordValues.splice(n-1,1);


        refreshPasswordsHTML();
        if (document.querySelectorAll('input[name="password-type"]:checked').length == 0) {
            selectDefaultRadioButton();
        }

    }
}

function selectDefaultRadioButton() {
    if (document.querySelectorAll('input[name="password-type"]').length == 2) {
        document.querySelector('input[name="password-type"][value="new"]').checked = true;
    } else {
        document.querySelector('input[name="password-type"][value="1"]').checked = true;
    }
}

function getPassword() {
    let passwordType = document.querySelector('input[name="password-type"]:checked').value;
    let password;

    if (passwordType == 'new') {
        if (password != '') {
            password = document.getElementById("new-password-value").value;
        }
    } else {
        password = passwordValues[Number(passwordType)-1]
    }

    return password

}

(() => {

	const model = (() => {

		let zipWriter;
		return {
			addFile(file, options) {
				if (!zipWriter) {
					zipWriter = new zip.ZipWriter(new zip.BlobWriter("application/zip"));
				}
				return zipWriter.add(file.name, new zip.BlobReader(file), options);
			},
            clearFiles() {
                return zipWriter = new zip.ZipWriter(new zip.BlobWriter("application/zip"));
            },
			async getBlobURL() {
				if (zipWriter) {
					const blobURL = URL.createObjectURL(await zipWriter.close());
					zipWriter = null;
					return blobURL;
				} else {
					throw new Error("Zip file closed");
				}
			}
		};

	})();

    (() => {
        
        window.addEventListener("load", () => {
            document.getElementById("save").addEventListener("click", onDownloadButtonClick);
            document.getElementById("files-upload").addEventListener("change", (e) => {
                console.log(e.target.files);
                selectFiles();
            });
            Array.from(document.getElementsByName("password-type")).forEach(radio => {
                radio.addEventListener("click", async () => {
                    await updatedPasswordForFiles();
                })
            });
        });

        async function updatedPasswordForFiles() {
            try {
                model.clearFiles();
                setTimeout(async () => {
                    await addFiles();
                }, 100);
            } catch (error) {
                alert(error);
            }
        }

        async function selectFiles() {
			try {
				await addFiles();
			} catch (error) {
				alert(error);
			}
		}

        async function addFiles() {
            let filesArray = Array.from(document.getElementById("files-upload").files);
            filesArray.forEach(file => {
                model.addFile(
                    file, {
                        password : getPassword()
                    }
                )
            });
        }

        async function onDownloadButtonClick(event) {

            if (document.getElementById("patient-name").value=="") {
                alert("Missing patient's name")
                return;
            }

            let infoTextBlob = new Blob([`${document.getElementById("patient-name").value}\n____________________\n\n${document.getElementById("notes").value}`]);
            await model.addFile(
                new File([infoTextBlob], "info.txt", {type:infoTextBlob.type}),
                {password : getPassword()}
            );


			let blobURL;
			try {
				blobURL = await model.getBlobURL();
			} catch (error) {
				alert(error);
			}
			if (blobURL) {
				const anchor = document.createElement("a");
				const clickEvent = new MouseEvent("click");
				anchor.href = blobURL;
				anchor.download = document.getElementById("patient-name").value+".zip";
				anchor.dispatchEvent(clickEvent);
                setTimeout(() => {
                    location.reload();
                }, 500);
			}
			event.preventDefault();
		}

    })();

})();