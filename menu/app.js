// for loop in javascript 

const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

// assign the parent of each button 
// get the even in which a button is click with foreach 
// get the category of the button
// filter out the category that was not in the button 
// call the displayMenu item to get the button with the right category 
const  sectionCenter  = document.querySelector(".section-center"); 
const  sectionButton  = document.querySelector(".btn-container"); 

window.addEventListener("DOMContentLoaded",function(){
    displayMenu(menu);
    displayButton(menu);
    const  buttons = this.document.querySelectorAll(".filter-btn"); 
buttons.forEach(function(button){
    button.addEventListener("click",function(){
        buttonHtml  = button.innerHTML  ;
        const  reduceMenu  = menu.filter(function(items){
            return  items.category ==buttonHtml  ;
        }) ;
        if (buttonHtml == "all")
        {
            displayMenu(menu);
            return ;
        }
        else 
        {displayMenu(reduceMenu);}
        
    })
    
})
});

// filter out the repeated button 
// then store the unique button in the new array 
// call the return function with syntax 
// then call the map function to map the syntax 
// remove the comma seperated character 
function displayButton(menuItems)
{   
    let values  = ["all"];
    
    menuItems.forEach(function(value) 
    {
     if(!values.includes(value.category))
     {
        values.push(value.category);
     }
    }) ;
    let disPlayButton = values.map(function(item) 
    {
        // console.log(item);
        return `<button class="filter-btn" type="button">${item}</button>`;
    });
    disPlayButton =  disPlayButton.join("")  ;
    console.log(disPlayButton);
    sectionButton.innerHTML  =  disPlayButton ; 
 }


function displayMenu(menuItems)
{
    let displayMenu = menuItems.map(function(item) 
    {
        // console.log(item);
        return `<article class="menu-item">
        <img src="${item.img}" alt="menu item" class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
          ${item.desc}
          </p>
        </div>
      </article>`;
    });
    displayMenu = displayMenu.join("\n");
    sectionCenter.innerHTML  =  displayMenu ; 
}





