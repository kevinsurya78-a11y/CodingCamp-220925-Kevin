const form = document.getElementById('contactForm');
const output = document.getElementById('output');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('messageBox').value.trim();

  // Validasi sederhana
  if (name === "" || email === "" || phone === "" || message === "") {
    alert("Semua field wajib diisi!");
    return;
  }

  if (!/^[0-9]{10,13}$/.test(phone)) {
    alert("Nomor telepon harus angka 10-13 digit!");
    return;
  }

  output.innerHTML = `
    <h3>Output Data</h3>
    <p><strong>Waktu:</strong> ${new Date().toLocaleString()}</p>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Nomor Telepon:</strong> ${phone}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;

  form.reset();
});