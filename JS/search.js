document.getElementById("search_btn").addEventListener('click', search_message);
function search_message(){
alert("검색을 수행합니다!");
}

function googleSearch(){
    const searchTerm=document.getElementById("search_input").ariaValueMax; // 검색어로 설정
    const googleSearchUrl='https://www.google.com/search?q=${encodeURIComponent(searchTerm)}';
    // 새창에서 구글 검색을 수행
    window.open(googleSearchUrl, "_blank"); // 새로운 창에서열기
    return false;
}