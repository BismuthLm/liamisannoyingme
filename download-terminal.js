// Force download of the terminal file
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
        downloadTerminal();
    }
});
