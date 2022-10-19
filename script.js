console.log("JS laddat");

const ulList = document.getElementById("ulList");
const input = document.getElementById("input");
const msg = "Input must not be empty";
const inputButton = document.getElementById("inputButton");
const completed = document.getElementById("completed");

let completedCount = 0;




inputButton.addEventListener("click", function (e) {
    e.preventDefault();

    const textInput = input.value;

    if (textInput.length != 0) {
        warning.innerHTML = "";
        input.value = "";

        const inputLi = document.createElement("li");
        const liContent = document.createElement("span");
        const tcButton = document.createElement("button");
        
        inputLi.setAttribute("class", "inputLi");
        liContent.setAttribute("class", "liContent");
        tcButton.setAttribute("class", "tcButton");

        liContent.innerText = textInput;

        ulList.appendChild(inputLi);
        inputLi.appendChild(liContent);
        inputLi.appendChild(tcButton);


        tcButton.addEventListener("click", function () {
            if (liContent.getAttribute("class") == ("completed")){
                //Tar bort borttagna ToDos från completed 
                //completedCount--;
                //completed.innerText = completedCount + " completed";
                inputLi.remove();
            }
            else {
                inputLi.remove();

            }});


        liContent.addEventListener("click", function () {
            if (liContent.getAttribute("class") == ("completed")){
                liContent.setAttribute("class", "");
                completedCount--;
                completed.innerText = completedCount + " completed";
            }
            else {
                liContent.setAttribute("class", "completed");
                completedCount++;
                completed.innerText = completedCount + " completed";
            }

        })


    }

    else {
        warning.innerHTML = msg.italics();
        
        return;
    }

    textInput.value = ""

} );
