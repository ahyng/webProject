//login
function button() {
    document.getElementById('loginButton').style.backgroundColor="rgba(211, 211, 234, 0.729)";
    document.getElementById('loginButton').style.color="black";
}

function button_out() {
    document.getElementById('loginButton').style.backgroundColor="rgba(240, 248, 255, 0.071)";
    document.getElementById('loginButton').style.color="white";
}

function button_logout() {
    document.getElementById('logoutButton').style.backgroundColor="rgba(211, 211, 234, 0.729)";
    document.getElementById('logoutButton').style.color="black";
}

function button_out_logout() {
    document.getElementById('logoutButton').style.backgroundColor="rgba(240, 248, 255, 0.071)";
    document.getElementById('logoutButton').style.color="white";
}

//로그아웃
function logout() {
    setCookie('ID', cookies[0].slice(3), -1);
    alert('로그아웃 되었습니다.')
    location.reload();
    loginCheck();
}

//로그인 여부 확인
var cookies = document.cookie.split(';');
console.log(cookies);

function loginCheck() {
    if (cookies[0].length > 0) {
        document.getElementById('loginButton').style.display = 'none';
        document.getElementById('ID_name').innerHTML = cookies[0].slice(3);
        document.getElementById('hello').innerHTML = '님 안녕하세요.'
        document.getElementById('accountHome').style.display = 'block';
    } else {
        document.getElementById('welcome').style.display = 'none';
        document.getElementById('accountHome').style.display = 'none';
        document.getElementById('loginButton').style.display = 'block';
    }
} 

loginCheck();

//계정삭제
function account_delete() {
    var confirm_pwd = prompt('비밀번호를 입력하세요.')
    if (confirm_pwd == localStorage.getItem(cookies[0].slice(3))) {
        
        if (confirm("정말 삭제하시겠습니까?")) {         
            localStorage.removeItem(cookies[0].slice(3));
            alert('계정이 삭제되었습니다. \n로그인하시려면 다시 회원가입 바랍니다.')
            logout()
        } else {
            alert('취소되었습니다.')
        }
    } else {
        alert('비밀번호가 일치하지 않습니다.')
    }
}
    
//home버튼 + account 화면 display
function home() {
    if (document.getElementById('account').style.display == 'none') {
        document.getElementById('account').style.display = 'block';
    } else {
        document.getElementById('account').style.display = 'none';
    }
}


//box1
function box1() {
    document.getElementById('box1').style.backgroundImage="url('https://cdn.pixabay.com/photo/2021/10/09/00/15/landscape-6692712_1280.jpg')"
    document.getElementById('box1').style.opacity="0.5";
    document.getElementById('box1').style.backgroundSize="cover";
    document.getElementById('box1').style.color="white";
    
}

function box1_out() {
    document.getElementById('box1').style.backgroundImage=""
    document.getElementById('box1').style.backgroundColor="white";
    document.getElementById('box1').style.color="black";
    document.getElementById('box1').style.opacity="1";
    document.getElementById('box1').style.background="linear-gradient(to left bottom, white, rgba(255, 255, 255, 0.4))"; 
}

//box2
function box2() {
    document.getElementById('box2').style.backgroundImage="url('https://cdn.pixabay.com/photo/2021/09/07/11/53/car-6603726_640.jpg')"
    document.getElementById('box2').style.opacity="0.5";
    document.getElementById('box2').style.backgroundSize="cover";
    document.getElementById('box2').style.color="white";
    
}

function box2_out() {
    document.getElementById('box2').style.backgroundImage=""
    document.getElementById('box2').style.backgroundColor="white";
    document.getElementById('box2').style.opacity="1";
    document.getElementById('box2').style.color="black";
    document.getElementById('box2').style.background="linear-gradient(to bottom, white, rgba(255, 255, 255, 0.55))";
}

//box3
function box3() {
    document.getElementById('box3').style.backgroundImage="url('https://cdn.pixabay.com/photo/2016/05/24/18/49/suitcase-1412996_1280.jpg')"
    document.getElementById('box3').style.opacity="0.5";
    document.getElementById('box3').style.backgroundSize="cover";
    document.getElementById('box3').style.color="white";
}

function box3_out() {
    document.getElementById('box3').style.backgroundImage=""
    document.getElementById('box3').style.backgroundColor="white";
    document.getElementById('box3').style.color="black";
    document.getElementById('box3').style.opacity="1";
    document.getElementById('box3').style.background="linear-gradient(to right bottom, white, rgba(255, 255, 255, 0.4))"; 
}

//box4
function box4() {
    document.getElementById('box4').style.backgroundImage="url('https://cdn.pixabay.com/photo/2020/06/04/11/10/bulb-5258341_640.jpg')"
    document.getElementById('box4').style.backgroundSize="cover";
    document.getElementById('box4').style.opacity="0.5";
    document.getElementById('box4').style.color="white";
}

function box4_out() {
    document.getElementById('box4').style.backgroundImage=""
    document.getElementById('box4').style.backgroundColor="white";
    document.getElementById('box4').style.opacity="1";
    document.getElementById('box4').style.color="black";
    document.getElementById('box4').style.opacity="1";
    document.getElementById('box4').style.background="linear-gradient(to left bottom, white, rgba(255, 255, 255, 0.4))"; 
}

//box5
function box5() {
    document.getElementById('box5').style.backgroundImage="url('https://cdn.pixabay.com/photo/2018/01/24/07/23/switzerland-3103322_1280.jpg')"
    document.getElementById('box5').style.backgroundSize="cover";
    document.getElementById('box5').style.opacity="0.5";
    document.getElementById('box5').style.color="white";
}

function box5_out() {
    document.getElementById('box5').style.backgroundImage=""
    document.getElementById('box5').style.backgroundColor="white";
    document.getElementById('box5').style.opacity="1";
    document.getElementById('box5').style.color="black";
    document.getElementById('box5').style.opacity="1";
    document.getElementById('box5').style.background="linear-gradient(to bottom, white, rgba(255, 255, 255, 0.55))";
}

//box6 (원래사진 : https://cdn.pixabay.com/photo/2017/08/29/06/17/lightbulb-2692247_640.jpg)
function box6() {
    document.getElementById('box6').style.backgroundImage="url('https://cdn.pixabay.com/photo/2021/05/05/20/15/phone-booth-6231878_640.jpg')"
    document.getElementById('box6').style.backgroundSize="cover";
    document.getElementById('box6').style.opacity="0.5";
    document.getElementById('box6').style.color="white";
}

function box6_out() {
    document.getElementById('box6').style.backgroundImage=""
    document.getElementById('box6').style.backgroundColor="white";
    document.getElementById('box6').style.opacity="1";
    document.getElementById('box6').style.color="black";
    document.getElementById('box6').style.opacity="1";
    document.getElementById('box6').style.background="linear-gradient(to right bottom, white, rgba(255, 255, 255, 0.4))"; 
}




