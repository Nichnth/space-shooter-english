// Game Variables
const gameContainer = document.getElementById('gameContainer');
const player = document.getElementById('player');
const gameOverScreen = document.getElementById('gameOverScreen');

const scoreDisplay = document.getElementById('score');
const waveDisplay = document.getElementById('wave');
const healthDisplay = document.getElementById('health');
const enemyCountDisplay = document.getElementById('enemyCount');
const finalScoreDisplay = document.getElementById('finalScore');
const waveReachedDisplay = document.getElementById('waveReached');
const quizWordDisplay = document.getElementById('quizWord');

// Vocabulary Data - Embedded directly to avoid CORS issues with file:// protocol
let vocabularyList = [
    {english: "Roof", indonesian: "Atap"},
    {english: "Wall", indonesian: "Dinding"},
    {english: "Floor", indonesian: "Lantai"},
    {english: "Ceiling", indonesian: "Langit-langit"},
    {english: "Door", indonesian: "Pintu"},
    {english: "Window", indonesian: "Jendela"},
    {english: "Living room", indonesian: "Ruang tamu"},
    {english: "Bedroom", indonesian: "Kamar tidur"},
    {english: "Bathroom", indonesian: "Kamar mandi"},
    {english: "Kitchen", indonesian: "Dapur"},
    {english: "Dining room", indonesian: "Ruang makan"},
    {english: "Garage", indonesian: "Garasi"},
    {english: "Garden", indonesian: "Taman"},
    {english: "Fence", indonesian: "Pagar"},
    {english: "Gate", indonesian: "Gerbang"},
    {english: "Chair", indonesian: "Kursi"},
    {english: "Table", indonesian: "Meja"},
    {english: "Sofa", indonesian: "Sofa"},
    {english: "Television", indonesian: "Televisi"},
    {english: "Bed", indonesian: "Kasur"},
    {english: "Pillow", indonesian: "Bantal"},
    {english: "Blanket", indonesian: "Selimut"},
    {english: "Wardrobe", indonesian: "Lemari pakaian"},
    {english: "Mirror", indonesian: "Cermin"},
    {english: "Sink", indonesian: "Wastafel"},
    {english: "Stove", indonesian: "Kompor"},
    {english: "Refrigerator", indonesian: "Kulkas"},
    {english: "Plate", indonesian: "Piring"},
    {english: "Glass", indonesian: "Gelas"},
    {english: "Spoon", indonesian: "Sendok"},
    {english: "Rice", indonesian: "Nasi"},
    {english: "Bread", indonesian: "Roti"},
    {english: "Noodle", indonesian: "Mi"},
    {english: "Meat", indonesian: "Daging"},
    {english: "Chicken", indonesian: "Ayam"},
    {english: "Fish", indonesian: "Ikan"},
    {english: "Egg", indonesian: "Telur"},
    {english: "Soup", indonesian: "Sup"},
    {english: "Vegetables", indonesian: "Sayuran"},
    {english: "Fruit", indonesian: "Buah"},
    {english: "Apple", indonesian: "Apel"},
    {english: "Banana", indonesian: "Pisang"},
    {english: "Orange", indonesian: "Jeruk"},
    {english: "Cake", indonesian: "Kue"},
    {english: "Cookie", indonesian: "Biskuit"},
    {english: "Chocolate", indonesian: "Cokelat"},
    {english: "Cheese", indonesian: "Keju"},
    {english: "Milk", indonesian: "Susu"},
    {english: "Water", indonesian: "Air"},
    {english: "Coffee", indonesian: "Kopi"},
    {english: "Tea", indonesian: "Teh"},
    {english: "Juice", indonesian: "Jus"},
    {english: "Sugar", indonesian: "Gula"},
    {english: "Salt", indonesian: "Garam"},
    {english: "Pepper", indonesian: "Merica"},
    {english: "Butter", indonesian: "Mentega"},
    {english: "Honey", indonesian: "Madu"},
    {english: "Ice cream", indonesian: "Es krim"},
    {english: "Salad", indonesian: "Salad"},
    {english: "Peanut", indonesian: "Kacang"},
    {english: "Student", indonesian: "Murid"},
    {english: "Teacher", indonesian: "Guru"},
    {english: "Principal", indonesian: "Kepala sekolah"},
    {english: "Classroom", indonesian: "Ruang kelas"},
    {english: "Whiteboard", indonesian: "Papan tulis putih"},
    {english: "Marker", indonesian: "Spidol"},
    {english: "Eraser", indonesian: "Penghapus"},
    {english: "Desk", indonesian: "Meja tulis"},
    {english: "Book", indonesian: "Buku"},
    {english: "Notebook", indonesian: "Buku catatan"},
    {english: "Pen", indonesian: "Pulpen"},
    {english: "Pencil", indonesian: "Pensil"},
    {english: "Ruler", indonesian: "Penggaris"},
    {english: "Bag", indonesian: "Tas"},
    {english: "Uniform", indonesian: "Seragam"},
    {english: "Library", indonesian: "Perpustakaan"},
    {english: "Laboratory", indonesian: "Laboratorium"},
    {english: "Canteen", indonesian: "Kantin"},
    {english: "Playground", indonesian: "Taman bermain"},
    {english: "Lesson", indonesian: "Pelajaran"},
    {english: "Homework", indonesian: "Pekerjaan rumah"},
    {english: "Exam", indonesian: "Ujian"},
    {english: "Score", indonesian: "Nilai"},
    {english: "Subject", indonesian: "Mata pelajaran"},
    {english: "Math", indonesian: "Matematika"},
    {english: "Science", indonesian: "Ilmu pengetahuan alam"},
    {english: "History", indonesian: "Sejarah"},
    {english: "Geography", indonesian: "Geografi"},
    {english: "Art", indonesian: "Seni"},
    {english: "Manager", indonesian: "Manajer"},
    {english: "Employee", indonesian: "Karyawan"},
    {english: "Colleague", indonesian: "Rekan kerja"},
    {english: "Boss", indonesian: "Atasan"},
    {english: "Meeting", indonesian: "Rapat"},
    {english: "Presentation", indonesian: "Presentasi"},
    {english: "Document", indonesian: "Dokumen"},
    {english: "Report", indonesian: "Laporan"},
    {english: "File", indonesian: "Berkas"},
    {english: "Folder", indonesian: "Map"},
    {english: "Computer", indonesian: "Komputer"},
    {english: "Keyboard", indonesian: "Papan ketik"},
    {english: "Mouse", indonesian: "Tetikus"},
    {english: "Monitor", indonesian: "Layar"},
    {english: "Printer", indonesian: "Mesin pencetak"},
    {english: "Photocopier", indonesian: "Mesin fotokopi"},
    {english: "Telephone", indonesian: "Telepon"},
    {english: "Email", indonesian: "Surat elektronik"},
    {english: "Salary", indonesian: "Gaji"},
    {english: "Promotion", indonesian: "Promosi"},
    {english: "Resignation", indonesian: "Pengunduran diri"},
    {english: "Interview", indonesian: "Wawancara"},
    {english: "Schedule", indonesian: "Jadwal"},
    {english: "Deadline", indonesian: "Tenggat waktu"},
    {english: "Project", indonesian: "Proyek"},
    {english: "Client", indonesian: "Klien"},
    {english: "Contract", indonesian: "Kontrak"},
    {english: "Signature", indonesian: "Tanda tangan"},
    {english: "Road", indonesian: "Jalan"},
    {english: "Street", indonesian: "Jalanan"},
    {english: "Highway", indonesian: "Jalan raya"},
    {english: "Intersection", indonesian: "Persimpangan"},
    {english: "Traffic light", indonesian: "Lampu lalu lintas"},
    {english: "Zebra crossing", indonesian: "Tempat penyeberangan"},
    {english: "Sidewalk", indonesian: "Trotoar"},
    {english: "Sign", indonesian: "Rambu"},
    {english: "Direction", indonesian: "Arah"},
    {english: "Bridge", indonesian: "Jembatan"},
    {english: "Tunnel", indonesian: "Terowongan"},
    {english: "Roundabout", indonesian: "Bundaran"},
    {english: "Vehicle", indonesian: "Kendaraan"},
    {english: "Car", indonesian: "Mobil"},
    {english: "Motorcycle", indonesian: "Sepeda motor"},
    {english: "Bus", indonesian: "Bus"},
    {english: "Truck", indonesian: "Truk"},
    {english: "Bicycle", indonesian: "Sepeda"},
    {english: "Taxi", indonesian: "Taksi"},
    {english: "Pedestrian", indonesian: "Pejalan kaki"},
    {english: "Driver", indonesian: "Pengemudi"},
    {english: "Passenger", indonesian: "Penumpang"},
    {english: "Traffic jam", indonesian: "Kemacetan"},
    {english: "Accident", indonesian: "Kecelakaan"},
    {english: "Parking lot", indonesian: "Tempat parkir"},
    {english: "Toll booth", indonesian: "Gerbang tol"},
    {english: "Gas station", indonesian: "Pom bensin"},
    {english: "Map", indonesian: "Peta"},
    {english: "Destination", indonesian: "Tujuan"},
    {english: "Distance", indonesian: "Jarak"}
];

