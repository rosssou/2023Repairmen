

const mainDiv1 = document.getElementById('mainDiv1');
let isDragging1 = false;
let offsetX1, offsetY1;

// mainDiv의 초기 위치 설정
window.addEventListener('DOMContentLoaded', () => {
    mainDiv1.style.left = '1010px';
    mainDiv1.style.top = '160px';
});

// 마우스 클릭 이벤트를 추가합니다.
mainDiv1.addEventListener('mousedown', (e) => {
    isDragging1 = true;

    // 클릭한 위치의 좌표 값을 가져옵니다.
    offsetX1 = e.clientX - mainDiv1.getBoundingClientRect().left;
    offsetY1 = e.clientY - mainDiv1.getBoundingClientRect().top;
});

// 마우스를 놓았을 때 이벤트를 추가합니다.
document.addEventListener('mouseup', () => {
    isDragging1 = false;
});

// 마우스를 따라 움직이는 함수
document.addEventListener('mousemove', (e) => {
    if (isDragging1) {
        // div를 마우스 위치로 이동시킵니다.
        mainDiv1.style.left = (e.clientX - offsetX1) + 'px';
        mainDiv1.style.top = (e.clientY - offsetY1) + 'px';
    }
});

// mainDiv1를 클릭했을 때 애니메이션을 처리하는 함수를 정의합니다.
mainDiv1.addEventListener('click', function() {
    // mainDiv1 요소에 'flipped' 클래스를 토글합니다.
    this.classList.toggle('flipped');

    // 'flipped' 클래스가 적용된 경우
    if (this.classList.contains('flipped')) {
        // mainDiv1 내부의 이미지를 검정색으로 변경합니다.
        this.querySelector('img').style.visibility = 'hidden';

        this.querySelector('.stooltag').style.visibility = 'hidden';
        // mainDiv1의 뒷면에 검은색 배경이 있는 div를 보이도록 설정합니다.
        this.querySelector('.backside1').style.display = 'block';
    } else {
        // 'flipped' 클래스가 적용되지 않은 경우
        // mainDiv1 내부의 이미지를 다시 보이도록 변경합니다.
        this.querySelector('img').style.visibility = 'visible';

        this.querySelector('.stooltag').style.visibility = 'visible';
        // mainDiv1의 뒷면에 검은색 배경이 있는 div를 숨깁니다.
        this.querySelector('.backside1').style.display = 'none';
    }
});






const mainDiv2 = document.getElementById('mainDiv2');
let isDragging2 = false;
let offsetX2, offsetY2;

// mainDiv의 초기 위치 설정
window.addEventListener('DOMContentLoaded', () => {
    mainDiv2.style.left = '1090px';
    mainDiv2.style.top = '210px';
});

// 마우스 클릭 이벤트를 추가합니다.
mainDiv2.addEventListener('mousedown', (e) => {
    isDragging2 = true;

    // 클릭한 위치의 좌표 값을 가져옵니다.
    offsetX2 = e.clientX - mainDiv2.getBoundingClientRect().left;
    offsetY2 = e.clientY - mainDiv2.getBoundingClientRect().top;
});

// 마우스를 놓았을 때 이벤트를 추가합니다.
document.addEventListener('mouseup', () => {
    isDragging2 = false;
});

// 마우스를 따라 움직이는 함수
document.addEventListener('mousemove', (e) => {
    if (isDragging2) {
        // div를 마우스 위치로 이동시킵니다.
        mainDiv2.style.left = (e.clientX - offsetX2) + 'px';
        mainDiv2.style.top = (e.clientY - offsetY2) + 'px';
    }
});

