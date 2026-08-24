let materials=[];
const app=document.getElementById('app');
fetch('data/materials.json').then(r=>r.json()).then(d=>{materials=d;home()});
function home(){app.innerHTML='<div class="card"><h2>📚 Selamat datang</h2><p>Lanjutkan belajar dan lihat progress kamu.</p></div>'}
function learn(){app.innerHTML='<div class="card"><h2>Pilih Materi</h2>'+materials.map(m=>`<button onclick="openMaterial(${m.id})">${m.jenjang} ${m.kelas}<br>${m.mapel} - ${m.judul}</button>`).join('')+'</div>'}
function openMaterial(id){const m=materials.find(x=>x.id===id);app.innerHTML=`<div class="card"><h2>${m.judul}</h2><h3>Tujuan Pembelajaran</h3><p>${m.tujuan}</p><p>${m.isi}</p><h3>Rangkuman</h3><p>${m.rangkuman}</p><button onclick="saveProgress(${m.id})">✅ Tandai selesai</button></div>`}
function quiz(){app.innerHTML='<div class="card"><h2>📝 Quiz</h2><p>Quiz MVP akan segera aktif.</p></div>'}
function flash(){app.innerHTML='<div class="card"><h2>🧠 Flashcard</h2><p>Flashcard MVP akan segera aktif.</p></div>'}
function progress(){app.innerHTML='<div class="card"><h2>📊 Progress</h2><p>Progress belajar tersimpan di perangkat.</p></div>'}
function saveProgress(id){localStorage.setItem('done_'+id,'true');alert('Materi selesai!')}
