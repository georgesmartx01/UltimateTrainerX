document.addEventListener('DOMContentLoaded', () => {
    // list all card options
    const cardArray = [
    // Fruits
    {
        name: 'apple',
        img: '../images/fruits/apple.png'
    },

    {
        name: 'avocado',
        img: '../images/fruits/avocado.png'
    },

    {
        name: 'banana',
        img: '../images/fruits/banana.png'
    },

    {
        name: 'blueberry',
        img: '../images/fruits/blueberry.png'
    },

    {
        name: 'grape',
        img: '../images/fruits/grape.png'
    },

    {
        name: 'grapefruit',
        img: '../images/fruits/grapefruit.png'
    },

    {
        name: 'kiwi',
        img: '../images/fruits/kiwi.png'
    },

    {
        name: 'mango',
        img: '../images/fruits/mango.png'
    },

    {
        name: 'orange',
        img: '../images/fruits/orange.png'
    },

    {
        name: 'pear',
        img: '../images/fruits/pear.png'
    },

    {
        name: 'pineapple',
        img: '../images/fruits/pineapple.png'
    },

    {
        name: 'raspberry',
        img: '../images/fruits/raspberry.png'
    },

    {
        name: 'strawberry',
        img: '../images/fruits/strawberry.png'
    },

    {
        name: 'watermelon',
        img: '../images/fruits/watermelon.png'
    },

    // Vegetables
    {
        name: 'artichoke',
        img: '../images/vegetables/artichoke.png'
    },

    {
        name: 'broccoli',
        img: '../images/vegetables/broccoli.png'
    },

    {
        name: 'brown-onion',
        img: '../images/vegetables/brown-onion.png'
    },

    {
        name: 'cabbage',
        img: '../images/vegetables/cabbage.png'
    },

    {
        name: 'corn',
        img: '../images/vegetables/corn.png'
    },

    {
        name: 'courgette',
        img: '../images/vegetables/courgette.png'
    },

    {
        name: 'cucumber',
        img: '../images/vegetables/cucumber.png'
    },

    {
        name: 'garlic',
        img: '../images/vegetables/garlic.png'
    },

    {
        name: 'green-pepper',
        img: '../images/vegetables/green-pepper.png'
    },

    {
        name: 'red-onion',
        img: '../images/vegetables/red-onion.png'
    },

    {
        name: 'red-pepper',
        img: '../images/vegetables/red-pepper.png'
    },

    {
        name: 'spinach',
        img: '../images/vegetables/spinach.png'
    },

    {
        name: 'tomato',
        img: '../images/vegetables/tomato.png'
    },

    {
        name: 'turnip',
        img: '../images/vegetables/turnip.png'
    },

    {
        name: 'zucchini',
        img: '../images/vegetables/zucchini.png'
    },

    // Miscellaneous
    {
        name: 'coffee-beans',
        img: '../images/coffee-beans.png'
    },

    {
        name: 'house',
        img: '../images/miscellaneous/house.png'
    },

    {
        name: 'plane',
        img: '../images/miscellaneous/plane.png'
    },

    // Fast Food
    {
        name: 'cheeseburger',
        img: '../images/fast food/cheeseburger.png'
    },

    {
        name: 'fries',
        img: '../images/fast food/fries.png'
    },

    {
        name: 'hotdog',
        img: '../images/fast food/hotdog.png'
    },

    {
        name: 'ice-cream',
        img: '../images/fast food/ice-cream.png'
    },

    {
        name: 'milkshake',
        img: '../images/fast food/milkshake.png'
    },

    {
        name: 'pizza',
        img: '../images/fast food/pizza.png'
    }
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const result = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    /**
     * Randomly select 10 cards without selecting the same one
     */
    function getRandomElements(cardList) {
        let randomCards = [...cardList];
        let newCards = [];

        for (let count = 0; count < 10; count++) {
            let randomElements = Math.floor(Math.random()*randomCards.length);
            let splicedCard = randomCards.splice(randomElements, 1)[0];
            newCards.push(splicedCard);
        }
        return newCards;
    }

    getRandomElements(cardArray);

    /**
     * Initialise the game board
     */
    function createBoard() {
        for (let index = 0; index < cardArray.length; index++) {
            const card = document.createElement('img');
            card.setAttribute('src', '../CSS/images/background/blue-gradient.png');
            card.setAttribute('data-id', index);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    /** Check for matches */ 
    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const cardOneId = cardsChosenId[0];
        const cardTwoId = cardsChosenId[1];

        if (cardOneId == cardTwoId) {
            cards[cardOneId].setAttribute('src', '../CSS/images/background/blue-gradient.png');
            cards[cardTwoId].setAttribute('src', '../CSS/images/background/blue-gradient.png');
            showMessage('You have clicked the same image!');
        } else if (cardsChosen[0] === cardsChosen[1]) {
            showMessage('You found a match');
            cards[cardOneId].setAttribute('src', '../CSS/images/background/blue-gradient.png');
            cards[cardTwoId].setAttribute('src', '../CSS/images/background/blue-gradient.png');
            cards[cardOneId].removeEventListener('click', flipCard);
            cards[cardTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[cardOneId].setAttribute('src', '../CSS/images/background/blue-gradient.png');
            cards[cardTwoId].setAttribute('src', '../CSS/images/background/blue-gradient.png');
            showMessage('Sorry, try again!');
        }
        cardsChosen = [];
        cardsChosenId = [];
        result.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            result.textContent = 'Congratulations! You found them all!';
        }
    }

    /**
     * Flip two cards
     */
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
})