// mainDiv1를 클릭했을 때 애니메이션을 처리하는 함수를 정의합니다.
mainDiv2.addEventListener('click', function() {
    // mainDiv1 요소에 'flipped' 클래스를 토글합니다.
    this.classList.toggle('flipped');

    // 'flipped' 클래스가 적용된 경우
    if (this.classList.contains('flipped')) {
        // mainDiv1 내부의 이미지를 검정색으로 변경합니다.
        this.querySelector('img').style.visibility = 'hidden';
        this.querySelector('.stooltag').style.visibility = 'hidden';

        // mainDiv1의 뒷면에 검은색 배경이 있는 div를 보이도록 설정합니다.
        this.querySelector('.backside2').style.display = 'block';
    } else {
        // 'flipped' 클래스가 적용되지 않은 경우
        // mainDiv1 내부의 이미지를 다시 보이도록 변경합니다.
        this.querySelector('img').style.visibility = 'visible';
        this.querySelector('.stooltag').style.visibility = 'visible';
        // mainDiv1의 뒷면에 검은색 배경이 있는 div를 숨깁니다.
        this.querySelector('.backside2').style.display = 'none';
    }
});



const mainDiv3 = document.getElementById('mainDiv3');
let isDragging3 = false;
let offsetX3, offsetY3;

// mainDiv의 초기 위치 설정
window.addEventListener('DOMContentLoaded', () => {
    mainDiv3.style.left = '940px';
    mainDiv3.style.top = '190px';
});

// 마우스 클릭 이벤트를 추가합니다.
mainDiv3.addEventListener('mousedown', (e) => {
    isDragging3 = true;

    // 클릭한 위치의 좌표 값을 가져옵니다.
    offsetX3 = e.clientX - mainDiv3.getBoundingClientRect().left;
    offsetY3 = e.clientY - mainDiv3.getBoundingClientRect().top;
});

// 마우스를 놓았을 때 이벤트를 추가합니다.
document.addEventListener('mouseup', () => {
    isDragging3 = false;
});

// 마우스를 따라 움직이는 함수
document.addEventListener('mousemove', (e) => {
    if (isDragging3) {
        // div를 마우스 위치로 이동시킵니다.
        mainDiv3.style.left = (e.clientX - offsetX3) + 'px';
        mainDiv3.style.top = (e.clientY - offsetY3) + 'px';
    }
});

// mainDiv1를 클릭했을 때 애니메이션을 처리하는 함수를 정의합니다.
mainDiv3.addEventListener('click', function() {
    // mainDiv1 요소에 'flipped' 클래스를 토글합니다.
    this.classList.toggle('flipped');

    // 'flipped' 클래스가 적용된 경우
    if (this.classList.contains('flipped')) {
        // mainDiv1 내부의 이미지를 검정색으로 변경합니다.
        this.querySelector('img').style.visibility = 'hidden';
        this.querySelector('.stooltag').style.visibility = 'hidden';
        // mainDiv1의 뒷면에 검은색 배경이 있는 div를 보이도록 설정합니다.
        this.querySelector('.backside3').style.display = 'block';
    } else {
        // 'flipped' 클래스가 적용되지 않은 경우
        // mainDiv1 내부의 이미지를 다시 보이도록 변경합니다.
        this.querySelector('img').style.visibility = 'visible';
        this.querySelector('.stooltag').style.visibility = 'visible';
        // mainDiv1의 뒷면에 검은색 배경이 있는 div를 숨깁니다.
        this.querySelector('.backside3').style.display = 'none';
    }
});



const mainDiv4 = document.getElementById('mainDiv4');
let isDragging4 = false;
let offsetX4, offsetY4;

// mainDiv의 초기 위치 설정
window.addEventListener('DOMContentLoaded', () => {
    mainDiv4.style.left = '920px';
    mainDiv4.style.top = '400px';
});

// 마우스 클릭 이벤트를 추가합니다.
mainDiv4.addEventListener('mousedown', (e) => {
    isDragging4 = true;

    // 클릭한 위치의 좌표 값을 가져옵니다.
    offsetX4 = e.clientX - mainDiv4.getBoundingClientRect().left;
    offsetY4 = e.clientY - mainDiv4.getBoundingClientRect().top;
});

