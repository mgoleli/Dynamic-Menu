let foodContainer = document.querySelector('.menu');

const foodItem = [
    {
    foodName: "Chicken Fried Salad",
    foodImg: "images/salad.jpg",
    price: "45$",
    type: "Breakfast",
    des:"Breakfast"
    },
    {
    foodName: "Sandwich",
    foodImg: "images/sandwich.jpg",
    price: "25$",
    type: "Breakfast",
    des:"Breakfast"
    },
    {
    foodName: "Mixed Healt Food",
    foodImg: "images/mixedfood.jpg",
    price: "35$",
    type: "Lunch",
    des:"Lunch"
    },
    {
    foodName: "Chocolate Shake",
    foodImg: "images/shake.jpg",
    price: "10$",
    type: "Shakes",
    des:"Shakes"      
    },
    {
    foodName: "Pasta",
    foodImg: "images/pasta.jpg",
    price: "25$",
    type: "Dinner",
    des:"Dinner"
    },
    {
    foodName: "steak",
    foodImg: "images/steak.jpg",
    price: "35$",
    type: "Dinner",
    des:"Dinner"
    }
]

const food = foodItem.map(item => {
    const listItem = ` <div class="single-menu ${item.type}">
    <img src="${item.foodImg}" alt=""> 
    <div class="menu-content">
        <h4>${item.foodName}<span>&nbsp;${item.price}</span></h4>
        <p>${item.des}</p>
    </div>
</div>`;
foodContainer.innerHTML += listItem;
})

const menu = document.querySelectorAll('ul');
const singleMenu = document.querySelectorAll('.single-menu');

menu.forEach(m => {
    m.addEventListener('click', e=>  {
        //console.log(e.target.innerHTML);
        singleMenu.forEach(b=> {
            b.classList.add('d-none');
            if(e.target.innerHTML === 'All') {
                //console.log(e.target.innerHTML);
                b.classList.remove('d-none')
            }
            else if(e.target.innerHTML === 'Breakfast') {
                console.log(e.target.innerHTML);
                if(b.classList.contains('Breakfast')) {
                    b.classList.remove('d-none')
                }
            }
            else if(e.target.innerHTML === 'Lunch') {
                if(b.classList.contains('Lunch')) {
                    b.classList.remove('d-none')
                }
            }
            else if(e.target.innerHTML === 'Shakes') {
                if(b.classList.contains('Shakes')) {
                    b.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML === 'Dinner') {
                if(b.classList.contains('Dinner')) {
                    b.classList.remove('d-none')
                }
            }
            else {
                b.classList.remove('d-none')
            }
        })
    })
})