console.log("JS laddat");

const ulList = document.getElementById("ulList");
const input = document.getElementById("input");
const inputButton = document.getElementById("inputButton");
const completed = document.getElementById("completed");
const msg = "Input must not be empty";
let completedCount = 0;

inputButton.addEventListener("click", function (e) {
    e.preventDefault();

    const textInput = input.value;

    if (textInput.length != 0) {
        warning.innerHTML = "";
        input.value = "";

        //Skapar li, span och button element
        const inputLi = document.createElement("li");
        const liContent = document.createElement("span");
        const tcButton = document.createElement("button");
        
        //Ger de nya elementen en class
        liContent.setAttribute("class", "liContent");
        tcButton.setAttribute("class", "tcButton");
        liContent.innerText = textInput;

        //Lägger in alla element i ul li
        ulList.appendChild(inputLi);
        inputLi.appendChild(liContent);
        inputLi.appendChild(tcButton);

        //En liten delay när ett nytt listelement skapas, kändes mer smooth
        setTimeout(function() {
            inputLi.setAttribute("class", "fade");
        }, 20)

        //Funktion för att ta bort en todo
        tcButton.addEventListener("click", function () {
            if (liContent.getAttribute("class") == ("completed")){
                //Tar bort borttagna ToDos från completed
                //(tog bort koden eftersom det var inte så det var kodat på videon)
                //completedCount--;
                //completed.innerText = completedCount + " completed";
                inputLi.remove();
            }
            else {
                inputLi.remove();
            }});

        //Funktion för att markera en todo som completed eller inte completed samt räknare
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

    //Skickar ut felmeddelande och ger den en class för animation
    else {
        warning.setAttribute("class", "warningBlink")
        warning.innerHTML = msg;
        return;
    }
    
    textInput.value = ""
    //Återställer animationen
    warning.setAttribute("class", "")
} );