// Game State
const gameState = {
    playerX: 0,
    playerY: 0,
    score: 0,
    health: 3,
    wave: 1,
    maxHealth: 3,
    gameActive: false,
    gamePaused: false,
    enemies: [],
    projectiles: [],
    currentQuizEnglish: '',
    currentQuizIndonesian: '',
    correctLabelRevealed: false,
};

// Keyboard Input
const keys = {};
window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
    if (e.key === ' ') {
        e.preventDefault();
        shootProjectile();
    }
});
window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

// Get Container Dimensions
function getContainerDimensions() {
    return {
        width: gameContainer.clientWidth,
        height: gameContainer.clientHeight,
    };
}

// Initialize Player Position
function initializePlayer() {
    const { width, height } = getContainerDimensions();
    gameState.playerX = width / 2 - 15;
    gameState.playerY = height - 50;
    updatePlayerPosition();
}

// Update Player Position
function updatePlayerPosition() {
    player.style.left = gameState.playerX + 'px';
    player.style.top = gameState.playerY + 'px';
}

// Player Movement
function movePlayer() {
    const { width, height } = getContainerDimensions();
    const moveSpeed = 2.5;

    if ((keys['ArrowLeft'] || keys['a'] || keys['A']) && gameState.playerX > 0) {
        gameState.playerX -= moveSpeed;
    }
    if ((keys['ArrowRight'] || keys['d'] || keys['D']) && gameState.playerX < width - 30) {
        gameState.playerX += moveSpeed;
    }
    if ((keys['ArrowUp'] || keys['w'] || keys['W']) && gameState.playerY > height / 2) {
        gameState.playerY -= moveSpeed;
    }
    if ((keys['ArrowDown'] || keys['s'] || keys['S']) && gameState.playerY < height - 50) {
        gameState.playerY += moveSpeed;
    }
    updatePlayerPosition();
}

