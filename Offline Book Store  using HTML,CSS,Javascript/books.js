var books = [];
var cart = [];
var c = 0;
var r;
window.onload = function () {
    init()
    books.forEach((book) => {
        setUpCard(book);
    })

}
function view(id) {
    books.forEach((book) => {
        if (id == book.id) {
            var t = document.getElementById("m3-t")
            t.innerText = book.title;
            t.style = "color: indigo;"
            let s = "<p>Author: " + book.author + "</p><p>Price: " + book.price + "</p><p>Description: " + book.description + "</p>"
            document.getElementById("m3-p").innerHTML = s;
        }
    })
}
function scf() {
    alert("Cart item bought successfully");
}
function buy() {
    cart.length = 0;
    books.forEach((book) => { book.quantity = 1 })
}
function addtocart(id) {
    books.forEach((book) => {
        if (id == book.id) {
            if (book.quantity > 0) {
                book.quantity -= 1;
                cart.push(book);
                alert("Book " + book.title + " added successfully to your cart");
            }
            else alert("Sorry! Book not available.");
        }
    })
}
function del(id) {
    for (let i = 0; i < cart.length; i++) {
        if (id == cart[i].id) {
            cart.splice(i, 1);
        }
    }
    books.forEach((book) => {
         if(id==book.id)
         book.quantity += 1;
        })
    let th = "<table style=\"border:2px;text-align: center\"><tr><th>Book Name</th><th>Author</th><th>Book Price</th><th>Action</th></tr>"
    let str = "";
    let sum = 0;
    if (cart.length == 0) {
        str = "No Item in Cart";
        document.getElementById("ga").disabled = true
    }
    else {
        document.getElementById("ga").disabled = false
        cart.forEach((book) => {
            str = str + "<tr><td>" + book.title + "</td><td>" + book.author + "</td><td>" + book.price + "</td><td><button type=\"button\" class=\"btn btn-primary\" onclick=\"del(" + book.id + ")\">Delete</button></td></tr>";
            sum += book.price;
        })
        str = th + str + "</table><br><br><p>The total price is:- " + sum + "</p>";
    }
    document.getElementById("mp").innerHTML = str;
}
function writecdata() {
    let th = "<table style=\"border:2px;text-align: center\"><tr><th>Book Name</th><th>Author</th><th>Book Price</th><th>Action</th></tr>"
    let str = "";
    let sum = 0;
    if (cart.length == 0) {
        str = "No Item in Cart";
        document.getElementById("ga").disabled = true
    }
    else {
        document.getElementById("ga").disabled = false
        cart.forEach((book) => {
            str = str + "<tr><td>" + book.title + "</td><td>" + book.author + "</td><td>" + book.price + "</td><td><button type=\"button\" class=\"btn btn-primary\" onclick=\"del(" + book.id + ")\">Delete</button></td></tr>";
            sum += book.price;
        })
        str = th + str + "</table><br><br><p>The total price is:- " + sum + "</p>"
    }
    document.getElementById("mp").innerHTML = str;
}

function setUpCard(book) {
    if (c % 4 == 0) {
        r = document.createElement('div');
        r.classList.add('row');
        r.classList.add('m-b');
        r.classList.add('card-deck');
    }
    let col = document.createElement('div')
    col.classList.add('col-xl-3')
    col.classList.add('col-lg-6')
    col.classList.add('col-md-6')
    col.classList.add('col-sm-12')
    col.classList.add('col-xs-12')
    let card = document.createElement('div')
    card.classList.add('card')
    card.classList.add('c-sty')

    let cardImageTop = document.createElement('img')
    cardImageTop.src = './images/' + book.image
    cardImageTop.classList.add('card-img-top')

    let cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    let cardTitle = document.createElement('h5')
    cardTitle.classList.add('card-title')

    let cardTitleStr = document.createTextNode(book.title)
    let cardText = document.createElement('p')
    cardText.classList.add('card-text')
    cardText.classList.add('ct-sty');

    let cardTextStr = document.createTextNode(book.description)


    let cardButton1 = document.createElement('button')
    cardButton1.classList.add('btn')
    cardButton1.classList.add('btn-info')
    cardButton1.setAttribute('style', 'margin-right:10px; margin-botton:1rem;')
    cardButton1.setAttribute('data-toggle', 'modal')
    cardButton1.setAttribute('data-target', '#exampleModal3')
    cardButton1.setAttribute('onclick', 'view(' + book.id + ')')


    let cardButtonStr1 = document.createTextNode('View Details')
    cardButton1.appendChild(cardButtonStr1)

    let cardButton2 = document.createElement('button')
    cardButton2.classList.add('btn');
    cardButton2.classList.add('btn-success')
    cardButton2.setAttribute('onclick', 'addtocart(' + book.id + ')')


    let cardButtonStr2 = document.createTextNode('Add To Cart')
    cardButton2.appendChild(cardButtonStr2)

    cardTitle.appendChild(cardTitleStr)
    cardText.appendChild(cardTextStr)

    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
    cardBody.appendChild(cardButton1)
    cardBody.appendChild(cardButton2)

    card.appendChild(cardImageTop)
    card.appendChild(cardBody)
    col.appendChild(card)

    r.appendChild(col)
    if (c % 4 == 0)
        document.getElementById('m-cont').appendChild(r);
    c += 1;
}

