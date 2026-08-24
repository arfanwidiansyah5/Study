const DB_NAME='BelajarDB';
const DB_VERSION=1;
let db;

function openDB(){
 return new Promise(resolve=>{
 let req=indexedDB.open(DB_NAME,DB_VERSION);
 req.onupgradeneeded=e=>{
  db=e.target.result;
  db.createObjectStore('progress',{keyPath:'id'});
  db.createObjectStore('notes',{keyPath:'id',autoIncrement:true});
 };
 req.onsuccess=e=>{db=e.target.result;resolve(db)};
 });
}

function saveProgress(data){
 let tx=db.transaction('progress','readwrite');
 tx.objectStore('progress').put(data);
}

function getProgress(){
 return new Promise(resolve=>{
 let tx=db.transaction('progress');
 let r=tx.objectStore('progress').getAll();
 r.onsuccess=()=>resolve(r.result);
 });
}

openDB();