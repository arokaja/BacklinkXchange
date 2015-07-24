var linkarray = [
"Free <a rel='dofollow' href='http://backlinkxchange.blogspot.com/?utm_source=backlink&utm_medium=exchange%20link&utm_campaign=Free%20BacklinkXchange' title='Free Backlink Exchange' target='_blank'>BacklinkXchange</a> + <a href='http://astavera.blogspot.com' title='Astavera' target='_blank'>Astavera</a>",
"Free <a rel='dofollow' href='http://backlinkxchange.blogspot.com/?utm_source=backlink&utm_medium=exchange%20link&utm_campaign=Free%20BacklinkXchange' title='Free Backlink Exchange' target='_blank'>BacklinkXchange</a> + <a href='http://padhangwengi.blogspot.com' title='Padhang Wengi' target='_blank'>Padhang Wengi</a>" // No comma after last entry
];

function RndLink() {
var run= Math.floor(Math.random()*linkarray.length);
document.getElementById('BacklinkX').innerHTML=linkarray[run];
}
onload = function() { RndLink(); 
}