// 마우스를 놓았을 때 이벤트를 추가합니다.
document.addEventListener('mouseup', () => {
    isDragging4 = false;
});

// 마우스를 따라 움직이는 함수
document.addEventListener('mousemove', (e) => {
    if (isDragging4) {
        // div를 마우스 위치로 이동시킵니다.
        mainDiv4.style.left = (e.clientX - offsetX4) + 'px';
        mainDiv4.style.top = (e.clientY - offsetY4) + 'px';
    }
});

// mainDiv1를 클릭했을 때 애니메이션을 처리하는 함수를 정의합니다.
mainDiv4.addEventListener('click', function() {
    // mainDiv1 요소에 'flipped' 클래스를 토글합니다.
    this.classList.toggle('flipped');

    // 'flipped' 클래스가 적용된 경우
    if (this.classList.contains('flipped')) {
        // mainDiv1 내부의 이미지를 검정색으로 변경합니다.
        this.querySelector('img').style.visibility = 'hidden';
        this.querySelector('.stooltag').style.visibility = 'hidden';

        // mainDiv1의 뒷면에 검은색 배경이 있는 div를 보이도록 설정합니다.
        this.querySelector('.backside4').style.display = 'block';
    } else {
        // 'flipped' 클래스가 적용되지 않은 경우
        // mainDiv1 내부의 이미지를 다시 보이도록 변경합니다.
        this.querySelector('img').style.visibility = 'visible';
        this.querySelector('.stooltag').style.visibility = 'visible';
        // mainDiv1의 뒷면에 검은색 배경이 있는 div를 숨깁니다.
        this.querySelector('.backside4').style.display = 'none';
    }
});



const mainDiv5 = document.getElementById('mainDiv5');
let isDragging5 = false;
let offsetX5, offsetY5;

// mainDiv의 초기 위치 설정
window.addEventListener('DOMContentLoaded', () => {
    mainDiv5.style.left = '1030px';
    mainDiv5.style.top = '525px';
});

// 마우스 클릭 이벤트를 추가합니다.
mainDiv5.addEventListener('mousedown', (e) => {
    isDragging5 = true;

    // 클릭한 위치의 좌표 값을 가져옵니다.
    offsetX5 = e.clientX - mainDiv5.getBoundingClientRect().left;
    offsetY5 = e.clientY - mainDiv5.getBoundingClientRect().top;
});

// 마우스를 놓았을 때 이벤트를 추가합니다.
document.addEventListener('mouseup', () => {
    isDragging5 = false;
});

// 마우스를 따라 움직이는 함수
document.addEventListener('mousemove', (e) => {
    if (isDragging5) {
        // div를 마우스 위치로 이동시킵니다.
        mainDiv5.style.left = (e.clientX - offsetX5) + 'px';
        mainDiv5.style.top = (e.clientY - offsetY5) + 'px';
    }
});

// mainDiv1를 클릭했을 때 애니메이션을 처리하는 함수를 정의합니다.
mainDiv5.addEventListener('click', function() {
    // mainDiv1 요소에 'flipped' 클래스를 토글합니다.
    this.classList.toggle('flipped');

    // 'flipped' 클래스가 적용된 경우
    if (this.classList.contains('flipped')) {
        // mainDiv1 내부의 이미지를 검정색으로 변경합니다.
        this.querySelector('img').style.visibility = 'hidden';
        this.querySelector('.stooltag').style.visibility = 'hidden';

        // mainDiv1의 뒷면에 검은색 배경이 있는 div를 보이도록 설정합니다.
        this.querySelector('.backside5').style.display = 'block';
    } else {
        // 'flipped' 클래스가 적용되지 않은 경우
        // mainDiv1 내부의 이미지를 다시 보이도록 변경합니다.
        this.querySelector('img').style.visibility = 'visible';
        this.querySelector('.stooltag').style.visibility = 'visible';

        // mainDiv1의 뒷면에 검은색 배경이 있는 div를 숨깁니다.
        this.querySelector('.backside5').style.display = 'none';
    }
});