// Shoot Projectile
function shootProjectile() {
    if (!gameState.gameActive) return;

    const projectile = {
        x: gameState.playerX + 15,
        y: gameState.playerY - 10,
        width: 4,
        height: 15,
        speed: 8,
    };

    gameState.projectiles.push(projectile);

    const projectileEl = document.createElement('div');
    projectileEl.className = 'projectile';
    projectileEl.style.left = projectile.x + 'px';
    projectileEl.style.top = projectile.y + 'px';
    projectile.element = projectileEl;
    gameContainer.appendChild(projectileEl);
}

// Spawn Enemies
function spawnWave() {
    if (vocabularyList.length === 0) return; // Wait for vocab to load

    const { width, height } = getContainerDimensions();
    const enemyCount = getEnemyCountForWave(gameState.wave);

    gameState.enemies = [];
    gameState.correctLabelRevealed = false; // Reset for new wave

    // Select random vocabulary for this wave's quiz
    const randomVocab = vocabularyList[Math.floor(Math.random() * vocabularyList.length)];
    gameState.currentQuizEnglish = randomVocab.english;
    gameState.currentQuizIndonesian = randomVocab.indonesian;
    quizWordDisplay.textContent = gameState.currentQuizEnglish;

    // Create array of different Indonesian words (one correct, rest random)
    const indonesianWords = [gameState.currentQuizIndonesian];
    for (let i = 1; i < enemyCount; i++) {
        let randomWord = vocabularyList[Math.floor(Math.random() * vocabularyList.length)].indonesian;
        while (indonesianWords.includes(randomWord)) {
            randomWord = vocabularyList[Math.floor(Math.random() * vocabularyList.length)].indonesian;
        }
        indonesianWords.push(randomWord);
    }
    // Shuffle the array so correct answer is in random position
    indonesianWords.sort(() => Math.random() - 0.5);

    for (let i = 0; i < enemyCount; i++) {
        const enemy = {
            x: Math.random() * (width - 40),
            y: Math.random() * (height / 2),
            width: 30,
            height: 30,
            speedX: (Math.random() - 0.5) * 1,
            speedY: (Math.random() - 0.5) * 0.8 + 0.3,
            health: 1,
            indonesianWord: indonesianWords[i],
            labelRevealed: false,
        };

        const enemyEl = document.createElement('div');
        enemyEl.className = 'enemy';
        enemyEl.style.left = enemy.x + 'px';
        enemyEl.style.top = enemy.y + 'px';
        enemyEl.innerHTML = `<span class="enemy-word">${enemy.indonesianWord}</span>`;
        enemy.element = enemyEl;
        gameContainer.appendChild(enemyEl);

        gameState.enemies.push(enemy);
    }

    updateEnemyCount();
}

