{

    async function updateTable(root){

     root.querySelector(".table-refresh__button").classList.add("table-refresh__button--refreshing");
     const table = root.querySelector(".table-refresh__table");
     const response = await fetch(root.dataset.url);
     const data = await response.json();
     console.log(data);

//Clear table
        table.querySelector("thead tr").innerHTML="";
        table.querySelector("tbody").innerHTML="";

//populate headers
for(const header of data.headers){
    table.querySelector("thead tr").insertAdjacentHTML("beforeend", `<th>${header}</th>`);
}

//populating rows

for(const row of data.rows){
    table.querySelector("tbody").insertAdjacentHTML("beforeend",`
    <tr>
        ${ row.map(col=>`<td>${ col }</td>`).join("")}
    </tr>
    `)
}


    }
    
    for (const root of document.querySelectorAll(".table-refresh[data-url]")){
     const table = document.createElement("table");
     const options= document.createElement("div");
    
     table.classList.add("table-refresh__table");
     options.classList.add("table-refresh__options");
    
    table.innerHTML = `
    <thead>
    <tr></tr>
    </thead>
    <tbody>
    <tr>
    <td>Loading</td>
    </tr>
    `;

    options.innerHTML= `
    <span class="table-fresh__label">Last Update: never</span>
    <button type="button" class="table-refresh__button">
    <i class="material-icons">Refresh</i>
    </button>
    `;
    root.append(table, options);
    
    options.querySelector(".table-refresh__button").addEventListener("click", ()=> {
        updateTable(root);
    })
    
    } 

}