# LIAMISANNOYING Terminal v1.0

A complete MS-DOS style terminal application that brings all the functionality of liamisannoying.me to your desktop!

## 🖥️ Features

### Core Commands
- **`help`** - Display available commands and usage information
- **`clear`** - Clear the terminal screen
- **`dir`** - List directory contents (simulated)
- **`ver`** - Show version information
- **`date`** - Display current date and time
- **`echo`** - Display messages to the terminal
- **`exit`** - Exit the terminal application

### Creative Tools
- **`art`** - Start interactive ASCII art generator with animated shapes
- **`poetry [lines]`** - Generate random poetry (1-10 lines)
- **`matrix`** -启动 Matrix rain effect animation

### System Features
- **`games`** - Browse available games
- **`tools`** - Access utility tools
- **`about`** - Display system information
- **`run <program>`** - Execute programs (liamblaster, potsu)

### Advanced Features
- **Command History** - Use ↑/↓ arrows to navigate command history
- **Autocomplete** - Press TAB to autocomplete commands
- **Authentic MS-DOS Interface** - Complete with window controls and scanlines

## 🚀 Installation

### Method 1: Direct Download
1. Download `liamisannoying-terminal.html` from the main website
2. Download `terminal.js` (same directory)
3. Open `liamisannoying-terminal.html` in any modern web browser

### Method 2: Online Trial
Visit https://liamisannoying.me and click "TRY_ONLINE" to test the terminal in your browser.

## 📋 System Requirements

- **Browser**: Chrome, Firefox, Safari, or Edge (modern versions)
- **JavaScript**: Must be enabled
- **Resolution**: Minimum 800x600
- **Memory**: 64MB RAM minimum
- **Storage**: 5MB free space

## 🎮 Usage Guide

### Starting the Terminal
1. Open `liamisannoying-terminal.html` in your browser
2. Wait for the boot sequence to complete
3. Type `help` and press Enter to see available commands

### Basic Navigation
- Type commands at the `C:\LIAMISANNOYING>` prompt
- Press Enter to execute commands
- Use arrow keys to navigate command history
- Press TAB for autocomplete

### Creative Examples

#### Generate ASCII Art
```
C:\LIAMISANNOYING>art
Starting ASCII Art Generator...
Press ESC to exit
```

#### Create Poetry
```
C:\LIAMISANNOYING>poetry 5
Generating poetry...

This room, the one in which I spend my sleeping hours is not the safe place for thought and calm that I once thought it was unfortunately, it seems now that I have been sharing my quiet space with something else - and for quite a while something that moves along the ground that waits for the perfect moment to lie to me.

Poetry generation complete.
```

#### Matrix Effect
```
C:\LIAMISANNOYING>matrix
Initiating Matrix rain effect...
```

## 🔧 Technical Details

### Architecture
- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Styling**: MS-DOS inspired terminal interface
- **Animations**: Canvas-based ASCII art and effects
- **Compatibility**: Cross-browser compatible

### File Structure
```
liamisannoying-terminal.html    # Main terminal interface
terminal.js                     # Terminal engine and commands
README-TERMINAL.md             # This documentation
```

## 🐛 Troubleshooting

### Common Issues

**Terminal doesn't load properly**
- Ensure JavaScript is enabled in your browser
- Check browser console for error messages
- Try refreshing the page

**Commands not responding**
- Make sure you're typing commands correctly
- Use `help` to see available commands
- Check for typos in command names

**Art/Matrix effects not working**
- Ensure your browser supports HTML5 Canvas
- Try updating to the latest browser version
- Check if hardware acceleration is enabled

### Performance Tips
- Close other browser tabs for better performance
- Ensure sufficient system memory is available
- Use a modern browser for best results

## 📝 Command Reference

| Command | Description | Example |
|---------|-------------|---------|
| `help` | Show command help | `help art` |
| `clear` | Clear screen | `clear` |
| `dir` | List files | `dir` |
| `art` | ASCII art generator | `art` |
| `poetry` | Generate poetry | `poetry 3` |
| `games` | Show games | `games` |
| `tools` | Show tools | `tools` |
| `about` | System info | `about` |
| `run` | Execute program | `run liamblaster` |
| `ver` | Version info | `ver` |
| `date` | Date/time | `date` |
| `echo` | Display text | `echo Hello` |
| `matrix` | Matrix effect | `matrix` |
| `exit` | Exit terminal | `exit` |

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `liamisannoying-terminal.html`:
```css
:root {
    --terminal-bg: #000;
    --terminal-fg: #0F0;
    --terminal-cursor: #0F0;
}
```

### Adding New Commands
Modify the `commands` object in `terminal.js`:
```javascript
commands: {
    // ... existing commands ...
    mycommand: function(args) {
        this.addOutput('Hello from my command!');
    }
}
```

## 📄 License

Copyright (C) 2025 Liam Mitchell

This software is provided as-is, with no warranties. Use at your own risk.

## 🤝 Contributing

Found a bug or have a feature idea? Visit the GitHub repository:
https://github.com/Liamisannoying-Project

## 📞 Support

For support and updates:
- Website: https://liamisannoying.me
- GitHub: https://github.com/Liamisannoying-Project
- Issues: Report via GitHub Issues

---

**Enjoy the nostalgia!** 🕹️✨
