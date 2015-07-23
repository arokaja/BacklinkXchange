var linkarray = [
"Free <a href='http://backlinkxchange.blogspot.com' title='Free Backlink Exchange' target='_blank'>BacklinkX</a>change + <a href='http://astavera.blogspot.com' title='Astavera' target='_blank'>Astavera</a>",
"Free <a href='http://backlinkxchange.blogspot.com' title='Free Backlink Exchange' target='_blank'>BacklinkX</a>change + <a href='http://padhangwengi.blogspot.com' title='Padhang Wengi' target='_blank'>Padhang Wengi</a>" // No comma after last entry
];

function RndLink() {
var run= Math.floor(Math.random()*linkarray.length);
document.getElementById('BacklinkX').innerHTML=linkarray[run];
}
onload = function() { RndLink(); 
}
