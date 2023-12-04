const arr = ["Telangana","Maharashtra","Andhra Pradesh","Assam","Kerala"];

const navDiv = document.getElementById("nav");

arr.forEach((item)=>{
      const btn = document.createElement("button");
      btn.innerText = item ;
      navDiv.appendChild(btn);
})
const mainDiv =document.getElementById("main");

const Telangana=["- Hyderabad","-Warangal","-Karimnagar","-Wanaparthy","-Medak","Sanga"];
Telangana.forEach((item)=>{
    const h5 = document.createElement("h5");
    h5.innerText = item ;
})
     mainDiv.appendChild(h5);

const hr = document.createElement("hr")
mainDiv.appendchild(hr);

const mah=["-Pune","-Nanded","-Mumbai","-Lonavala","-Nagpur","-Parbhani"];
mah.forEach((item)=>{
    const h5 = document.createElement("h5");
    h5.innerText = item ;

    mainDiv.appendchild(h5);
})
const hr1 = document.createElement("hr");
mainDiv.appendchild(hr1);

const Andh = ["-Vijayawada","-Kurnool","-Tirupati","-Nellore","-Visakhapatnam"];
Andh.forEach((item)=>{
    const h5 = document.createElement("h5");
    h5.innerText = item ;
    mainDiv.appendchild(h5);
})

const hr2 = document.createElement("hr");
mainDiv.appendchild(hr2);

const Assam = ["- Jorhat","-Tezpur"," - Guawahati","- Haflong","- Silchar","- Diphu"];
Assam.forEach((item)=>{
    const h5 = document.createElement("h5");
    h5.innerText = item ;
    mainDiv.appendchild(h5);
})
const hr3 = document.createElement("hr");
mainDiv.appendchild(hr3);

const Kerala= ["- Kochi","- Alappuzha","- Malappuram","- Kochikode","- Kannur","- Palakkad"];
Kerala.forEach((item)=>{
    const h5 = document.createElement("h5");
    h5.innerText = item ;
    mainDiv.appendchild(h5);
})

const hr4 = document.createElement("hr");
mainDiv.appendchild(hr4);


