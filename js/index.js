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
        prev.index = imgs.length-1;
        next.index = 1;
    }
    syncPageAndImg(index)
    prev.index = index-1;
    next.index = index+1;
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
  if (index >= imgs.length) {
    clickPage(0);
  } else {
    clickPage(index);
  }
  
}

// -----------内容区--------------
let sp3 = document.getElementById("sp3");
let sp2 = document.getElementById("sp2");
let sp1 = document.getElementById("sp1");
let count = parseInt(sp3.innerText);
function checkTime(i) {
  if (i < 0) {
      return '00';
  }
  if (i < 10) {
    return "0" + i;
  }
  return i;
}

function countdown() {
  count--;
  if (parseInt(sp1.innerText) === 0 && (parseInt(sp2.innerText) === 0) && (count <= 0) ) {
    sp3.innerText = checkTime(0);
  }
  
  if (count < 0) {
    count = 59;
    if (parseInt(sp1.innerText) === 0 && (parseInt(sp2.innerText) - 1 <= 0)) {
      sp2.innerText = checkTime(0);
    }
    
    if (parseInt(sp2.innerText) -1 < 0) {
      sp2.innerText = 59;
      sp1.innerText = checkTime(parseInt(sp1.innerText) - 1) ;
      
    } else {
        sp2.innerText = checkTime(parseInt(sp2.innerText) -1);
    }
  }
  
  sp3.innerText = checkTime(count);
}
let downInterval = setInterval(countdown, 1000);

