document.addEventListener('DOMContentLoaded', function () {

    // Prompt for user
    const userNameSpan = document.getElementById('user-name');
    const userName = prompt("Please enter your name:", "Harli");
    
    // if user left prompt blank or canceled, set default name to guest
    if (userName) {
        userNameSpan.textContent = userName;
    } else {
        userNameSpan.textContent = "Guest";
    }

    // get current time in Asia/Makassar timezone and update every second
    const currentTimeSpan = document.getElementById('current-time');
    function updateTime() {
        const now = new Date();
        currentTimeSpan.textContent = now.toLocaleString('en-GB', { timeZone: 'Asia/Makassar' });
    }
    updateTime();
    setInterval(updateTime, 1000);

    const messageForm = document.getElementById('message-form');
    
    // Handle form submission
    messageForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const nama = document.getElementById('nama').value;
        const tanggalLahir = document.getElementById('tanggal-lahir').value;
        const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked');
        const pesan = document.getElementById('pesan').value;

        if (!nama || !tanggalLahir || !jenisKelamin || !pesan) {
            alert('Please fill out all fields!');
            return;
        }
        document.getElementById('output-nama').textContent = nama;
        document.getElementById('output-tanggal-lahir').textContent = tanggalLahir;
        document.getElementById('output-jenis-kelamin').textContent = jenisKelamin.value;
        document.getElementById('output-pesan').textContent = pesan;
    });
});