function init() {
    let booksJsonStr = window.sessionStorage.getItem('books')
    if (booksJsonStr != null) {
        books = JSON.parse(booksJsonStr)
    }
    else {
        books.push(
            {
                "id": 1,
                "title": "The Alchemist",
                "author": "Paulo Cohelo",
                "price": 150,
                "quantity": 1,
                "image": 'alchemist.jpg',
                "description": "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzlin in its powerful simplicity and soul- stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids.Along the way he meets a Gypsy woman, a man who calls himself king, and an alchemist, all of whom point Santiago in the direction of his quest.No one knows what the treasure is, or if Santiago will be able to surmount the obstacles in his path.But what starts out as a journey to find worldly goods turns into a discovery of the treasure found within.Lush, evocative, and deeply humane, the story of Santiago is an eternal testament to the transforming power of our dreams and the importance of listening to our hearts."
            });
        books.push(
            {
                "id": 2,
                "title": "1984",
                "author": "George Orwell",
                "price": 180,
                "quantity": 1,
                "image": '1984.jpg',
                "description": "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality. The brilliance of the novel is Orwell's prescience of modern life—the ubiquity of television, the distortion of the language—and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written."
            });
        books.push(
            {
                "id": 3,
                "title": "Do Android Dream of Electric Sheeps?",
                "author": "Philip K. Dick",
                "price": 450,
                "quantity": 1,
                "image": 'blade.jpg',
                "description": "It was January 2021, and Rick Deckard had a license to kill. Somewhere among the hordes of humans out there, lurked several rogue androids.Deckard &#39; s  assignment--find them and then...& quot; retire & quot; them.Trouble was, the androids all looked exactly like humans, and they didn't want to be found!"
            });
        books.push(
            {
                "id": 4,
                "title": "Chess Story",
                "author": "Stefan Zweig",
                "price": 300,
                "quantity": 1,
                "image": 'chess.jpg',
                "description": "Chess Story, also known as The Royal Game, is the Austrian master Stefan Zweig\'s final achievement,completed in Brazilian exile and sent off to his American publisher only a matter of days before his suicide in 1942. It is the only story in which Zweig looks at Nazism, and he does so with characteristic emphasis on the psychological.<p>Travelers by ship from New York to Buenos Aires find that on board with them is the world champion of chess, an arrogant and unfriendly man. They come together to try their skills against him and are soundly defeated. Then a mysterious passenger steps forward to advise them and their fortunes change. How he came to possess his extraordinary grasp of the game of chess and at what cost lie at the heart of Zweig\'s story.This new translation of Chess Story brings out the work\'s unusual mixture of high suspense and poignant reflection."
            });
        books.push(
            {
                "id": 5,
                "title": "The Great Gatsby",
                "author": "F. Scott Fitzgerald",
                "price": 200,
                "quantity": 1,
                "image": 'gatsby.jpg',
                "description": "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality. The brilliance of the novel is Orwell's prescience of modern life—the ubiquity of television, the distortion of the language—and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written."
            });
        books.push(
            {
                "id": 6,
                "title": "The Hobbit There and Back Again",
                "author": "J.R.R Tolkien",
                "price": 300,
                "quantity": 1,
                "image": 'hobbit.jpg',
                "description": "n a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole,and that means comfort.<p>Written for J.R.R. Tolkien’s own children, The Hobbit met with instant critical acclaim when it was first published in 1937. Now recognized as a timeless classic, this introduction to the hobbit Bilbo Baggins, the wizard Gandalf, Gollum, and the spectacular world of Middle-earth recounts of the adventures of a reluctant hero, a powerful and dangerous ring, and the cruel dragon Smaug the Magnificent. The text in this 372-page paperback edition is based on that first published in Great Britain by Collins Modern Classics (1998), and includes a note on the text by Douglas A. Anderson (2001). Unforgettable!"
            });
        books.push(
            {
                "id": 7,
                "title": "The Metamorphosis",
                "author": "Franz Kafka",
                "price": 350,
                "quantity": 1,
                "image": 'meta.jpg',
                "description": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect. He was laying on his hard, as it were armor-plated, back and when he lifted his head a little he could see his domelike brown belly divided into stiff arched segments on top of which the bed quilt could hardly keep in position and was about to slide off completely. His numerous legs, which were pitifully thin compared to the rest of his bulk, waved helplessly before his eyes.<p>With it's startling, bizarre, yet surprisingly funny first opening, Kafka begins his masterpiece, The Metamorphosis. It is the story of a young man who, transformed overnight into a giant beetle-like insect, becomes an object of disgrace to his family, an outsider in his own home, a quintessentially alienated man. A harrowing—though absurdly comic—meditation on human feelings of inadequacy, guilt, and isolation, The Metamorphosishas taken its place as one of the most widely read and influential works of twentieth-century fiction. As W.H. Auden wrote,\"Kafka is important to us because his predicament is the predicament of modern man."
            });
        books.push(
            {
                "id": 8,
                "title": "The Old Man and The Sea",
                "author": "Ernest Hemingway",
                "price": 200,
                "quantity": 1,
                "image": 'oldman.jpg',
                "description": "The last novel Ernest Hemingway saw published, The Old Man and the Sea has proved itself to be one of the enduring works of American fiction. It is the story of an old Cuban fisherman and his supreme ordeal: a relentless, agonizing battle with a giant marlin far out in the Gulf Stream. Using the simple, powerful language of a fable, Hemingway takes the timeless themes of courage in the face of defeat and personal triumph won from loss and transforms them into a magnificent twentieth-century classic."
            });
        books.push(
            {
                "id": 9,
                "title": "Murder on the orient express",
                "author": "Agatha Christie",
                "price": 250,
                "quantity": 1,
                "image": 'orient.jpg',
                "description": "Le train est aussi dangereux que le paquebot » affirme Hercule Poirot…<p>Le lendemain, dans une voiture de l’Orient-Express bloqué par les neiges yougoslaves, on découvre le cadavre d’un américain lardé de douze coups de couteau. L’assassin n’a pu venir de l’extérieur : voici donc un huis clos, le plus fameux, peut-être, de toute la littérature policière. Pour mener son enquête, le petit détective belge a le choix entre une princesse russe, une Américaine fantasque, le secrétaire de la victime, un couple de Hongrois distingués, l’inévitable colonel de retour des Indes, les domestiques de tout ce beau monde et le contrôleur du train."
            });
        books.push(
            {
                "id": 10,
                "title": "The Little Prince",
                "author": "Antoine de Saint-Exupéry",
                "price": 220,
                "quantity": 1,
                "image": 'price.jpg',
                "description": "Moral allegory and spiritual autobiography, The Little Prince is the most translated book in the French language. With a timeless charm it tells the story of a little boy who leaves the safety of his own tiny planet to travel the universe, learning the vagaries of adult behaviour through a series of extraordinary encounters. His personal odyssey culminates in a voyage to Earth and further adventures."
            });
        books.push(
            {
                "id": 11,
                "title": "A Study in Scarlet",
                "author": "Arthur Conan Doyle",
                "price": 350,
                "quantity": 1,
                "image": 'sherlock.jpg',
                "description": "'There's a scarletthread of murder running through the colourless skein of life, and our duty is to unravel it, and isolate it, and expose every inch of it.'<p>From the moment Dr John Watson takes lodgings in Baker Street with the consulting detective Sherlock Holmes, he becomes intimately acquainted with the bloody violence and frightening ingenuity of the criminal mind.<p>In A Study in Scarlet , Holmes and Watson's first mystery, the pair are summoned to a south London house where they find a dead man whose contorted face is a twisted mask of horror.<p>The body is unmarked by violence but on the wall a mysterious word has been written in blood. The police are baffled by the crime and its circumstances. But when Sherlock Holmes applies his brilliantly logical mind to the problem he uncovers a tragic tale of love and deadly revenge ."
            });
        books.push(
            {
                "id": 12,
                "title": "The Time Machine",
                "author": "H.G Wells",
                "price": 450,
                "quantity": 1,
                "image": 'time.jpg',
                "description": "\“I’ve had a most amazing time....\”<p>So begins the Time Traveller’s astonishing firsthand account of his journey 800,000 years beyond his own era—and the story thatlaunched H.G. Wells’s successful career and earned him his reputation as the father of science fiction. With a speculative leap that still fires the imagination, Wells sends his brave explorer to face a future burdened with our greatest hopes...and our darkest fears. A pull ofthe Time Machine’s lever propels him to the age of a slowly dying Earth. There he discovers two bizarre races—the ethereal Eloi and the subterranean Morlocks—who not only symbolize the duality of human nature, but offer a terrifying portrait of the men of tomorrow as well. Published in 1895, this masterpiece of invention captivated readers on the threshold of a new century. Thanks to Wells’s expert storytelling and provocative insight, The Time Machinewill continue to enthrall readers for generations to come."
            });

        window.sessionStorage.setItem('books', JSON.stringify(books))
    }
}