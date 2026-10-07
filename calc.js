const v=id=>parseFloat(document.getElementById(id).value)||0,sel=id=>document.getElementById(id).value;
const num=(x,d=2)=>isFinite(x)?x.toLocaleString('en-US',{maximumFractionDigits:d}):'–',usd=x=>num(x,2)+' USDT',pct=x=>num(x,2)+'%';
function show(id,rows){document.getElementById(id).innerHTML=rows.map(([k,val,c=''])=>`<div class="row ${c}"><span>${k}</span><b>${val}</b></div>`).join('')}