// Get Enemy Count for Wave
function getEnemyCountForWave(wave) {
    const pattern = [3, 4, 5, 6];
    return pattern[(wave - 1) % pattern.length];
}

// Update Enemies
function updateEnemies() {
    const { width, height } = getContainerDimensions();

    gameState.enemies.forEach((enemy) => {
        enemy.x += enemy.speedX;
        enemy.y += enemy.speedY;

        // Bounce off walls
        if (enemy.x <= 0 || enemy.x >= width - 30) {
            enemy.speedX *= -1;
        }
        if (enemy.y <= 0 || enemy.y >= height - 50) {
            enemy.speedY *= -1;
        }

        // Keep in bounds
        enemy.x = Math.max(0, Math.min(enemy.x, width - 30));
        enemy.y = Math.max(0, Math.min(enemy.y, height - 50));

        enemy.element.style.left = enemy.x + 'px';
        enemy.element.style.top = enemy.y + 'px';
    });
}

// Update Projectiles
function updateProjectiles() {
    const { height } = getContainerDimensions();

    gameState.projectiles = gameState.projectiles.filter((proj) => {
        proj.y -= proj.speed;
        proj.element.style.top = proj.y + 'px';

        // Check if projectile is still in bounds
        if (proj.y <= 0) {
            // Remove from DOM
            if (proj.element.parentNode) {
                proj.element.parentNode.removeChild(proj.element);
            }
            return false; // Remove from array
        }

        return true; // Keep in array
    });
}

