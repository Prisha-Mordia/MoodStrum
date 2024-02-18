const openCameraBtn = document.getElementById('openCameraBtn');
const webcamModal = document.getElementById('webcamModal');
const closeBtn = document.getElementById('closeBtn');

openCameraBtn.addEventListener('click', () => {
    webcamModal.classList.remove('hidden');
    openWebcam();
});

closeBtn.addEventListener('click', () => {
    webcamModal.classList.add('hidden');
});

function openWebcam() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            const webcamPreview = document.getElementById('webcamPreview');
            webcamPreview.srcObject = stream;
        })
        .catch((error) => {
            console.error('Error accessing webcam:', error);
        });
}
