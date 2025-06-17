document.getElementById('startRecognition').addEventListener('click', () => {
    document.getElementById('videoFeed').classList.remove('hidden');
    document.getElementById('startRecognition').classList.add('hidden');
    document.getElementById('stopRecognition').classList.remove('hidden');
});

document.getElementById('stopRecognition').addEventListener('click', () => {
    fetch('/stop_camera', { method: 'POST' })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'stopped') {
            document.getElementById('videoFeed').classList.add('hidden');
            document.getElementById('startRecognition').classList.remove('hidden');
            document.getElementById('stopRecognition').classList.add('hidden');
        }
    });
});