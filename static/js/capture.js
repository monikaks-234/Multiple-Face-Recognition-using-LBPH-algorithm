document.getElementById('startCapture').addEventListener('click', () => {
    const userName = document.getElementById('user_name').value.trim();
    if (!userName) {
        document.getElementById('status').textContent = 'Please enter a name.';
        document.getElementById('status').classList.add('text-red-400');
        return;
    }
    fetch('/capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `user_name=${encodeURIComponent(userName)}`
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'started') {
            document.getElementById('videoContainer').classList.remove('hidden');
            document.getElementById('startCapture').classList.add('hidden');
            document.getElementById('stopCapture').classList.remove('hidden');
            document.getElementById('status').textContent = `Capturing faces for ${data.user_name}...`;
            document.getElementById('status').classList.remove('text-red-400');
        } else {
            document.getElementById('status').textContent = data.message;
            document.getElementById('status').classList.add('text-red-400');
        }
    });
});

document.getElementById('stopCapture').addEventListener('click', () => {
    fetch('/stop_camera', { method: 'POST' })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'stopped') {
            document.getElementById('videoContainer').classList.add('hidden');
            document.getElementById('startCapture').classList.remove('hidden');
            document.getElementById('stopCapture').classList.add('hidden');
            document.getElementById('status').textContent = 'Capture stopped.';
        }
    });
});