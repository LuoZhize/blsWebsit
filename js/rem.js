let pixelRatio = 1 / window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,initial-scale=' + pixelRatio + ',minimum-scale=' + pixelRatio + ',maximum-scale=' + pixelRatio + ',user-scalable=no" />');
let html = document.getElementsByTagName('html')[0];
getRem();
window.addEventListener('resize', getRem, false);

function getRem() {
    let pageWidth = html.getBoundingClientRect().width;
    html.style.fontSize = pageWidth / 64 + 'px';
}