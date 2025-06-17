document.getElementById('trainModel').addEventListener('click', () => {
    document.getElementById('status').textContent = 'Training model...';
    fetch('/train')
    .then(response => response.text())
    .then(html => {
        document.open();
        document.write(html);
        document.close();
    });
});