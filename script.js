fetch("https://s3.amazonaws.com/open-to-cors/assignment.json").then((data)=>{
    return data.json();
}).then((objectData)=>{
    const data=Object.values(objectData.products);
    const sortedProducts=data.sort((a,b)=>b.popularity-a.popularity);
    console.log(data)
    let tableData="";
    let index=1;
   data.map((values)=>{
        tableData+=`<tr>
        <td>${index++}</td>
        <td>${values.title}</td>
        <td>${values.price}</td>
        <td>${values.popularity}</td>
    </tr>`
    })
    document.getElementById("table_body").innerHTML=tableData;

})