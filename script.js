// Discord butonlarını seç
const joinBtns = document.querySelectorAll('#joinBtn, #joinBtn2');
joinBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Discord davet linkine yönlendir
    window.open('https://discord.gg/nwW3PCnr', '_blank');
    // Kullanıcıya bilgilendirme mesajı
    alert('Discord sunucumuza hoş geldiniz! (wep siteden geldim)');
  });
});

// Basit form doğrulama ve mailto ile gönderim
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name  = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg   = document.getElementById('message').value.trim();
  if (!/^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/.test(name)) {
    return alert('Adınızı sadece harflerle girin.');
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return alert('Geçerli bir e-posta girin.');
  }
  // mailto linkiyle aç
  const subject = encodeURIComponent('Yeni İletişim Mesajı');
  const body    = encodeURIComponent(`Ad: ${name}\nE-posta: ${email}\nMesaj: ${msg}`);
  window.location.href = `mailto:muhammeteminayhan1@gmail.com?subject=${subject}&body=${body}`;
});
