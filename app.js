let wrap = document.querySelector('.wrapper').clientWidth
let crsCounter = 0;
let position = 0;
let count = document.querySelector('.crs-count')
setInterval(() => {
    crsCounter++;
    setImgPosition(crsCounter)
}, 3000)

function setImgPosition(crsCounter) {
    count.children[(crsCounter + 2) % 3].innerHTML = '○';
    Array.prototype.map.call(count.children,
        item => item.innerHTML = '○');
    position = wrap * (crsCounter % 3);
    let container = document.querySelector('.container');
    container.style.transform = `translateX(${-position}px)`;
    count.children[crsCounter % 3].innerHTML = '●';
}
{
    let wrap = document.querySelector('.wrapper')
    let offsetX = wrap.clientWidth + count.clientHeight
    count.style.transform = `translateX(${offsetX}px) rotate(90deg)`
}
let crsCount = document.querySelector('.crs-count')
crsCount.addEventListener('click', function (e) {
    crsCounter = e.target.dataset.count;
    setImgPosition(crsCounter);
})

let tabEvent = document.querySelector('.tab-container')
let selectedTab = 0;
tabEvent.addEventListener('click', function (e) {
    let selected = this.children[selectedTab];
    let explanation = this.nextElementSibling.children
    explanation[selectedTab].classList.add('hidden');
    selected.classList.remove('tab-selected');
    selectedTab = e.target.dataset.order;
    explanation[selectedTab].classList.remove('hidden');
    e.target.classList.add('tab-selected');
})