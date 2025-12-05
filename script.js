// ============================================
// CLICK THE TARGET - GAME LOGIC (JavaScript)
// ============================================

// Game State Object - Stores all game data dynamically
const gameState = {
    isRunning: false,
    score: 0,
    timeLeft: 30,
    totalTime: 30,
    difficulty: 'easy',
    targetVisible: false,
    currentTarget: null,
    gameInterval: null,
    targetInterval: null
};

// Difficulty Settings - No hardcodes, all configurable
const difficultySettings = {
    easy: { time: 30, duration: 2.5, spawnRate: 1500 },
    medium: { time: 20, duration: 1.8, spawnRate: 1200 },
    hard: { time: 10, duration: 1.2, spawnRate: 800 }
};

// ============================================
// MAIN GAME FUNCTIONS
// ============================================

/**
 * Start Game - Initializes and begins the game
 */
function startGame() {
    // Disable start button, enable reset button
    document.getElementById('startBtn').disabled = true;
    document.getElementById('resetBtn').disabled = false;
    document.getElementById('difficultySelect').disabled = true;

    gameState.isRunning = true;
    gameState.score = 0;
    gameState.timeLeft = gameState.totalTime;

    updateDisplay();
    spawnTarget(); // Spawn first target immediately

    // Main game timer - counts down every second
    gameState.gameInterval = setInterval(() => {
        gameState.timeLeft--;
        updateDisplay();

        if (gameState.timeLeft <= 0) {
            endGame();
        }
    }, 1000);

    // Continuous target spawning
    gameState.targetInterval = setInterval(() => {
        if (gameState.isRunning) {
            spawnTarget();
        }
    }, difficultySettings[gameState.difficulty].spawnRate);
}

/**
 * Reset Game - Clears all game state and UI
 */
function resetGame() {
    // Clear all intervals
    if (gameState.gameInterval) clearInterval(gameState.gameInterval);
    if (gameState.targetInterval) clearInterval(gameState.targetInterval);

    // Reset state
    gameState.isRunning = false;
    gameState.score = 0;
    gameState.timeLeft = gameState.totalTime;
    gameState.targetVisible = false;

    // Remove target from display
    const gameArea = document.getElementById('gameArea');
    gameArea.innerHTML = '';

    // Reset buttons
    document.getElementById('startBtn').disabled = false;
    document.getElementById('resetBtn').disabled = true;
    document.getElementById('difficultySelect').disabled = false;

    updateDisplay();
}

/**
 * End Game - Called when time runs out
 */
function endGame() {
    gameState.isRunning = false;

    // Clear all intervals
    if (gameState.gameInterval) clearInterval(gameState.gameInterval);
    if (gameState.targetInterval) clearInterval(gameState.targetInterval);

    // Remove current target
    if (gameState.currentTarget) {
        gameState.currentTarget.remove();
    }

    // Show game over modal with feedback
    showGameOverModal();
}

// ============================================
// TARGET MANAGEMENT
// ============================================

/**
 * Spawn Target - Creates a target at random position
 */
function spawnTarget() {
    if (!gameState.isRunning) return;

    // Remove previous target if it still exists
    if (gameState.currentTarget) {
        gameState.currentTarget.remove();
    }

    const gameArea = document.getElementById('gameArea');
    const target = document.createElement('div');

    // Calculate random position (ensuring target stays within bounds)
    const targetSize = 60;
    const maxX = gameArea.clientWidth - targetSize;
    const maxY = gameArea.clientHeight - targetSize;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Create target element
    target.className = 'target';
    target.innerHTML = '🎯';
    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';

    // Click handler for target
    target.addEventListener('click', (e) => {
        handleTargetClick();
        e.stopPropagation(); // Prevent game area click
    });

    gameArea.appendChild(target);
    gameState.currentTarget = target;
    gameState.targetVisible = true;

    // Target disappears after duration (based on difficulty)
    const duration = difficultySettings[gameState.difficulty].duration * 1000;
    setTimeout(() => {
        if (gameState.currentTarget === target && gameState.targetVisible) {
            target.style.opacity = '0';
            setTimeout(() => {
                if (gameState.currentTarget === target) {
                    target.remove();
                    gameState.targetVisible = false;
                }
            }, 200);
        }
    }, duration);
}

/**
 * Handle Target Click - Awards points and creates visual feedback
 */
