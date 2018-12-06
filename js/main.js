const product = document.getElementById("product");

// creates element and renders clothing
function renderClothing(doc){
  let clothsBox = document.createElement("div");
  let name = document.createElement("p");
  let price = document.createElement("p");
  let clothImg = document.createElement("img");

  clothsBox.classList.add("col-lg-3", "col-md-4", "col-sm-12", "text-center");
  clothsBox.setAttribute('data-id', doc.id);
  clothImg.src = doc.data().img;
  name.textContent = doc.data().name;
  price.textContent = doc.data().price;

  clothsBox.appendChild(clothImg);
  clothsBox.appendChild(name);
  clothsBox.appendChild(price);

  product.appendChild(clothsBox);
}

// to reference the database
// this gets a promise then it does something
// the snapshot is what we receive from the promise
db.collection('clothing').get().then((snapshot) => {
  // now you can acsess the data within that database within this function
  console.log(snapshot.docs);
  snapshot.docs.forEach(doc => {
    // renders the function
    renderClothing(doc);
  })
})


var test = document.getElementById("check");




// var merch = [
//   {
//     name : "name1",
//     price : "price1",
//     mImg : "img/merchandise.png"
//   },
//   {
//     name : "name2",
//     price : "price2",
//     mImg : "img/merchandise.png"
//   },
//   {
//     name : "name3",
//     price : "price3",
//     mImg : "img/merchandise.png"
//   },
//   {
//     name : "name4",
//     price : "price4",
//     mImg : "img/merchandise.png"
//   },
//   {
//     name : "name5",
//     price : "price5",
//     mImg : "img/merchandise.png"
//   }
// ];

// Vue.component('merchandise',{
//   props:['name', 'price','mImg'],
//   template: `
//     <div class = "col-lg-3 col-md-4 col-sm-12 text-center">
//   	 <img src = img/merchandise.png>
//      <p>{{name}}</p>
//      <p>{{price}}</p>
//      <button>Buy</button>
//   	</div>`
// });

// new Vue({
//   el: "#merch",
//   data:{
//     clothing : merch
//   },
//   methods: {

//   }

// });

// new Vue({
//   el: "#ernestNav",
// });
