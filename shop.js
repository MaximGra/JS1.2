const product = [
    {
        id: '1',
        name: 'Телефон',          
        description: 'Смартфон',
        sizes: '20x30',         
        price: 1000,         
        available: 'Доступен',
    },     
    {
        id: '2',
        name: 'Мышь',          
        description: 'Оптическая мышь',
        sizes: '10x15',         
        price: 500,         
        available: 'Доступен',
    },
    {
        id: '3',
        name: 'Монитор',          
        description: 'Монитор 6К',
        sizes: '1200x1500',         
        price: 1500,         
        available: 'Доступен',
    },
    {
        id: '4',
        name: 'Планшет',          
        description: 'Графический планшет',
        sizes: '200х200',         
        price: 700,         
        available: 'Доступен',
    },
    {
        id: '5',
        name: 'SSD',          
        description: 'SSD 1TB',
        sizes: '20х30',         
        price: 800,         
        available: 'Доступен',
    },   
];

let basket = [
    {
        good: product[0],
        amount: 3,
    },
    {
        good: product[3],
        amount: 1,
    }
]

function addBasket(i, n) {
    const newItem = {
        good: product[i],
        amount: +n,
    }
    basket.push(newItem) 
    return basket
}

function cleanBasket() {
    basket = []
    return basket
}

function deleteItem(i) {
    basket.splice(i, 1)
    return basket
}

function resultBasket () {
    var totalAmount = 0;
    var totalSumm = 0;
    var index, len;
    for (index = 0, len = basket.length; index < len; ++index) {
        totalAmount = totalAmount + basket[index].amount;
        totalSumm = totalSumm + basket[index].good.price * basket[index].amount
    }
    let resultBasket = {
        totalAmount: totalAmount,
        totalSumm: totalSumm,
    }
    return resultBasket
}

console.log(addBasket(4, 2))
console.log(deleteItem(0))
console.log(resultBasket())

console.log(cleanBasket())
console.log(resultBasket())