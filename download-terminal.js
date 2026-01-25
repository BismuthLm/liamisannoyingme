// Force download of the desktop application
function downloadDesktopApp() {
    // Detect user's platform
    const platform = navigator.platform.toLowerCase();
    let downloadFile = '';
    
    if (platform.includes('mac')) {
        downloadFile = 'LIAMISANNOYING%20Terminal-1.0.0.dmg';
    } else if (platform.includes('win')) {
        // For now, fallback to web version for Windows/Linux
        downloadFile = 'liamisannoying-terminal-standalone.html';
    } else if (platform.includes('linux')) {
        // For now, fallback to web version for Windows/Linux
        downloadFile = 'liamisannoying-terminal-standalone.html';
    } else {
        // Default to web version if platform not detected
        downloadFile = 'liamisannoying-terminal-standalone.html';
    }
    
    const link = document.createElement('a');
    link.href = downloadFile;
    link.download = downloadFile.split('/').pop().replace(/%20/g, ' ');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Force download of the web version (fallback)
function downloadTerminal() {
    const link = document.createElement('a');
    link.href = 'liamisannoying-terminal-standalone.html';
    link.download = 'liamisannoying-terminal.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Auto-download when page loads if coming from download button
window.addEventListener('load', function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('download') === 'true') {
        downloadDesktopApp();
    }
});
