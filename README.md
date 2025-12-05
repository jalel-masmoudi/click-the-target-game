# 🎯 Click the Target - Game Project

**Subject:** Tutored Project (HTML5, CSS3, JavaScript)  
**Student Level:** 2nd Year - Computer Science  
**authors:** Jalel Masmoudi & Mahdi kammoun
**Instructor:** Mohamed Karim Abdmouleh  
**Date:** December 2025

---

## 📋 Project Overview

"Click the Target" is an interactive reflex-based game built with pure HTML5, CSS3, and JavaScript. The player must quickly click randomly appearing circles before they disappear. The game includes three difficulty levels and tracks the player's score.

**Why This Game?**
- ✅ Simple logic (perfect for 2-week development)
- ✅ No complex algorithms required
- ✅ Fully meets all technical requirements
- ✅ No hardcoded values (all dynamic/configurable)
- ✅ Professional production-ready code

---

## 🎮 How to Play

1. **Open** `index.html` in any modern web browser
2. **Select a difficulty** level (Easy/Medium/Hard)
3. **Click "Start Game"** to begin
4. **Click the yellow target circles** as quickly as possible
5. **Score 10 points** for each successful click
6. **Game ends** when the timer reaches 0
7. **Click "Play Again"** to restart

**Difficulty Levels:**
- **Easy:** 30 seconds (2.5s per target)
- **Medium:** 20 seconds (1.8s per target)
- **Hard:** 10 seconds (1.2s per target)

---

## 📁 Project Structure

```
project-folder/
├── index.html      # Semantic HTML5 structure
├── style.css       # Responsive CSS3 with animations
├── script.js       # Pure JavaScript game logic
└── README.md       # This file
```

---

## 🛠️ Technical Features

### HTML5 ✓
- **Semantic Structure:** `<header>`, `<main>`, `<footer>`
- **Proper Form Elements:** `<select>`, `<button>` with accessibility
- **Organized Layout:** Game area, stats, controls in separate containers

### CSS3 ✓
- **Responsive Design:** Works on desktop, tablet, mobile
- **CSS Variables:** Easy customization (colors, spacing, transitions)
- **Animations:** Bounce intro, pulse effects, fade-in modal
- **Modern Layout:** Flexbox & CSS Grid
- **Visual Effects:** Gradients, shadows, smooth transitions

### JavaScript ✓
- **Event Handling:** Click, keyboard (select), DOMContentLoaded
- **DOM Manipulation:** Create/remove elements dynamically
- **Timer Functions:** `setInterval()` (main timer), `setTimeout()` (effects)
- **Score System:** Dynamic point tracking
- **Game Over Modal:** Beautiful end-game display
- **State Management:** Centralized game state object

---

## 💻 Key Implementation Details

### No Hardcodes Strategy

**All game values are stored in a configuration object:**

```javascript
const difficultySettings = {
    easy: { time: 30, duration: 2.5, spawnRate: 1500 },
    medium: { time: 20, duration: 1.8, spawnRate: 1200 },
    hard: { time: 10, duration: 1.2, spawnRate: 800 }
};
```

**Want to change difficulty?** Edit one object. No search-and-replace needed.

### Dynamic Target Positioning

```javascript
// Random position within game area bounds
const randomX = Math.random() * maxX;
const randomY = Math.random() * maxY;
```

**Result:** Every target appears in a unique location—impossible to memorize patterns.

### Game State Management

```javascript
const gameState = {
    isRunning: false,
    score: 0,
    timeLeft: 30,
    difficulty: 'easy',
    // ... etc
};
```

**Benefits:**
- Single source of truth for game data
- Easy to save/load game state later
- Clear variable naming

---

## 🚀 How to Use

### Installation
1. Download all three files (index.html, style.css, script.js)
2. Keep them in the **same folder**
3. Open `index.html` in your browser (or use VS Code Live Server)

### Development with VS Code
```bash
# If you have VS Code Live Server extension
Right-click index.html → "Open with Live Server"
```