// Collision Detection
function checkCollisions() {
    gameState.projectiles.forEach((projectile, projIndex) => {
        gameState.enemies.forEach((enemy, enemyIndex) => {
            if (
                projectile.x < enemy.x + 25 &&
                projectile.x + projectile.width > enemy.x &&
                projectile.y < enemy.y + 25 &&
                projectile.y + projectile.height > enemy.y
            ) {
                // Enemy hit
                createExplosion(enemy.x, enemy.y);

                // Check if correct enemy was shot
                const isCorrect = enemy.indonesianWord === gameState.currentQuizIndonesian;
                if (isCorrect && !enemy.labelRevealed) {
                    // Correct! Hide label and mark as revealed
                    const enemyWord = enemy.element.querySelector('.enemy-word');
                    if (enemyWord) {
                        enemyWord.style.display = 'none';
                    }
                    enemy.labelRevealed = true;
                    gameState.correctLabelRevealed = true;
                    gameState.score += 10;
                    createCorrectFeedback(enemy.x, enemy.y);
                } else if (isCorrect && enemy.labelRevealed) {
                    // Destroy the enemy that already had label revealed
                    enemy.element.parentNode.removeChild(enemy.element);
                    gameState.score += 10;
                    createCorrectFeedback(enemy.x, enemy.y);
                    gameState.enemies.splice(enemyIndex, 1);
                } else if (!isCorrect && gameState.correctLabelRevealed) {
                    // After label revealed, can destroy other enemies
                    enemy.element.parentNode.removeChild(enemy.element);
                    gameState.score += 10;
                    createCorrectFeedback(enemy.x, enemy.y);
                    gameState.enemies.splice(enemyIndex, 1);
                } else {
                    // Wrong enemy hit before label revealed - game over immediately
                    enemy.element.parentNode.removeChild(enemy.element);
                    createWrongFeedback(enemy.x, enemy.y);
                    endGame(true);
                    
                    // Remove projectile
                    if (projectile.element.parentNode) {
                        projectile.element.parentNode.removeChild(projectile.element);
                    }
                    gameState.projectiles.splice(projIndex, 1);
                    return;
                }

                // Remove projectile
                if (projectile.element.parentNode) {
                    projectile.element.parentNode.removeChild(projectile.element);
                }
                gameState.projectiles.splice(projIndex, 1);

                updateScore();
            }
        });
    });

    // Check if enemies hit player
    gameState.enemies.forEach((enemy) => {
        if (
            gameState.playerX < enemy.x + 25 &&
            gameState.playerX + 30 > enemy.x &&
            gameState.playerY < enemy.y + 25 &&
            gameState.playerY + 40 > enemy.y
        ) {
            // Player hit
            gameState.health--;
            updateHealth();
            createExplosion(gameState.playerX, gameState.playerY);

            if (gameState.health <= 0) {
                endGame();
            }
        }
    });
}

// Create Explosion Effect
function createExplosion(x, y) {
    const explosion = document.createElement('div');
    explosion.className = 'explosion';
    explosion.textContent = '💥';
    explosion.style.left = x + 'px';
    explosion.style.top = y + 'px';
    gameContainer.appendChild(explosion);

    setTimeout(() => {
        if (explosion.parentNode) {
            explosion.parentNode.removeChild(explosion);
        }
    }, 500);
}

// Create Correct Feedback
function createCorrectFeedback(x, y) {
    const feedback = document.createElement('div');
    feedback.className = 'feedback correct-feedback';
    feedback.textContent = '✓';
    feedback.style.left = x + 'px';
    feedback.style.top = y + 'px';
    gameContainer.appendChild(feedback);

    setTimeout(() => {
        if (feedback.parentNode) {
            feedback.parentNode.removeChild(feedback);
        }
    }, 500);
}

// Create Wrong Feedback
function createWrongFeedback(x, y) {
    const feedback = document.createElement('div');
    feedback.className = 'feedback wrong-feedback';
    feedback.textContent = '✗';
    feedback.style.left = x + 'px';
    feedback.style.top = y + 'px';
    gameContainer.appendChild(feedback);

    setTimeout(() => {
        if (feedback.parentNode) {
            feedback.parentNode.removeChild(feedback);
        }
    }, 500);
}

