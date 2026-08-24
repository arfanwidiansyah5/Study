function searchMaterial(keyword,items){
 return items.filter(x=>JSON.stringify(x).toLowerCase().includes(keyword.toLowerCase()));
}
