let imgs = document.getElementsByClassName("swiper-item-img");
let pages = document.getElementsByClassName("swiper-page-bullet");
let index = 0;
let prev = document.getElementById("swiper-prev");
let next = document.getElementById("swiper-next");
prev.index = imgs.length-1;
next.index = 1;
//设置a标签圆点下标
for (let i = 0; i < pages.length; i++) {
        pages[i].index = i;
}

//同步圆点下标和轮播图一致
function syncPageAndImg(_index) {
    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove("on");
    }
    pages[_index].className += " on";
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display="none";
    } 
    imgs[_index].style.display="block";
}

function clickPage(pageIndex) {
    clearInterval(interval)
    syncPageAndImg(pageIndex)
    index = pageIndex;
    prev.index = pageIndex-1;
    next.index = pageIndex+1;
    interval = setInterval(changeImg, 2000);
}

function changeImg() {
    index++;
    if (index >= imgs.length) {
        index = 0;
    }
    syncPageAndImg(index)
}
let interval = setInterval(changeImg, 2000);
function clickPrev(index) {
  if (index < 0) {
    clickPage(imgs.length-1);
  } else {
    clickPage(index);
  }
  
}
function clickNext(index) {
  console.log(index)
  if (index >= imgs.length) {
    clickPage(0);
  } else {
    clickPage(index);
  }
  
}