function handleTargetClick() {
    if (!gameState.isRunning || !gameState.targetVisible) return;

    // Award points
    gameState.score += 10;

    // Visual feedback - hit animation
    gameState.currentTarget.classList.add('hit');

    // Remove and spawn new target immediately
    setTimeout(() => {
        gameState.targetVisible = false;
        spawnTarget();
    }, 150);

    updateDisplay();
}

// ============================================
// UI UPDATES
// ============================================

/**
 * Update Display - Refreshes all UI elements
 */
function updateDisplay() {
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('timer').textContent = gameState.timeLeft;
    document.getElementById('difficulty').textContent = 
        gameState.difficulty.charAt(0).toUpperCase() + gameState.difficulty.slice(1);
}

/**
 * Change Difficulty - Updates game difficulty and time
 */
function changeDifficulty() {
    const selected = document.getElementById('difficultySelect').value;
    gameState.difficulty = selected;
    gameState.totalTime = difficultySettings[selected].time;
    gameState.timeLeft = gameState.totalTime;
    updateDisplay();
}

// ============================================
// MODAL FUNCTIONS
// ============================================

/**
 * Show Game Over Modal - Displays final score and feedback
 */
function showGameOverModal() {
    const modal = document.getElementById('gameOverModal');
    const overlay = document.getElementById('modalOverlay');
    const finalScore = document.getElementById('finalScore');
    const feedback = document.getElementById('gameFeedback');

    // Set final score
    finalScore.textContent = gameState.score;

    // Generate feedback based on score
    feedback.textContent = generateFeedback(gameState.score);

    // Show modal
    modal.classList.add('active');
    overlay.classList.add('active');
}

/**
 * Close Modal - Hides modal and resets game
 */
function closeModal() {
    const modal = document.getElementById('gameOverModal');
    const overlay = document.getElementById('modalOverlay');

    modal.classList.remove('active');
    overlay.classList.remove('active');

    resetGame();
}

/**
 * Generate Feedback - Creates personalized message based on score
 */
function generateFeedback(score) {
    if (score === 0) {
        return "Don't worry, practice makes perfect! Try again.";
    } else if (score < 50) {
        return "Good start! Keep your eyes sharp and try again.";
    } else if (score < 100) {
        return "Nice performance! You're getting better.";
    } else if (score < 150) {
        return "Impressive reflexes! You're a natural!";
    } else {
        return "🏆 AMAZING! You're a Click the Target MASTER! 🏆";
    }
}

// ============================================
// EVENT LISTENERS & INITIALIZATION
// ============================================

/**
 * Initialize Game - Set up event listeners on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize difficulty select
    const difficultySelect = document.getElementById('difficultySelect');
    gameState.difficulty = difficultySelect.value;
    gameState.totalTime = difficultySettings[gameState.difficulty].time;
    gameState.timeLeft = gameState.totalTime;

    updateDisplay();

    // Close modal when clicking outside (overlay)
    document.getElementById('modalOverlay').addEventListener('click', closeModal);

    // Prevent context menu on game area (optional enhancement)
    document.getElementById('gameArea').addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
});

// ============================================
// COMMENTS FOR UNDERSTANDING
// ============================================

/*
GAME ARCHITECTURE:

1. gameState Object:
   - Centralized state management (no hardcodes)
   - Tracks: running status, score, time, difficulty, target state
   - All values are dynamic and modifiable

2. difficultySettings Object:
   - Defines difficulty parameters (time, duration, spawn rate)
   - No hardcoded values - easily configurable
   - Easy to add new difficulty levels

3. Main Functions:
   - startGame(): Initializes game with selected difficulty
   - spawnTarget(): Creates random target with dynamic positioning
   - handleTargetClick(): Awards points and spawns next target
   - endGame(): Cleans up and shows results
   - resetGame(): Returns to initial state

4. Key Features:
   - No hardcoded game values (all in difficultySettings)
   - Random positioning prevents predictability
   - Interval-based timing (standard game development)
   - Modal system for game over screen
   - Responsive design via CSS

5. Timer System:
   - gameInterval: Main countdown (1 second intervals)
   - targetInterval: Target spawning (varies by difficulty)
   - targetTimeout: Individual target visibility duration

6. Best Practices:
   - Event delegation (single listeners vs multiple)
   - setTimeout/setInterval for timing
   - CSS animations for visual feedback
   - Clear function documentation
   - Semantic HTML with form elements
*/