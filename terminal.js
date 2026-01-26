class LIAMISANNOYINGTerminal {
    constructor() {
        this.terminal = document.getElementById('terminal');
        this.commandInput = document.getElementById('commandInput');
        this.currentDir = 'C:\\LIAMISANNOYING';
        this.history = [];
        this.historyIndex = -1;
        this.poetryCorpus = [
            {string:"This room, the one in which", first:"adjective", last:"pronoun"}, 
            {string:"I spend", first:"pronoun", last:"verb"}, 
            {string:"my sleeping hours", first:"pronoun", last:"noun"}, 
            {string:"is not the", first:"article", last:"article"},
            {string:"safe place", first:"adjective", last:"noun"}, 
            {string:"for thought", first:"conjunction", last:"noun"},
            {string:"and calm", first:"conjunction", last:"adjective"}, 
            {string:"that I once thought", first:"pronoun", last:"noun"}, 
            {string:"it was", first:"pronoun", last:"verb"},
            {string:"unfortunately, it seems", first:"adverb", last:"verb"}, 
            {string:"now that I have", first:"conjunction", last:"verb"},
            {string:"been sharing my", first:"verb", last:"pronoun"}, 
            {string:"quiet space", first:"adverb", last:"noun"}, 
            {string:"with something else", first:"preposition", last:"adjective"}, 
            {string:"- and for quite a while", first:"conjunction", last:"noun"}, 
            {string:"something that", first:"pronoun", last:"adjective"}, 
            {string:"moves along", first:"verb", last:"preposition"}, 
            {string:"the ground", first:"article", last:"noun"}, 
            {string:"that waits for", first:"adjective", last:"conjunction"}, 
            {string:"the perfect moment", first:"article", last:"conjunction"}, 
            {string:"to lie", first:"preposition", last:"verb"}, 
            {string:"to me.", first:"preposition", last:"fs"}
        ];
        this.artShapes = [];
        this.artRunning = false;
        
        this.init();
    }

    init() {
        this.bootSequence();
        this.setupEventListeners();
        this.commandInput.focus();
    }

    bootSequence() {
        const bootArt = `Version 1 New`;
        
        document.getElementById('boot-sequence').textContent = bootArt;
    }

    setupEventListeners() {
        this.commandInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.executeCommand(this.commandInput.value.trim());
                this.commandInput.value = '';
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.navigateHistory(-1);
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.navigateHistory(1);
            } else if (e.key === 'Tab') {
                e.preventDefault();
                this.autocomplete();
            }
        });        // Keep focus on terminal
        document.addEventListener('click', () => {
            this.commandInput.focus();
        });
    }

    navigateHistory(direction) {
        if (direction === -1 && this.historyIndex > 0) {
            this.historyIndex--;
            this.commandInput.value = this.history[this.historyIndex];
        } else if (direction === 1 && this.historyIndex < this.history.length - 1) {
            this.historyIndex++;
            this.commandInput.value = this.history[this.historyIndex];
        } else if (direction === 1 && this.historyIndex === this.history.length - 1) {
            this.historyIndex++;
            this.commandInput.value = '';
        }
    }

    autocomplete() {
        const input = this.commandInput.value.toLowerCase();
        const commands = Object.keys(this.commands);
        const matches = commands.filter(cmd => cmd.startsWith(input));
        
        if (matches.length === 1) {
            this.commandInput.value = matches[0];
        } else if (matches.length > 1) {
            this.addOutput(`Possible matches: ${matches.join(', ')}`);
        }
    }

    executeCommand(input) {
        if (!input) return;
        
        this.history.push(input);
        this.historyIndex = this.history.length;
        
        // Add command to output
        this.addOutput(`${this.currentDir}>${input}`, 'command');
        
        const parts = input.toLowerCase().split(' ');
        const command = parts[0];
        const args = parts.slice(1);
        
        if (this.commands[command]) {
            this.commands[command].call(this, args);
        } else {
            this.addOutput(`'${command}' is not recognized as an internal or external command.`, 'error');
            this.addOutput(`Type 'help' for available commands.`);
        }
        
        this.scrollToBottom();
    }

    addOutput(text, className = '') {
        const outputDiv = document.createElement('div');
        outputDiv.className = `output ${className}`;
        outputDiv.textContent = text;
        
        const inputLine = this.terminal.querySelector('.input-line');
        this.terminal.insertBefore(outputDiv, inputLine);
    }

    addOutputHTML(html, className = '') {
        const outputDiv = document.createElement('div');
        outputDiv.className = `output ${className}`;
        outputDiv.innerHTML = html;
        
        const inputLine = this.terminal.querySelector('.input-line');
        this.terminal.insertBefore(outputDiv, inputLine);
    }

    scrollToBottom() {
        this.terminal.scrollTop = this.terminal.scrollHeight;
    }

    commands = {
        help: function(args) {
            if (args.length === 0) {
                this.addOutput('Available commands:');
                this.addOutput('');
                Object.keys(this.commands).forEach(cmd => {
                    this.addOutput(`  ${cmd.padEnd(12)} - ${this.getCommandDescription(cmd)}`);
                });
            } else {
                const command = args[0];
                if (this.commands[command]) {
                    this.addOutput(`${command}: ${this.getCommandDescription(command)}`);
                } else {
                    this.addOutput(`Command '${command}' not found.`, 'error');
                }
            }
        },

        clear: function(args) {
            const outputs = this.terminal.querySelectorAll('.output');
            outputs.forEach(output => output.remove());
        },

        dir: function(args) {
            this.addOutput(' Directory of C:\\LIAMISANNOYING');
            this.addOutput('');
            this.addOutput('ART.EXE      42,688  01-25-25  6:41p');
            this.addOutput('POETRY.EXE   38,912  01-25-25  6:41p');
            this.addOutput('GAMES.EXE    35,328  01-25-25  6:41p');
            this.addOutput('TOOLS.EXE    31,744  01-25-25  6:41p');
            this.addOutput('ABOUT.EXE    28,160  01-25-25  6:41p');
            this.addOutput('README.TXT   15,360  01-25-25  6:41p');
            this.addOutput('       7 file(s)        212,192 bytes');
            this.addOutput('       2 dir(s)     1,234,567 bytes free');
        },

        art: function(args) {
            this.addOutput('Starting ASCII Art Generator...');
            this.addOutput('Press ESC to exit');
            this.addOutput('');
            
            this.artRunning = true;
            this.startArtAnimation();
        },

        poetry: function(args) {
            const lines = args.length > 0 ? parseInt(args[0]) : 3;
            if (isNaN(lines) || lines < 1 || lines > 10) {
                this.addOutput('Usage: poetry [1-10]', 'error');
                return;
            }
            
            this.addOutput('Generating poetry...');
            this.addOutput('');
            
            let lastindex = null;
            let correctLanguage = "";
            let join = " ";
            
            for (let i = 0; i < lines; i++) {
                let index = Math.floor(Math.random() * this.poetryCorpus.length);
                
                if (lastindex != null) {
                    // Simple grammar rules
                    if (this.poetryCorpus[lastindex].last === "conjunction") {
                        while (this.poetryCorpus[index].first === "conjunction") {
                            index = Math.floor(Math.random() * this.poetryCorpus.length);
                        }
                    }
                }
                
                correctLanguage += join + this.poetryCorpus[index].string;
                lastindex = index;
                join = " ";
            }
            
            this.addOutput(correctLanguage);
            this.addOutput('');
            this.addOutput('Poetry generation complete.');
        },

        games: function(args) {
            this.addOutput('╔══════════════════════════════════════════════════════════════╗');
            this.addOutput('║                       GAMES DIRECTORY                        ║');
            this.addOutput('╚══════════════════════════════════════════════════════════════╝');
            this.addOutput('');
            this.addOutput('Available games:');
            this.addOutput('  1. LIAMBLASTER.EXE - Space shooter game');
            this.addOutput('');
            this.addOutput('Type "run liamblaster" to start the game');
        },

        tools: function(args) {
            this.addOutput('╔══════════════════════════════════════════════════════════════╗');
            this.addOutput('║                       TOOLS DIRECTORY                        ║');
            this.addOutput('╚══════════════════════════════════════════════════════════════╝');
            this.addOutput('');
            this.addOutput('Available tools:');
            this.addOutput('  1. POTSU.EXE - Utility tool');
            this.addOutput('');
            this.addOutput('Type "run potsu" to start the tool');
        },

        about: function(args) {
            this.addOutput('╔══════════════════════════════════════════════════════════════╗');
            this.addOutput('║                    SYSTEM INFORMATION                       ║');
            this.addOutput('╚══════════════════════════════════════════════════════════════╝');
            this.addOutput('');
            this.addOutput('LIAMISANNOYING Terminal v1.0');
            this.addOutput('Copyright (C) 2025 Liam Mitchell');
            this.addOutput('');
            this.addOutput('The most useless terminal application ever created.');
            this.addOutput('Featuring:');
            this.addOutput('  - ASCII Art Generator');
            this.addOutput('  - Random Poetry Generator');
            this.addOutput('  - Game Launcher');
            this.addOutput('  - Utility Tools');
            this.addOutput('');
            this.addOutput('GitHub: https://github.com/Liamisannoying-Project');
            this.addOutput('');
            this.addOutput('Hello, humans of planet earth (and probably of class M106).');
            this.addOutput('If you are reading this, then I am NOT dead.');
        },

        run: function(args) {
            if (args.length === 0) {
                this.addOutput('Usage: run <program>', 'error');
                return;
            }
            
            const program = args[0].toLowerCase();
            switch (program) {
                case 'liamblaster':
                    this.addOutput('Loading LIAMBLASTER.EXE...');
                    this.addOutput('This would launch the LiamBlaster game');
                    this.addOutput('(Game implementation coming soon)');
                    break;
                case 'potsu':
                    this.addOutput('Loading POTSU.EXE...');
                    this.addOutput('This would launch the Potsu utility tool');
                    this.addOutput('(Tool implementation coming soon)');
                    break;
                default:
                    this.addOutput(`Program '${program}' not found.`, 'error');
                    this.addOutput('Type "games" or "tools" to see available programs.');
            }
        },

        ver: function(args) {
            this.addOutput('LIAMISANNOYING Terminal v1.0');
            this.addOutput('MS-DOS Version 6.22 compatible');
            this.addOutput('Copyright (C) 2025 Liam Mitchell');
        },

        date: function(args) {
            const now = new Date();
            this.addOutput(`Current date: ${now.toLocaleDateString()}`);
            this.addOutput(`Current time: ${now.toLocaleTimeString()}`);
        },

        echo: function(args) {
            this.addOutput(args.join(' '));
        },

        exit: function(args) {
            this.addOutput('Are you sure you want to exit? (Y/N)');
            // In a real implementation, this would handle user confirmation
        },

        matrix: function(args) {
            this.addOutput('Initiating Matrix rain effect...');
            this.startMatrixEffect();
        }
    };

    getCommandDescription(command) {
        const descriptions = {
            help: 'Show help for commands',
            clear: 'Clear the screen',
            dir: 'List directory contents',
            art: 'Start ASCII art generator',
            poetry: 'Generate random poetry [lines]',
            games: 'Show available games',
            tools: 'Show available tools',
            about: 'Show system information',
            run: 'Execute a program',
            ver: 'Show version information',
            date: 'Show current date and time',
            echo: 'Display message',
            exit: 'Exit terminal',
            matrix: 'Start Matrix rain effect'
        };
        return descriptions[command] || 'No description available';
    }

    startArtAnimation() {
        const canvas = document.createElement('canvas');
        canvas.width = 600;
        canvas.height = 400;
        canvas.style.border = '1px solid #0F0';
        canvas.style.background = '#000';
        
        const ctx = canvas.getContext('2d');
        let shapes = [];
        
        function createShape() {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 50 + 10,
                type: Math.floor(Math.random() * 3),
                speed: Math.random() * 2 + 0.5
            };
        }
        
        for (let i = 0; i < 10; i++) {
            shapes.push(createShape());
        }
        
        function animate() {
            if (!this.artRunning) return;
            
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.strokeStyle = '#0F0';
            ctx.lineWidth = 1;
            
            shapes.forEach(shape => {
                ctx.beginPath();
                
                if (shape.type === 0) {
                    // Circle
                    ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2);
                } else if (shape.type === 1) {
                    // Square
                    ctx.rect(shape.x - shape.size/2, shape.y - shape.size/2, shape.size, shape.size);
                } else {
                    // Triangle
                    ctx.moveTo(shape.x, shape.y - shape.size);
                    ctx.lineTo(shape.x - shape.size, shape.y + shape.size);
                    ctx.lineTo(shape.x + shape.size, shape.y + shape.size);
                    ctx.closePath();
                }
                
                ctx.stroke();
                
                shape.y += shape.speed;
                if (shape.y > canvas.height + shape.size) {
                    shape.y = -shape.size;
                    shape.x = Math.random() * canvas.width;
                }
            });
            
            requestAnimationFrame(animate);
        }.bind(this);
        
        this.addOutputHTML('<br>');
        this.terminal.insertBefore(canvas, this.terminal.querySelector('.input-line'));
        animate();
        
        // Handle ESC key to stop animation
        const stopArt = (e) => {
            if (e.key === 'Escape' && this.artRunning) {
                this.artRunning = false;
                canvas.remove();
                this.addOutput('Art animation stopped.');
                document.removeEventListener('keydown', stopArt);
            }
        };
        
        document.addEventListener('keydown', stopArt);
    }

    startMatrixEffect() {
        const canvas = document.createElement('canvas');
        canvas.width = window.innerWidth - 40;
        canvas.height = 300;
        canvas.style.border = '1px solid #0F0';
        canvas.style.background = '#000';
        
        const ctx = canvas.getContext('2d');
        const columns = Math.floor(canvas.width / 10);
        const drops = Array(columns).fill(1);
        
        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#0F0';
            ctx.font = '10px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = String.fromCharCode(0x30A0 + Math.random() * 96);
                ctx.fillText(text, i * 10, drops[i] * 10);
                
                if (drops[i] * 10 > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        
        const interval = setInterval(draw, 33);
        
        this.addOutputHTML('<br>');
        this.terminal.insertBefore(canvas, this.terminal.querySelector('.input-line'));
        
        // Stop after 10 seconds
        setTimeout(() => {
            clearInterval(interval);
            canvas.remove();
            this.addOutput('Matrix effect ended.');
        }, 10000);
    }
}

// Window functions
function minimizeTerminal() {
    document.querySelector('.terminal-content').style.display = 'none';
}

function maximizeTerminal() {
    const content = document.querySelector('.terminal-content');
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

function closeTerminal() {
    if (confirm('Are you sure you want to exit LIAMISANNOYING Terminal?')) {
        window.close();
    }
}

// Initialize terminal when page loads
document.addEventListener('DOMContentLoaded', () => {
    new LIAMISANNOYINGTerminal();
});
