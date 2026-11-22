// (1) Create container div //
const containerDiv = document.createElement('div');
containerDiv.id = 'container';
document.body.appendChild(containerDiv);


// (2) Create first div for clear button and color buttons //
const firstDiv = document.createElement('div');
firstDiv.id = 'firstDiv';
containerDiv.appendChild(firstDiv);

// (3) Create buttons for drawing and clearing //
const clearBtn = document.createElement('button');
clearBtn.id = 'clearBtn';
clearBtn.textContent = 'Clear'; 
clearBtn.style.cursor = 'pointer';
clearBtn.style.backgroundColor = '#f8f3f3';
clearBtn.style.color = 'red';
clearBtn.style.fontWeight = 'bold';
firstDiv.appendChild(clearBtn);

// (4) Create color buttons //
const colors = ['black', 'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray', 'cyan', 'magenta', ];
colors.forEach(color => {
    const colorBtn = document.createElement('button');
    colorBtn.className = 'colorBtn';
    colorBtn.style.backgroundColor = color;
    colorBtn.style.width = '70px';
    colorBtn.style.height = '60px';
    colorBtn.style.marginLeft = '5px';
    colorBtn.style.cursor = 'pointer';
    colorBtn.style.borderRadius = '10px 30px 50px 70px';
    colorBtn.dataset.color = color; // Store color for later drawing//
    firstDiv.appendChild(colorBtn);
});
//-------------------------------------------------------------------------------------------//
// (5) Create second div for drawing area //
const secondDiv = document.createElement('div');
secondDiv.id = 'secondDiv';
containerDiv.appendChild(secondDiv);

document.addEventListener('DOMContentLoaded', () => {
    const secondDiv = document.getElementById('secondDiv');
    const clearBtn = document.getElementById('clearBtn');
    
    let currentColor = ''; // Tracks chosen color
    let isDrawing = false;      // Track if mouse is held down

    // 1. Tell the computer when we are drawing
    document.onmousedown = () => { isDrawing = true; };
    document.onmouseup = () => { isDrawing = false; };

    // 2. Loop to create a 400-pixel grid to draw on (20 rows x 20 columns) //
    for (let i = 1; i <= 9000; i++) {
        const gridDiv = document.createElement('div');
        // Simple sizing and look
        gridDiv.style.width = '10px';
        gridDiv.style.height = '10px';
        gridDiv.style.border = '1px solid #ccc';
        gridDiv.style.display = 'inline-block';
        gridDiv.style.boxSizing = 'border-box';
        gridDiv.style.float = 'left'; // Aligns them nicely in rows

        //DRAWING TRICK: Check each box as the mouse moves over it
        gridDiv.onmouseover = () => {
            if (isDrawing === true) {
                gridDiv.style.backgroundColor = currentColor;
            }
        };
        // Click once to color a single square without dragging
        gridDiv.onmousedown = () => {
            gridDiv.style.backgroundColor = currentColor;
        };
        // Add the box to our drawing space
        secondDiv.appendChild(gridDiv);
    }

    // 3. Simple color button setup
    const colorButtons = document.querySelectorAll('.colorBtn');
    colorButtons.forEach(button => {
        button.onclick = () => {
            currentColor = button.dataset.color;
        };
    });

    // 4. Simple clear button setup
    clearBtn.onclick = () => {
        // Find every div inside secondDiv and wipe its color
        const allBoxes = secondDiv.querySelectorAll('div');
        allBoxes.forEach(box => {
            box.style.backgroundColor = '';
        });
    };
});
 
