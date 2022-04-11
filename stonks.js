let stonks = 0;
let cash = 1000;
let price = 100;


function setup() {
    setTitle("Stonks 2.0");
    addButton("buy");
    addButton("sell");
}

function update() {
    price = 100 + 20 * Math.sin(Date.now() / 1000);
    display(JSON.stringify({ stonks, cash, price }));
}

function handleClick(name) {
    if (name == "buy") {
        if (cash > price) {
            stonks += 1;
            cash -= price;
        }
    }
}