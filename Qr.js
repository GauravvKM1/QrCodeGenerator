const btn = document.getElementById("qr-button");
const input = document.getElementById("input-qr");
const qrimg = document.querySelector('#qrimg');

btn.addEventListener('click', () => {
  const inputValue = input.value;
  if (inputValue === '') {
    alert("Please enter a valid URL");
    return;
  } else {
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`; // added encodeURIComponent
    qrimg.alt = `QR Code for ${inputValue}`;
    // qrimg.style.display = 'block'; // uncommented this line to ensure image display
  }
});