### Testing Checklist
- [ ] Game starts/resets properly
- [ ] Score increases on target click
- [ ] Timer counts down correctly
- [ ] Targets spawn at random positions
- [ ] Targets disappear after duration
- [ ] Game ends when time runs out
- [ ] Game over modal displays
- [ ] Difficulty selector changes behavior
- [ ] Responsive on mobile/tablet
- [ ] No console errors

---

## 📊 Code Quality

### Organization
- ✅ Functions grouped logically
- ✅ Detailed JSDoc comments
- ✅ Semantic HTML with meaningful IDs
- ✅ CSS variables for maintainability

### Best Practices
- ✅ No inline styles (all in CSS)
- ✅ Event delegation where appropriate
- ✅ Clear variable naming
- ✅ DRY principle (Don't Repeat Yourself)
- ✅ Proper error handling with null checks

### Performance
- ✅ Efficient DOM manipulation
- ✅ Proper interval cleanup (no memory leaks)
- ✅ CSS animations (hardware accelerated)
- ✅ Minimal repaints/reflows

---

## 🎨 Customization Guide

### Change Colors

Edit CSS variables in `style.css`:

```css
:root {
    --primary-color: #2196F3;        /* Change this */
    --secondary-color: #FF5722;      /* And this */
    --success-color: #4CAF50;        /* And this */
}
```

### Adjust Difficulty

Edit JavaScript object in `script.js`:

```javascript
const difficultySettings = {
    easy: { time: 30, duration: 2.5, spawnRate: 1500 },
    // Change any number here
};
```

### Customize Target

Change the emoji or styling:

```javascript
target.innerHTML = '🎯';  // Change emoji
// Or add custom styles
target.style.background = 'linear-gradient(...)';
```

---

## 📱 Browser Compatibility

Tested and working on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Android Chrome)

---

## 🔍 Debugging Tips

**Game won't start?**
- Check browser console (F12 → Console tab)
- Verify all 3 files are in the same folder
- Ensure JavaScript is enabled

**Targets not appearing?**
- Check that `gameArea` element has proper CSS width/height
- Verify `spawnTarget()` function is being called

**Performance issues?**
- Reduce spawn rate in difficultySettings
- Check for console errors

---

## 📈 Future Enhancement Ideas

1. **Sound Effects:** Add click/success sounds
2. **Multiplayer:** Compare scores with friends
3. **Leaderboard:** Store high scores in localStorage
4. **Power-ups:** Temporary score multipliers
5. **Levels:** Progressive difficulty increases
6. **Themes:** Dark mode toggle
7. **Mobile Optimization:** Touch events for better mobile feel

---

## 📚 Learning Outcomes

By completing this project, you've demonstrated:

- ✅ **HTML5 Semantic Structure** - Proper use of elements
- ✅ **CSS3 Animations & Transitions** - Visual polish
- ✅ **DOM Manipulation** - Creating/removing elements dynamically
- ✅ **Event Handling** - Click and change events
- ✅ **Timer Functions** - setInterval/setTimeout for game loops
- ✅ **State Management** - Centralized game data
- ✅ **Responsive Design** - Mobile-friendly layout
- ✅ **Clean Code** - Well-commented, maintainable JavaScript

---

## 📞 Support

If you encounter issues:

1. **Check console** (F12) for error messages
2. **Verify file structure** - all files in same folder
3. **Clear browser cache** - sometimes helps
4. **Try different browser** - rule out browser-specific issues

---

## 📄 Submission Notes

**Files to Submit:**
- `index.html`
- `style.css`
- `script.js`
- `README.md` (this file)

**GitHub Setup:**
1. Create a new repository: `click-the-target-game`
2. Push all files to main branch
3. Share repository link with instructor

**Evaluation Date:** Week of 22/12/2025

---

## ✨ Credits

**Project:** Click the Target Game  
**Built with:** HTML5, CSS3, JavaScript (no frameworks)  
**Academic Year:** 2025-2026

---

**Good luck! 🎮 Happy gaming!**
