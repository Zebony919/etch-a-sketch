const gridContainer = document.querySelector("#gridContainer");
const buttonContainer = document.querySelector(".buttonContainer");
const buttons = buttonContainer.querySelectorAll(".button");
const colorPicker = document.querySelector("#colorPicker");
const resetButton = document.querySelector("#resetButton");
const randomColorButton = document.querySelector("#randomColorButton");
const gridSizeInput = buttonContainer.querySelector("#gridSize");
let squares = gridContainer.querySelectorAll(".gridSquare");

// Create grid function
function createGrid(size) {
    gridContainer.innerHTML = ""
    

    for (let i = 0; i < size * size; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        gridSquare.style.flex = `0 0 calc(100% / ${size})`;

        gridSquare.addEventListener("mouseenter", function() {
            if (rainbowMode) {
                const r = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);

                this.style.backgroundColor = `rgb(${r}, ${b}, ${g})`;
            } else {
                this.style.backgroundColor = colorPicker.value;
            }
        });

        gridContainer.appendChild(gridSquare);
    }

    squares = gridContainer.querySelectorAll(".gridSquare");
}

// Default grid size creation
createGrid(16);

// Changeing grid size
gridSizeInput.addEventListener("change", function() {
    let size = parseInt(this.value)

    if (size < 16) {
        size = 16;
    }
    if (size > 100) {
        size = 100;
    }

    this.value = size;
    createGrid(size);
})

// Button hover effect
buttons.forEach(button => {
    button.addEventListener("mouseenter", function() {
    this.style.border = "4px solid gray";
    })

    button.addEventListener("mouseleave", function() {
        this.style.border = "4px solid rgb(226, 226, 226)"
    })
})

// Reset button
resetButton.addEventListener("click", function() {
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
})

// Random Color button
let rainbowMode = false;

randomColorButton.addEventListener("click", function() {
    rainbowMode = !rainbowMode;

    if (rainbowMode) {
        this.style.backgroundColor = "lightgreen";
    } else {
        this.style.backgroundColor = "red";
    }
})
