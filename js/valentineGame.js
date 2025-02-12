
const mazeContainer = document.getElementById('maze-container');
const message = document.getElementById('message');
const size = 10;
let playerPosition = { x: 0, y: 0 };
const goalPosition = { x: 9, y: 9 };

const initialMaze = [
    [0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 0, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 1, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 2]
];

function createMaze() {
    mazeContainer.innerHTML = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (initialMaze[i][j] === 1) cell.classList.add('wall');
            if (initialMaze[i][j] === 2) cell.classList.add('heart');
            if (i === playerPosition.y && j === playerPosition.x) cell.classList.add('player');
            mazeContainer.appendChild(cell);
        }
    }
}

function movePlayer(dx, dy) {
    const newX = playerPosition.x + dx;
    const newY = playerPosition.y + dy;
    if (newX >= 0 && newX < size && newY >= 0 && newY < size && initialMaze[newY][newX] !== 1) {
        playerPosition = { x: newX, y: newY };
        createMaze();
        checkWin();
    }
}

function checkWin() {
    if (playerPosition.x === goalPosition.x && playerPosition.y === goalPosition.y) {
        showGif();
        message.classList.remove('hidden');
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') movePlayer(0, -1);
    if (e.key === 'ArrowDown') movePlayer(0, 1);
    if (e.key === 'ArrowLeft') movePlayer(-1, 0);
    if (e.key === 'ArrowRight') movePlayer(1, 0);
});

// Touch swipe controls for mobile
let startX, startY;
mazeContainer.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
});

mazeContainer.addEventListener('touchend', (e) => {
    const touch = e.changedTouches[0];
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;

    if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 30) movePlayer(1, 0);     // Swipe Right
        if (dx < -30) movePlayer(-1, 0);   // Swipe Left
    } else {
        if (dy > 30) movePlayer(0, 1);     // Swipe Down
        if (dy < -30) movePlayer(0, -1);   // Swipe Up
    }
});
function showGif() {
    mazeContainer.innerHTML = ''; 

    // First GIF
    const gifImage = document.createElement('img');
    gifImage.src = 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGJyd2M3dm1zdXRjcHhiZWlsdmJ5MDl3aXU4MmVvY3ZoZmNxM2hjcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tLcf4s4DK3tZmYUn6F/giphy.gif';
    gifImage.alt = 'You Found the Way to My Heart!';
    gifImage.classList.add('gif');
    mazeContainer.appendChild(gifImage);

    setTimeout(() => {
        // Hide the first GIF
        gifImage.style.display = 'none';
        message.classList.add('hidden');
        document.getElementById('message-2').classList.remove('hidden');

        // Create a new GIF element
        const newGifImage = document.createElement('img');
        newGifImage.src = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHZsb3RuMTFncWhlN3VveHhoNGV1ZTRleGU2NnZvdjQzM2hnc3BqYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/19CU3F5v6fq4LawRGu/giphy.gif';
        newGifImage.alt = 'Happy valentines day';
        newGifImage.classList.add('gif');
        mazeContainer.appendChild(newGifImage);
    }, 5000);
}

createMaze();