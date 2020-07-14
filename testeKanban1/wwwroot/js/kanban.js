"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/kanban").build();

//Disable send button until connection is established
document.getElementById("buttonCreateItem").disabled = true;

connection.on("UpdateTable", function (title) {
    //recupera o title
    var title = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    //cria uma tr com o title
    var novaTr = document.createElement("tr");
    novaTr.appendChild(title);

    //recupera a tabela
    var tableTodo = document.getElementById("TableToDo");

    tableTodo.getElementsByTagName("tbody").appendChild(novaTr);
});

connection.start().then(function () {
    document.getElementById("buttonCreateItem").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

// criando item
document.getElementById("buttonCreateItem").addEventListener("click", function (event) {
    var title = document.getElementById("Title").value;
    connection.invoke("CreateItem", title).catch(function (err) {
        return console.error(err.toString());
    });
    //event.preventDefault();
});