const app=document.getElementById('app');
function home(){app.innerHTML='<div class="card"><h2>Selamat datang</h2><p>Lanjutkan belajar dan lihat progress kamu.</p></div>'}
function learn(){app.innerHTML='<div class="card"><h2>Pilih Jenjang</h2><p>SD • SMP • SMA</p></div>'}
function quiz(){app.innerHTML='<div class="card"><h2>Quiz</h2><p>Latihan soal akan tersedia.</p></div>'}
function flash(){app.innerHTML='<div class="card"><h2>Flashcard</h2><p>Belajar konsep penting.</p></div>'}
function progress(){app.innerHTML='<div class="card"><h2>Progress</h2><p>Belum ada data.</p></div>'}
home();