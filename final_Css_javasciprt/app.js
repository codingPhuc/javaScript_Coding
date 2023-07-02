const form =  document.querySelector(".searchBar");
const info = document.querySelector(".searchInfo"); 
const list = document.querySelector(".searchInfo") ; 
// make the infomation search bar appeer 
const searchInput = document.querySelector("#searchInfo");
const  searchBar = document.querySelector(".searchBar"); 



searchInput.addEventListener("focus",function()
{
    if(list.children.length !== 0 )
    {info.classList.add("displaySearchInfo");
    searchBar.classList.add("clickSearchBar");}
    
})
// searchInput.addEventListener("blur",function()
// {
//     info.classList.remove("displaySearchInfo");
//     searchBar.classList.remove("clickSearchBar");

// })
// load the search content 

window.addEventListener("DOMContentLoaded",setSearchContent);
// form submision 
form.addEventListener("submit",function(e) {

    e.preventDefault();
    let searchInformation  = document.querySelector("#searchInfo").value; 
    const id = new Date().getTime().toString(); 
    if(searchInformation !="" )
    {
        var url = 'https://www.google.com/search?q=' + encodeURIComponent(searchInformation);
        window.open(url, '_blank');
        const element = document.createElement("div")  ; 
        let attr = document.createAttribute("data-id");
        attr.value = id  ;  
        element.setAttributeNode(attr); 
        element.classList.add("searchHistory");
        element.innerHTML  =`
        <button class="buttonClock">
        <img class="clockImage" src="icon img/googleClock.png" alt="" />
      </button>
      <div class="textHistory">${searchInformation}</div>
      <button class="buttonXImage">
        <img class="xImage" src="icon img/x button.png" alt="" />
      </button>`
      const deleteBtn = element.querySelector(".buttonXImage");
      deleteBtn.addEventListener("click",deleteSearch);
      list.appendChild(element);  
      addToLocalStorage(id, searchInformation) 
     
    }

});

function deleteSearch(e) 
{
    const element =  e.currentTarget.parentElement ;
    const eleId =  element.dataset.id ;
    list.removeChild(element);
    if(list.children.length === 0 )
    {
      info.classList.remove("displaySearchInfo");
      searchBar.classList.remove("clickSearchBar");
      
    }

    removeFromLocalStorage(eleId);
    
}

// Storage the items 

function addToLocalStorage (id , item) {
    const searchItem = {id, item};
    let items = getLocalStorage()  ; 
    items.push(searchItem) ;
    localStorage.setItem("list",JSON.stringify(items));
}
function getLocalStorage()
{
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : []  ;
}
function removeFromLocalStorage (id )  {
    let items  = getLocalStorage()  ; 
    items = items.filter(function(item){
        if(item.id !==id)
        {
            return item   ; 
        }
    }); 
    localStorage.setItem("list",JSON.stringify(items));
    
}

// ****** set The item in the local storage out **********
function setSearchContent()
{
    items  = getLocalStorage() ;  
    if (items.length > 0) {
        items.forEach(function (item) {
            addSearchContent(item.id, item.item);
        });
      }
}
function addSearchContent(id , value)
{
    const element = document.createElement("div")  ; 
    let attr = document.createAttribute("data-id");
    attr.value = id  ;  
    element.setAttributeNode(attr); 
    element.classList.add("searchHistory");
    element.innerHTML  =`
    <button class="buttonClock">
    <img class="clockImage" src="icon img/googleClock.png" alt="" />
  </button>
  <div class="textHistory">${value}</div>
  <button class="buttonXImage">
    <img class="xImage" src="icon img/x button.png" alt="" />
  </button>`
  const deleteBtn = element.querySelector(".buttonXImage");
  deleteBtn.addEventListener("click",deleteSearch);
  list.appendChild(element);  
}



