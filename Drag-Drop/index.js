let lists = document.getElementById("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");


for(list of lists){
    list.addEventListener("dragstart", function(e){
        let selected = e.target;

        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(slected)
        })
    })
}
