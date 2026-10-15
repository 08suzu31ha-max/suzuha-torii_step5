const button = document.getElementById("button");

let colorIndex = 0;
const colors = ["lightblue", "lightgreen", "lightcoral"];

button.addEventListener("click", function(){
    document.body.style.backgroundColor =  colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});

const input = document.getElementById("input");
const listArea = document.getElementById("listArea");

const count = document.getElementById("count");

const displayButton = document.getElementById("display");

displayButton.addEventListener("click", function(){
    const text = input.value.trim();
    if (text === ""){
        alert("文字を入力してください");
        return;
    }
    const displayArea = document.getElementById("displayArea");
    displayArea.textContent = text;
    if(displayArea.style.backgroundColor === "yellow"){
        displayArea .style.backgroundColor = "";
    } else {
        displayArea.style.backgroundColor = "yellow";
    }
});

const addButton = document. getElementById("add");

addButton.addEventListener("click", function(){
    const items = listArea.querySelectorAll("tr");
    if(items.length >= 3){
        return;
    }

    const text = input.value.trim();
    if (text === ""){
        alert("文字を入力してください");
        return;
    }
    const item =document.createElement("tr");
    const contentCell = document.createElement("td");
    contentCell.textContent = text;

    item.appendChild(contentCell);

    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    actionCell.appendChild(deleteButton);
    item.appendChild(actionCell);

    deleteButton.addEventListener("click", function(){
        item.remove();
        count.textContent = "現在の行数 :" + listArea.querySelectorAll("tr").length;
        if(listArea.querySelectorAll("tr").length < 3) {
            addButton.style.display = "";
        }
    });
    listArea.appendChild(item);
    count.textContent = "現在の行数:" + listArea.querySelectorAll("tr").length;
    if(listArea.querySelectorAll("tr").length >= 3) {
        addButton.style.display = "none";
    }
});

for (let i = 1; i <= 5; i++){
    console.log(i);
}