const mainDiv6 = document.getElementById('mainDiv6');
let isDragging6 = false;
let offsetX6, offsetY6;

// mainDiv의 초기 위치 설정
window.addEventListener('DOMContentLoaded', () => {
    mainDiv6.style.left = '950px';
    mainDiv6.style.top = '590px';
});

// 마우스 클릭 이벤트를 추가합니다.
mainDiv6.addEventListener('mousedown', (e) => {
    isDragging6 = true;

    // 클릭한 위치의 좌표 값을 가져옵니다.
    offsetX6 = e.clientX - mainDiv6.getBoundingClientRect().left;
    offsetY6 = e.clientY - mainDiv6.getBoundingClientRect().top;
});

// 마우스를 놓았을 때 이벤트를 추가합니다.
document.addEventListener('mouseup', () => {
    isDragging6 = false;
});

// 마우스를 따라 움직이는 함수
document.addEventListener('mousemove', (e) => {
    if (isDragging6) {
        // div를 마우스 위치로 이동시킵니다.
        mainDiv6.style.left = (e.clientX - offsetX6) + 'px';
        mainDiv6.style.top = (e.clientY - offsetY6) + 'px';
    }
});

// mainDiv1를 클릭했을 때 애니메이션을 처리하는 함수를 정의합니다.
mainDiv6.addEventListener('click', function() {
    // mainDiv1 요소에 'flipped' 클래스를 토글합니다.
    this.classList.toggle('flipped');

    // 'flipped' 클래스가 적용된 경우
    if (this.classList.contains('flipped')) {
        // mainDiv1 내부의 이미지를 검정색으로 변경합니다.
        this.querySelector('img').style.visibility = 'hidden';
        this.querySelector('.stooltag').style.visibility = 'hidden';

        // mainDiv1의 뒷면에 검은색 배경이 있는 div를 보이도록 설정합니다.
        this.querySelector('.backside6').style.display = 'block';
    } else {
        // 'flipped' 클래스가 적용되지 않은 경우
        // mainDiv1 내부의 이미지를 다시 보이도록 변경합니다.
        this.querySelector('img').style.visibility = 'visible';
        this.querySelector('.stooltag').style.visibility = 'visible';

        // mainDiv1의 뒷면에 검은색 배경이 있는 div를 숨깁니다.
        this.querySelector('.backside6').style.display = 'none';
    }
});



const mainDiv7 = document.getElementById('mainDiv7');
let isDragging7 = false;
let offsetX7, offsetY7;

// mainDiv의 초기 위치 설정
window.addEventListener('DOMContentLoaded', () => {
    mainDiv7.style.left = '1300px';
    mainDiv7.style.top = '110px';
});

// 마우스 클릭 이벤트를 추가합니다.
mainDiv7.addEventListener('mousedown', (e) => {
    isDragging7 = true;

    // 클릭한 위치의 좌표 값을 가져옵니다.
    offsetX7 = e.clientX - mainDiv7.getBoundingClientRect().left;
    offsetY7 = e.clientY - mainDiv7.getBoundingClientRect().top;
});

// 마우스를 놓았을 때 이벤트를 추가합니다.
document.addEventListener('mouseup', () => {
    isDragging7 = false;
});

// 마우스를 따라 움직이는 함수
document.addEventListener('mousemove', (e) => {
    if (isDragging7) {
        // div를 마우스 위치로 이동시킵니다.
        mainDiv7.style.left = (e.clientX - offsetX7) + 'px';
        mainDiv7.style.top = (e.clientY - offsetY7) + 'px';
    }
});

