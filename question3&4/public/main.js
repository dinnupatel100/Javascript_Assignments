document.addEventListener("DOMContentLoaded", () => {
  const BASE_URL = "http://localhost:3000/blogs";

  
  const getData = async () => {
    const res = await fetch(BASE_URL)
    const data = await res.json()
    return data
  };
  
  getData().then((data)=>{
    const table = document.getElementById("table");
    data.forEach( (value)=>{
      console.log(value);
      const tableRow = document.createElement("tr");
      tableRow.innerHTML = `<td>${value.title}</td>
                            <td>${value.desc}</td> `
      table.appendChild(tableRow)
    })
  })

  const submitBTN = document.getElementById("submit");
  submitBTN.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("desc").value;

    const submitData = async (payload) => {
      await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }).then((res) => res.json());
    };

    const payload = { title: title, desc: description };
    submitData(payload);
  });
});

//npx json-server ./db.json*
