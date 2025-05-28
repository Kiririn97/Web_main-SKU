if(emailValue.length<5){
    alert('아이디는 최소 5글자 이상 입력해야됩니다.');
    return false;
}

if(passwordValue. length<12){
    alert("비밀번호는 반드시 12글자 이상 입력해야 합니다.");
    return false;
}

const hasSpecialChar=passwordValue.match(/[!,@#$%^&*()_+|-=\[\]{};,:)