// mainDiv1를 클릭했을 때 애니메이션을 처리하는 함수를 정의합니다.
mainDiv7.addEventListener('click', function() {
    // mainDiv1 요소에 'flipped' 클래스를 토글합니다.
    this.classList.toggle('flipped');

    // 'flipped' 클래스가 적용된 경우
    if (this.classList.contains('flipped')) {
        // mainDiv1 내부의 이미지를 검정색으로 변경합니다.
        this.querySelector('img').style.visibility = 'hidden';
        this.querySelector('.stooltag').style.visibility = 'hidden';

        // mainDiv1의 뒷면에 검은색 배경이 있는 div를 보이도록 설정합니다.
        this.querySelector('.backside7').style.display = 'block';
    } else {
        // 'flipped' 클래스가 적용되지 않은 경우
        // mainDiv1 내부의 이미지를 다시 보이도록 변경합니다.
        this.querySelector('img').style.visibility = 'visible';
        this.querySelector('.stooltag').style.visibility = 'visible';

        // mainDiv1의 뒷면에 검은색 배경이 있는 div를 숨깁니다.
        this.querySelector('.backside7').style.display = 'none';
    }
});



const mainDiv8 = document.getElementById('mainDiv8');
let isDragging8 = false;
let offsetX8, offsetY8;

// mainDiv의 초기 위치 설정
window.addEventListener('DOMContentLoaded', () => {
    mainDiv8.style.left = '1280px';
    mainDiv8.style.top = '560px';
});

// 마우스 클릭 이벤트를 추가합니다.
mainDiv8.addEventListener('mousedown', (e) => {
    isDragging8 = true;

    // 클릭한 위치의 좌표 값을 가져옵니다.
    offsetX8 = e.clientX - mainDiv8.getBoundingClientRect().left;
    offsetY8 = e.clientY - mainDiv8.getBoundingClientRect().top;
});

// 마우스를 놓았을 때 이벤트를 추가합니다.
document.addEventListener('mouseup', () => {
    isDragging8 = false;
});

// 마우스를 따라 움직이는 함수
document.addEventListener('mousemove', (e) => {
    if (isDragging8) {
        // div를 마우스 위치로 이동시킵니다.
        mainDiv8.style.left = (e.clientX - offsetX8) + 'px';
        mainDiv8.style.top = (e.clientY - offsetY8) + 'px';
    }
});

// mainDiv1를 클릭했을 때 애니메이션을 처리하는 함수를 정의합니다.
mainDiv8.addEventListener('click', function() {
    // mainDiv1 요소에 'flipped' 클래스를 토글합니다.
    this.classList.toggle('flipped');

    // 'flipped' 클래스가 적용된 경우
    if (this.classList.contains('flipped')) {
        // mainDiv1 내부의 이미지를 검정색으로 변경합니다.
        this.querySelector('img').style.visibility = 'hidden';
        this.querySelector('.stooltag').style.visibility = 'hidden';

        // mainDiv1의 뒷면에 검은색 배경이 있는 div를 보이도록 설정합니다.
        this.querySelector('.backside8').style.display = 'block';
    } else {
        // 'flipped' 클래스가 적용되지 않은 경우
        // mainDiv1 내부의 이미지를 다시 보이도록 변경합니다.
        this.querySelector('img').style.visibility = 'visible';
        this.querySelector('.stooltag').style.visibility = 'visible';

        // mainDiv1의 뒷면에 검은색 배경이 있는 div를 숨깁니다.
        this.querySelector('.backside8').style.display = 'none';
    }
});



const mainDiv9 = document.getElementById('mainDiv9');
let isDragging9 = false;
let offsetX9, offsetY9;

// mainDiv의 초기 위치 설정
window.addEventListener('DOMContentLoaded', () => {
    mainDiv9.style.left = '1160px';
    mainDiv9.style.top = '140px';
});

// 마우스 클릭 이벤트를 추가합니다.
mainDiv9.addEventListener('mousedown', (e) => {
    isDragging9 = true;

    // 클릭한 위치의 좌표 값을 가져옵니다.
    offsetX9 = e.clientX - mainDiv9.getBoundingClientRect().left;
    offsetY9 = e.clientY - mainDiv9.getBoundingClientRect().top;
});

// 마우스를 놓았을 때 이벤트를 추가합니다.
document.addEventListener('mouseup', () => {
    isDragging9 = false;
});

