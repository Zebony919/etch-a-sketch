   console.log("Script loaded!");
   const gridContainer = document.querySelector("#gridContainer");
   console.log("Container found:", gridContainer);

   for (let i = 0; i < 256; i++) {
       const gridSquare = document.createElement("div");
       gridSquare.classList.add("gridSquare");
       gridContainer.appendChild(gridSquare);
   }
   console.log("Squares created!");