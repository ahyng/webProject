function rem_input() {
    var obj = document.getElementsByClassName('loginInput');
    
    for (var i = 0; i < obj.length; i++) {
        obj[i].value = '';
    }
}

link = '1_main.html';
function hrefLink() {
	location.href = link;
}


function login() {
    const logID = document.getElementById("loginID").value;
    const logPWD = document.getElementById("loginPWD").value;

    if (logID == '' || logPWD == '') {
        alert('아이디와 비밀번호를 모두 입력해주세요.');
    } else if (logID in localStorage) {
        console.log('ok');
        if (logPWD == localStorage.getItem(logID)) {
            console.log('완료');
            setCookie('ID', logID, 1);
            alert(logID + '님 안녕하세요! \n로그인 되었습니다.');           
            rem_input();
            hrefLink()
            
        } else {
            alert('비밀번호를 다시 입력해주세요.');
        }
    } else {
        alert('존재하지 않는 아이디입니다.');
        rem_input();
    }
}

function setCookie(name, value, num) {
    var date = new Date();
    date.setDate(date.getDate() + num);

    var newCookie = '';
    newCookie += name + '=' + value + ';';
    newCookie += "Expires=" + date.toUTCString() + ';'; 

    document.cookie = newCookie;
    console.log(newCookie);
}





