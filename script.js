const gridContainer = document.querySelector("#gridContainer");
const buttonContainer = document.querySelector(".buttonContainer");
const buttons = buttonContainer.querySelectorAll(".button");
const colorPicker = document.querySelector("#colorPicker");
const resetButton = document.querySelector("#resetButton");
const randomColorButton = document.querySelector("#randomColorButton");
const darkenButton = document.querySelector("#darkenMode");
const gridSizeInput = buttonContainer.querySelector("#gridSize");
let squares = gridContainer.querySelectorAll(".gridSquare");

// Create grid function
function createGrid(size) {
    gridContainer.innerHTML = ""
    

    for (let i = 0; i < size * size; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        gridSquare.style.flex = `0 0 calc(100% / ${size})`;
        gridSquare.dataset.darkness = "0";

        gridSquare.addEventListener("mouseenter", function() {
            if (rainbowMode) {
                const r = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);

                this.style.backgroundColor = `rgb(${r}, ${b}, ${g})`;
            } else if (darkenMode) {
                let currentDarkness = parseInt(this.dataset.darkness);

                if (currentDarkness < 10) {
                    currentDarkness++;
                    this.dataset.darkness = currentDarkness;

                    const opacity = currentDarkness / 10;
                    this.style.backgroundColor = colorPicker.value;
                    this.style.opacity = opacity;
                }
            } else {
                this.style.backgroundColor = colorPicker.value;
                this.style.opacity = "1";
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
        square.style.opacity = "1";
        square.dataset.darkness = "0";
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

// Darken mode button
let darkenMode = false;

darkenButton.addEventListener("click", function() {
    darkenMode = !darkenMode;

    if (darkenMode) {
        this.style.backgroundColor = "lightgreen";
    } else {
        this.style.backgroundColor = "red";
    }
})
