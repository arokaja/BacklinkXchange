var linkarray = [
"<a href='http://astavera.blogspot.com' title='Astavera' target='_blank'>Astavera</a>",
"<a href='http://padhangwengi.blogspot.com' title='Padhang Wengi' target='_blank'>Padhang Wengi</a>",
"<a href='http://thequran-online.blogspot.com' title='Al-Quran Online' target='_blank'>Al-Quran Online</a>" // No comma after last entry
];

function RndLink() {
var run= Math.floor(Math.random()*linkarray.length);
document.getElementById('BacklinkX').innerHTML=linkarray[run];
}
onload = function() { RndLink(); 
}
