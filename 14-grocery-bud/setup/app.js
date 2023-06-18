// ****** SELECT ITEMS **********

const alert =  document.querySelector('.alert') ; 
const form  = document.querySelector('.grocery-form') ; 
const grocery = document.getElementById('grocery'); 
const submitBtn = document.querySelector('.submit-btn') ;
const container = document.querySelector('.grocery-container') ;
const list  = document.querySelector('.grocery-list') ;
const clearBtn = document.querySelector('.clear-btn') ;


// edit option
let editElement  ; 
let editFlag = false  ;
let editID = "" ;

// ****** EVENT LISTENERS **********

// submit form  
form.addEventListener('submit' , addItem)
//clearBtn
clearBtn.addEventListener("click" , clearItems)

window.addEventListener("DOMContentLoaded", setupItems);


function addItem(e)
{
    e.preventDefault()  ; 
    const  value  = grocery.value  ;  
    const id = new Date().getTime().toString()  ; 
    if(value !== '' && editFlag === false) {
        const element  = document .createElement("article") ; 

        
        // add id 
        const attr  = document.createAttribute("data-id"); 
        attr.value  = id ; 
        element.setAttributeNode(attr)  ;
        element.classList.add("grocery-item"); 
        element.innerHTML =  `<p class="title">${value}</p>
        <div class="btn-container">
          <!-- edit btn -->
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <!-- delete btn -->
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>`; 
        const deleteBtn  = element.querySelector('.delete-btn');
        const editBtn  = element.querySelector('.edit-btn'); 
        deleteBtn.addEventListener("click" ,deleteItem ); 
        editBtn.addEventListener("click" ,editItem ); 



        list.appendChild(element) ; 
        displayAlert('item added to the list',"success")  ; 
        // show container 

        container.classList.add("show-container");

        addToLocalStorage(id, value);

        setBackToDefault();
    }
    else if (value !== '' && editFlag === true) {
        editElement.innerHTML  = value   ;
        displayAlert ("value change" , "success");
        // edit local storage  
        editLocalStorage(editID,value);

        setBackToDefault()  ; 

    }
    else {
        alert.textContent = 'empty value';
        alert.classList.add("alert-danger");

    }
} 
// display alert  
function displayAlert(text,action) 
{
    alert.textContent = text ; 
    alert.classList.add(`alert-${action}`) ; 

    // remove alert 
    setTimeout(function() {
        alert.textContent = '' ; 
        alert.classList.remove(`alert-${action}`) ; 
    },1000) 
}
// ****** FUNCTIONS **********

//target is the element that triggered the event (e.g., the user clicked on)
// currentTarget is the element that the event listener is attached to.
function deleteItem(e) 
{
    
    const element = e.currentTarget.parentElement.parentElement;

    const id = element.dataset.id;
  
    list.removeChild(element);
  
    if (list.children.length === 0) {
      container.classList.remove("show-container");
    }
    displayAlert("item removed", "danger");
    removeFromLocalStorage(id)
  
    setBackToDefault();
    
}

function editItem (e) {

    const element = e.currentTarget.parentElement.parentElement;
    // set edit item 
    editElement = e.currentTarget.parentElement.previousElementSibling  ;
    grocery.value  = editElement.innerHTML  ;  
    editFlag = true  ;
    editID = element.dataset.id  ;  
    submitBtn.textContent = "edit" ; 
    editLocalStorage(editID ,grocery.value )  ; 
}
//clear item 
function clearItems () {
    const items = document.querySelectorAll('.grocery-item');

    const id = element.dataset.id  ; 

    if(items.length > 0) {
        items.forEach(function(item) {
            list.removeChild(item) ; 
        })
    }
    //remove the container 
    container.classList.remove("show-container");  
    // clear the list 
    displayAlert("empty list","danger");
    // 
    setBackToDefault()  ; 
    localStorage.removeItem("list");

}


//set back to default  
function setBackToDefault() 
{
    grocery.value = ""  ; 
    editFlag  = false  ; 
    editID  =  ''  ; 
    submitBtn.textContent = "submit";
}

// ****** LOCAL STORAGE **********

function getLocalStorage ()
{
    return localStorage.getItem("list")? JSON.parse(localStorage.getItem("list")):[]  ;
    console.log(items); 
}
function addToLocalStorage(id , value)
{
    const grocery   = {id ,value}  ;
    let items = getLocalStorage ()   ; 
   
   
    items.push(grocery)  ; 
    localStorage.setItem("list" , JSON.stringify(items))  ;


    
    // console.log("added to local storage");
}

function removeFromLocalStorage(id)
{
    let items   = getLocalStorage() ; 
    items  = items.filter(function(item){
        if(item.id !== id)
        {
            return item ;  
        }
    })
    localStorage.setItem("list" , JSON.stringify(items))  ;

}

function editLocalStorage(id , value) 
{
 let items = getLocalStorage()  ; 
 items  = items.map(function(item){
    if(item.id === id )
    {
        item.value = value  ;
    }
    return item  ;
 }) 
    localStorage.setItem("list" , JSON.stringify(items))  ;


}
// ****** SETUP ITEMS **********

function setupItems() {
    let items = getLocalStorage();
  
    if (items.length > 0) {
      items.forEach(function (item) {
        createListItem(item.id, item.value);
      });
      container.classList.add("show-container");
    }
  }
  function createListItem(id, value) {
    const element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("grocery-item");
    element.innerHTML = `<p class="title">${value}</p>
              <div class="btn-container">
                <!-- edit btn -->
                <button type="button" class="edit-btn">
                  <i class="fas fa-edit"></i>
                </button>
                <!-- delete btn -->
                <button type="button" class="delete-btn">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            `;
    // add event listeners to both buttons;
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);
  
    // append child
    list.appendChild(element);
  }