// Update Score Display
function updateScore() {
    scoreDisplay.textContent = gameState.score;
    // Update high score if current score is higher
    const currentHighScore = parseInt(localStorage.getItem('spaceShooterHighScore') || '0');
    if (gameState.score > currentHighScore) {
        localStorage.setItem('spaceShooterHighScore', gameState.score);
        updateHighScoreDisplay();
    }
}

// Update High Score Display
function updateHighScoreDisplay() {
    const highScore = localStorage.getItem('spaceShooterHighScore') || '0';
    document.getElementById('highScore').textContent = highScore;
    document.getElementById('startHighScore').textContent = highScore;
}
function updateHealth() {
    healthDisplay.textContent = gameState.health;
}

// Update Enemy Count Display
function updateEnemyCount() {
    enemyCountDisplay.textContent = gameState.enemies.length;
}

// Check if Wave is Complete
function checkWaveComplete() {
    if (gameState.enemies.length === 0 && gameState.correctLabelRevealed) {
        gameState.wave++;
        waveDisplay.textContent = gameState.wave;
        spawnWave();
    }
}

// End Game
function endGame(showAnswer = false) {
    gameState.gameActive = false;
    finalScoreDisplay.textContent = gameState.score;
    waveReachedDisplay.textContent = gameState.wave;
    
    // Show correct answer if player shot wrong enemy
    const correctAnswerDisplay = document.getElementById('correctAnswerDisplay');
    if (showAnswer) {
        correctAnswerDisplay.style.display = 'block';
        document.getElementById('correctAnswer').textContent = gameState.currentQuizIndonesian;
    } else {
        correctAnswerDisplay.style.display = 'none';
    }
    
    gameOverScreen.classList.remove('hidden');
    // Update high score on game over
    updateHighScoreDisplay();
}

// Game Loop
function gameLoop() {
    if (!gameState.gameActive || gameState.gamePaused) return;

    movePlayer();
    updateEnemies();
    updateProjectiles();
    checkCollisions();
    checkWaveComplete();

    requestAnimationFrame(gameLoop);
}

// Start Game
function startGame() {
    // Reset game state
    gameState.score = 0;
    gameState.health = 3;
    gameState.wave = 1;
    gameState.gameActive = true;
    gameState.gamePaused = false;
    
    // Hide start screen, show game screen
    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
    document.getElementById('pauseScreen').classList.add('hidden');
    document.getElementById('gameOverScreen').classList.add('hidden');
    
    // Update displays
    updateScore();
    updateHealth();
    waveDisplay.textContent = gameState.wave;
    
    // Initialize player and spawn enemies
    initializePlayer();
    spawnWave();
    gameLoop();
}

// Toggle Pause
function togglePause() {
    if (!gameState.gameActive) return;
    
    gameState.gamePaused = !gameState.gamePaused;
    const pauseScreen = document.getElementById('pauseScreen');
    const pauseBtn = document.getElementById('pauseBtn');
    
    if (gameState.gamePaused) {
        pauseScreen.classList.remove('hidden');
        pauseBtn.textContent = '▶ RESUME';
    } else {
        pauseScreen.classList.add('hidden');
        pauseBtn.textContent = '⏸ PAUSE';
        gameLoop();
    }
}

// Initialize Game
window.addEventListener('load', () => {
    // Show start screen
    updateHighScoreDisplay();
});

// Handle Resize
window.addEventListener('resize', () => {
    initializePlayer();
});

// Add keyboard shortcut for pause (P key)
window.addEventListener('keydown', (e) => {
    if (e.key === 'p' || e.key === 'P') {
        if (gameState.gameActive) {
            togglePause();
        }
    }
});
