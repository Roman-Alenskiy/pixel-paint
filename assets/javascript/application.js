// Global var's
let cellColor = 'black'; 
let cells
const gridSize = document.querySelector('#grid-size')
const gridField = document.querySelector('.grid-field')
const eraser = document.querySelector('#eraser-toggler')
const grid = document.querySelector('#grid-toggler')
const newList = document.querySelector('#new-list')
const colorPickerTrigger = document.querySelector('#color-picker-trigger')
const colorPicker = document.querySelector('#color-picker')

// Setup default grid
gridSetup()

// Painting
let mouseDown = false;

document.onmousedown = function() {
	mouseDown = true;
}

document.onmouseup = function() {
	mouseDown = false;
}

gridField.addEventListener('mousemove', paint)

function paint(e){
	console.log(e)
	if (mouseDown && e.target.className === 'cell') {
		if (eraser.classList.contains('btn-toggle-on')) {
			e.target.style.backgroundColor = 'white'
		} else {
			e.target.style.backgroundColor = cellColor;
		}
	}
}

// Grid
gridSize.addEventListener('change', gridSetup)

function gridSetup() {
	gridClean();
	gridBuild()
	cells = document.querySelectorAll('.cell')
} 

function gridClean() {
	while(gridField.firstChild) {
		gridField.removeChild(gridField.firstChild)
	}
}

function gridBuild() {
	let cellSize = (512/gridSize.value) + "px"
	for (let i = 1; i <= gridSize.value; i++) {
		tRow = gridField.insertRow()
		for (let i = 1; i <= gridSize.value; i++) {
			tCell = tRow.insertCell()
			tCell.className = 'cell'
			tCell.style.width = cellSize
			tCell.style.height = cellSize
		}
	}
}

// Aside buttons

	// Eraser
eraser.addEventListener('click', eraserToggle)

document.addEventListener('keydown', function(e) {
	if (e.keyCode === 69) {
		eraserToggle()
	}
})

function eraserToggle() {
	eraser.classList.toggle('btn-toggle-on')	
}

	// Grid 
grid.addEventListener('click', function() {
	this.classList.toggle('btn-toggle-on');
	gridField.classList.toggle('border-none')
})

	// New list
newList.addEventListener('click', function() {
	cells.forEach(function(cell) {
		cell.style.backgroundColor = 'white'
	})
})

	// Color picker
colorPickerTrigger.addEventListener('click', function() {
	colorPicker.click()
})

colorPicker.addEventListener('change', function() {
	cellColor = this.value
})