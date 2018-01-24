// Object properties: name, description, price, and URL for product image
var products = [
    {
        name: 'thRuby',
        description: ' Remove the worry from your child traveling alone with a tracking app that includes checkpoints, mini-games, and notifications for when your child arrives at their destination.',
        price: '$4.00',
        imgURL: // 'NEEDS IMAGE'
    },
    {
        name: 'KeepUp',
        description: 'A simplified calendar built for parents to keep track of their child\'s wild schedule of daily events.',
        price: 'free (in-app purchases)',
        imgURL: // 'NEEDS IMAGE'
    },
    {
        name: 'Carriage',
        description: 'Be sure your child is in caring hands while traveling to and from home with our trusted group of drivers.',
        price: 'free',
        imgURL: // 'NEEDS IMAGE'
    },
    {
        name: 'Lyingth',
        description: 'Practice honesty with your child with our lie detecting app that can discreetly analyze if your child is telling the truth or a fib.',
        price: '$10.00',
        imgURL: // 'NEEDS IMAGE'
    },
    {
        name: 'All Gowned Up',
        description: 'Open your child\'s creative side with a simple yet lively dress designer suitable for any and all levels of imagination.',
        price: 'free (in-app purchases)',
        imgURL: // 'NEEDS IMAGE'
    },
    {
        name: 'PrincePoint',
        description: 'Find the Prince Charming that fits your fantasy perfectly.',
        price: 'free (in-app purchases)',
        imgURL: // 'NEEDS IMAGE'
    },
    {
        name: 'Candy Cottage Cookbook',
        description: 'Cookbook app of famous recipes from other stories/fables. Make cooking fun with re-creations of favorite recipes from your child\'s favorite tales and stories.',
        price: '$6.00',
        imgURL: // 'NEEDS IMAGE'
    },
    {
        name: 'Stronk Fitness',
        description: 'Keep you and your child healthy by monitoring things such as their exercise and nutrition. Keep them involved by staying healthy with them and sharing your progress with each other along the way.',
        price: 'free (in-app purchases)',
        imgURL: // 'NEEDS IMAGE'
    }
        
];


var productHtml = "";
for (i = 0; i < products.length; i++) {
    productHtml += `<article class="card">`;
    productHtml += `<img src="` + products[i].imgUrl + `">`;
    productHtml += `<h2>` + products[i].name + `</h2>`;
    productHtml += `<p class="price">` + products[i].price + `</p>`;
    productHtml += `<p class="appDesc">` + products[i].description + `</p>`;
    productHtml += `</article>`;


}

document.getElementById("cards").innerHTML = productHtml;
console.log(productHtml);



// for (i=0; i<=7; i++) {
//     console.log(products[i]);

//     var cardContent = `<article class="card">
//                     <img src="` + products[i].imgURL + `">
//                     <h2>` + products[i].name + `</h2>
//                     <p class="price">` + products[i].price + `</p>
//                     <p class="appDesc">` + products[i].description + `</p>
//                     </article>`;

    

//     addCard(products[i]);

// }
// function addCard() {
//     // var card = document.getElementById('cards');
//     // var myCard = document.getElementById('cards');
//     document.getElementById('cards').innerHTML += cardContent;
// }

// console.log('It\'s all workin');

