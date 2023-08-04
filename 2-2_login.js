

function button() {
    document.getElementById('backbutton').style.backgroundColor="rgba(211, 211, 234, 0.729)";
    document.getElementById('backbutton').style.color="black";
}

function button_out() {
    document.getElementById('backbutton').style.backgroundColor="rgba(240, 248, 255, 0.071)";
    document.getElementById('backbutton').style.color="white";
}

function signupPage() {
    document.getElementById('login_box').style.display = "none";
    document.getElementById('signup_box').style.display = "block";
}

function loginPage()   {
    document.getElementById('login_box').style.display = "block";
    document.getElementById('signup_box').style.display = "none";
}          


function signUp() {
    const signupID = document.getElementById('signupID').value;
    const signupPWD = document.getElementById('signupPWD').value;
    
    if (signupID in localStorage) {
        alert('이미 존재하는 아이디입니다.\n 다른 아이디로 다시 시도해주세요.');
    } else if (signupID == '' || signupPWD == '') {
        alert('아이디와 비밀번호를 모두 입력해주세요.');
    } else {
        localStorage.setItem(signupID, signupPWD);
        alert(signupID + '님 반갑습니다! \n회원가입이 완료되었습니다. \n이제 로그인을 하실 수 있습니다.');
        rem_input();
        document.getElementById("signup_box").style.display = "none";
        document.getElementById("login_box").style.display = "block";
    }
}

function rem_input() {
    var obj = document.getElementsByClassName('signupInput');
    
    for (var i = 0; i < obj.length; i++) {
        obj[i].value = '';
    }
}

