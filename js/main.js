var orgBoard
const huPlayer = 'X'
const aiPlayer = 'Y'
const winCombos = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8]
]

const cells = document.querySelectorAll('.cell')

function startGame(){
	document.querySelector('.endgame').style.display = 'none'
	orgBoard = Array
}