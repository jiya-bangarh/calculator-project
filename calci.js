let btn = document.querySelectorAll("button");

let display = document.querySelector(".display");

btn.forEach(function(btns) {

    btns.addEventListener("click", function() {

        if (btns.textContent === "AC") {

            display.textContent = "";

        }

        else if (btns.textContent === "=") {

            if (display.textContent !== "") {

                display.textContent =
                    display.textContent +
                    " = " +
                    eval(display.textContent);

            }

        }

        else if (btns.textContent === "cut") {

            display.textContent =
                display.textContent.slice(0, -1);

        }

        else {

            display.textContent += btns.textContent;

        }

    });

});