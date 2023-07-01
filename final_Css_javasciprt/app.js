form  = document.querySelector(".searchBar") ;




form.addEventListener("submit",function(e) {
    e.preventDefault();
    let searchInformation  = document.querySelector("#searchInfo").value; 
    var url = 'https://www.google.com/search?q=' + encodeURIComponent(searchInformation);
    window.open(url, '_blank');
});