// 마우스를 따라 움직이는 함수
document.addEventListener('mousemove', (e) => {
    if (isDragging9) {
        // div를 마우스 위치로 이동시킵니다.
        mainDiv9.style.left = (e.clientX - offsetX9) + 'px';
        mainDiv9.style.top = (e.clientY - offsetY9) + 'px';
    }
});

// mainDiv1를 클릭했을 때 애니메이션을 처리하는 함수를 정의합니다.
mainDiv9.addEventListener('click', function() {
    // mainDiv1 요소에 'flipped' 클래스를 토글합니다.
    this.classList.toggle('flipped');

    // 'flipped' 클래스가 적용된 경우
    if (this.classList.contains('flipped')) {
        // mainDiv1 내부의 이미지를 검정색으로 변경합니다.
        this.querySelector('img').style.visibility = 'hidden';
        this.querySelector('.stooltag').style.visibility = 'hidden';

        // mainDiv1의 뒷면에 검은색 배경이 있는 div를 보이도록 설정합니다.
        this.querySelector('.backside9').style.display = 'block';
        
    } else {
        // 'flipped' 클래스가 적용되지 않은 경우
        // mainDiv1 내부의 이미지를 다시 보이도록 변경합니다.
        this.querySelector('img').style.visibility = 'visible';
        this.querySelector('.stooltag').style.visibility = 'visible';

        // mainDiv1의 뒷면에 검은색 배경이 있는 div를 숨깁니다.
        this.querySelector('.backside9').style.display = 'none';
    }
});



const mainDiv11 = document.getElementById('mainDiv11');
let isDragging11 = false;
let offsetX11, offsetY11;

// mainDiv의 초기 위치 설정
window.addEventListener('DOMContentLoaded', () => {
    mainDiv11.style.left = '1230px';
    mainDiv11.style.top = '395px';
});

// 마우스 클릭 이벤트를 추가합니다.
mainDiv11.addEventListener('mousedown', (e) => {
    isDragging11 = true;

    // 클릭한 위치의 좌표 값을 가져옵니다.
    offsetX11 = e.clientX - mainDiv11.getBoundingClientRect().left;
    offsetY11 = e.clientY - mainDiv11.getBoundingClientRect().top;
});

// 마우스를 놓았을 때 이벤트를 추가합니다.
document.addEventListener('mouseup', () => {
    isDragging11 = false;
});

// 마우스를 따라 움직이는 함수
document.addEventListener('mousemove', (e) => {
    if (isDragging11) {
        // div를 마우스 위치로 이동시킵니다.
        mainDiv11.style.left = (e.clientX - offsetX11) + 'px';
        mainDiv11.style.top = (e.clientY - offsetY11) + 'px';
    }
});

// mainDiv1를 클릭했을 때 애니메이션을 처리하는 함수를 정의합니다.
mainDiv11.addEventListener('click', function() {
    // mainDiv1 요소에 'flipped' 클래스를 토글합니다.
    this.classList.toggle('flipped');

    // 'flipped' 클래스가 적용된 경우
    if (this.classList.contains('flipped')) {
        // mainDiv1 내부의 이미지를 검정색으로 변경합니다.
        this.querySelector('img').style.visibility = 'hidden';
        this.querySelector('.stooltag').style.visibility = 'hidden';

        // mainDiv1의 뒷면에 검은색 배경이 있는 div를 보이도록 설정합니다.
        this.querySelector('.backside11').style.display = 'block';
    } else {
        // 'flipped' 클래스가 적용되지 않은 경우
        // mainDiv1 내부의 이미지를 다시 보이도록 변경합니다.
        this.querySelector('img').style.visibility = 'visible';
        this.querySelector('.stooltag').style.visibility = 'visible';

        // mainDiv1의 뒷면에 검은색 배경이 있는 div를 숨깁니다.
        this.querySelector('.backside11').style.display = 'none';
    }
});