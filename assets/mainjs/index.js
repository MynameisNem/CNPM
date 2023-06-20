const logBtns = document.querySelectorAll('.login-event')
const sigBtns = document.querySelectorAll('.signup-event')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

// Form Login
    // Hàm hiển thị form login (thêm class open vào modal)
function showFormLogin() 
{
    modal.classList.add('open')
}

    // Lặp event nghe lại hành động click tại button Đăng nhập
for ( const logBtn of logBtns) 
{
    logBtn.addEventListener('click', showFormLogin)
}
        
// Hàm tắt form login (gỡ class open của modal)
function hideFormLogin() 
{
    modal.classList.remove('open')
}
// Nghe lại hành động click vào close
modalClose.addEventListener('click', hideFormLogin)

    // Tắt form login bằng cách ấn ra khoảng không bên ngoài
    // Nếu chỉ dùng modal thì sẽ bị trường hợp ấn vào thẻ con modalContainer (nội dung không cần ẩn khi bấm)
    // sẽ bị ẩn đi do cả thẻ cha cũng nhận được event click 
    // nên phải thêm event stopPropagation (ngăn sự kiện nổi bọt, giống như loại trừ nội dung)
modal.addEventListener('click', hideFormLogin)
    // Ngăn sự kiện nổi bọt đến modalContainer thì dừng (hoặc hiểu là nếu bấm vào modalContainer thì event click ẩn sẽ bị dừng 
    // do được loại trừ bởi stopPropagation, còn nếu bấm ra ngoài modalContainer thì thực hiện ẩn form login)
modalContainer.addEventListener('click', 
    function (event) 
    {
    event.stopPropagation('')
    }
)
// End Form Login

// Form Signup
function showFormSignup() 
{
    modal.classList.add('open')
}

    // Lặp event nghe lại hành động click tại button Đăng ký
for ( const sigBtn of sigBtns) 
{
    sigBtn.addEventListener('click', showFormSignup)
}
        
// Hàm tắt form login (gỡ class open của modal)
function hideFormSignup() 
{
    modal.classList.remove('open')
}
// Nghe lại hành động click vào close
modalClose.addEventListener('click', hideFormSignup)

    // Tắt form login bằng cách ấn ra khoảng không bên ngoài
    // Nếu chỉ dùng modal thì sẽ bị trường hợp ấn vào thẻ con modalContainer (nội dung không cần ẩn khi bấm)
    // sẽ bị ẩn đi do cả thẻ cha cũng nhận được event click 
    // nên phải thêm event stopPropagation (ngăn sự kiện nổi bọt, giống như loại trừ nội dung)
modal.addEventListener('click', hideFormSignup)
    // Ngăn sự kiện nổi bọt đến modalContainer thì dừng (hoặc hiểu là nếu bấm vào modalContainer thì event click ẩn sẽ bị dừng 
    // do được loại trừ bởi stopPropagation, còn nếu bấm ra ngoài modalContainer thì thực hiện ẩn form login)
modalContainer.addEventListener('click', 
    function (event) 
    {
    event.stopPropagation('')
    }
)
// End Form Signup