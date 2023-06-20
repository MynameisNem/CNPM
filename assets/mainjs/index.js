const buyBtns = document.querySelectorAll('.js-buy-ticket-event')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

    // Hàm hiển thị menu mua vé (thêm class open vào modal)
function showBuyTicket() {
    modal.classList.add('open')
}

    //  Lặp event nghe lại hành động click tại 3 button Buy Ticket
for ( const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTicket)
}
        
// Hàm tắt menu mua vé (gỡ class open của modal)
function hideBuyTicket() {
    modal.classList.remove('open')
}
// Nghe lại hành động click vào close
modalClose.addEventListener('click', hideBuyTicket)

    // Tắt menu mua vé bằng cách ấn ra khoảng không bên ngoài
    // Nếu chỉ dùng modal thì sẽ bị trường hợp ấn vào thẻ con modalContainer (nội dung không cần ẩn khi bấm)
    // sẽ bị ẩn đi do cả thẻ cha cũng nhận được event click 
    // nên phải thêm event stopPropagation (ngăn sự kiện nổi bọt, giống như loại trừ nội dung)
modal.addEventListener('click', hideBuyTicket)
    // Ngăn sự kiện nổi bọt đến modalContainer thì dừng (hoặc hiểu là nếu bấm vào modalContainer thì event click ẩn sẽ bị dừng 
    // do được loại trừ bởi stopPropagation, còn nếu bấm ra ngoài modalContainer thì thực hiện ẩn menu mua vé)
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation('')
})

    // code responsive mobile
// var header = document.getElementById('header');
// var mobileMenu = document.getElementById('mobile-menu-js');
// var headerHeight = header.clientHeight;

    // Bật tắt mobile menu responsive
// mobileMenu.onclick = function() {
//     var isClosed = header.clientHeight === headerHeight;
//     if (isClosed) {
//         header.style.height = 'auto';
//     }

//     else {
//         header.style.height = null;
//     }
// }

    // Tự động tắt menu khi chọn phần tử bên trong menu
// var menuItems = document.querySelectorAll('#nav li a[href *= "#"]');
// for (var i = 0; i < menuItems.length; i++)
// {
//     var menuItem = menuItems[i];
//     menuItem.onclick = function() {
//         header.style.height = null;
//     }
// }