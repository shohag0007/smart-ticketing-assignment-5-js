const allBtn = document.getElementsByClassName("btn");

for (const btn of allBtn) {
    btn.addEventListener("click", toggleItem);
}

var itemArray = [];

function toggleItem(event) {
    var item = event.target.innerText;
    console.log(item);

    var index = itemArray.indexOf(item);

    if (index === -1) {
        if (itemArray.length > 3) {
            alert("You selected maximum");
        } else {
            itemArray.push(item);
            event.target.classList.add("bg-blue-500", "text-white");
            if (itemArray.length <= 4) {
                updateList(item);
                Price(itemArray.length);
            }
        }
    }
    console.log("Item Array:", itemArray);
}

function updateList(seatName) {
    const testDiv = document.getElementById("test");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const row = document.createElement("div");

    div1.innerText = seatName;
    div2.innerText = "Economoy";
    div3.innerText = "550";

    row.appendChild(div1);
    row.appendChild(div2);
    row.appendChild(div3);

    row.classList.add("flex", "justify-around");

    testDiv.appendChild(row);
}

function Price(t) {
    const priceT = document.getElementById("Price");
    const TP = 550 * t;
    priceT.innerText = TP;
}

const applyBtn = document.getElementById("apply");
applyBtn.addEventListener("click", disc);


function disc() {
    const disText = document.getElementById('disc')
    if (disText.value === 'NEW15') {
        const priceT = document.getElementById("gPrice");
        const TP = (550 * 4) - (((550 * 4) * 15) / 100);
        priceT.innerText = TP;
    }
    else if (disText.value === 'Couple20') {
        const priceT = document.getElementById("gPrice");
        const TP = (550 * 4) - (((550 * 4) * 20) / 100);
        priceT.innerText = TP;
    }
}

const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', function () {
    const success = document.getElementById('success');
    success.classList.remove('hidden');
    success.classList.add('flex');
})

setInterval(() => {
    const success = document.getElementById('success');
    success.classList.remove('flex');
    success.classList.add('hidden');
},5000)