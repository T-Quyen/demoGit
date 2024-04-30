//tạo ramdom vị trí noBtn
const yesBtn = document.getElementById('btnYes');
const noBtn = document.getElementById('btnNo');
const btn = document.getElementsByTagName('button');
const fSizeBody = document.body;

var SizeFontBody = parseFloat(window.getComputedStyle(fSizeBody).getPropertyValue('font-size'));
// lấy dữu liệu cho các btn
var wNo = noBtn.clientWidth/SizeFontBody;
var hNo = noBtn.clientHeight/SizeFontBody;
// chuyển String về dạng số
var fsNo = parseFloat(window.getComputedStyle(noBtn).fontSize)/SizeFontBody;
var pNo = parseFloat(window.getComputedStyle(noBtn).padding)/SizeFontBody;

var wYes = yesBtn.clientWidth/SizeFontBody;
var hYes = yesBtn.clientHeight/SizeFontBody;
var fsYes = parseFloat(window.getComputedStyle(yesBtn).fontSize)/SizeFontBody;
var pYes = parseFloat(window.getComputedStyle(yesBtn).padding)/SizeFontBody;


// lấy width ccuar thiết bị người dùng
const wFull = window.innerWidth;
var eventType = 'mouseover';
// tạo kiểu sk hoạt động khi ở dạng mobi
if(wFull <= 770 ) eventType = 'click';
console.log(wFull);
console.log(eventType);

noBtn.addEventListener(eventType, () => {
    // tạo tọa đọ random cho noBtn
    const x = Math.floor(Math.random() * (window.innerWidth - 150));
    const y = Math.floor(Math.random() * (window.innerHeight - 150));
    

    wNo -= 0.05;
    hNo -= 0.03;
    fsNo -= 0.02;
    pNo -= 0.02;

    wYes += 0.1; 
    hYes += 0.05;
    fsYes += 0.02;
    pYes += 0.02;

    btn[1].style.fontSize = `${fsNo}em`;
    btn[1].style.height = `${hNo}em`;
    btn[1].style.width = `${wNo}em`;
    btn[1].style.padding = `${pNo}em`;

    btn[0].style.fontSize = `${fsYes}em`;
    btn[0].style.height = `${hYes}em`;
    btn[0].style.width = `${wYes}em`;
    btn[0].style.padding = `${pYes}em`;
    if(wNo <= 5.0 && wNo >= 4.98333){
        // hàm chạy Nobtn
        console.log(eventType);
        initializeModalNo(eventType);
    } else if(wNo < 4.98333) {
        noBtn.style.opacity = 0;
    }

    // ramdom vị trí noBtn
    noBtn.style.top = `${y}px`;
    noBtn.style.left = `${x}px`;
    
});
//kết thúc tạo ramdom vị trí noBtn

//tạo đóng mở modal yesBtn 
function initializeModalYes() {
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelector('.js-modal-btnYes');

    function showModal() {
        modal.classList.add('open');
    }

    function removeModal() {
        modal.classList.remove('open');
    }

    modalBtn.addEventListener('click', showModal);

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            removeModal();
        }
    });
}
// Gọi hàm initializeModal để khởi tạo modal
initializeModalYes();

//tạo đóng mở modal noBtn 
function initializeModalNo(eventType1) {
    console.log(122123123);
    const modal = document.querySelector('.modal--no');
    const modalBtn = document.querySelector('.js-modal-btnNo');

    function showModal() {
        modal.classList.add('open--no');
    }

    function removeModal() {
        modal.classList.remove('open--no');
    }

    modalBtn.addEventListener(eventType1, showModal);
    
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            removeModal();
        }
    });
}

