   document.addEventListener("DOMContentLoaded", hentJson);

   let ret;
   async function hentJson() {
       let jsonData = await fetch("menu.json");
       ret = await jsonData.json();
       vis(ret, "Menu");
       lavFiltre();
   }

   function vis(ret, overskrift) {
       let temp = document.querySelector(".menutemplate");
       let dest = document.querySelector(".liste");
       dest.innerHTML = "";
       document.querySelector(".overskrift").textContent = overskrift;
       ret.forEach(menu => {
           let klon = temp.cloneNode(true).content;
           klon.querySelector(".titel").textContent = menu.navn;
           klon.getElementById("img").src = "imgs/small/" + menu.billede + "-sm.jpg";
           klon.querySelector(".descript").textContent = menu.kortbeskrivelse;
           klon.querySelector(".pris").textContent = menu.pris;
           klon.querySelector(".ret").setAttribute("data-id", menu.id);
           klon.querySelector("article").addEventListener("click", () => {
               location.href = "single.html?id=" + menu.id;
           });
           dest.appendChild(klon);
       });
   };

   /*  function showSingle() {
            console.log("ShowSingle");
            let my_id = this.getAttribute("data-id");
            let single = ret.find(menu => {
                if (my_id == menu.id) {
                    console.log("Success", menu.navn);
                    document.querySelector(".popup").style.visibility = "visible";
                    document.querySelector(".single-titel").textContent = menu.navn;
                    document.getElementById("img").src = "imgs/medium/" + menu.billede + "-md.jpg";
                    document.querySelector(".data-beskrivelse").textContent = menu.langbeskrivelse;

                }
            });
        }
*/

   /*function lavFiltre() {
       let foretter = ret.filter(menu => menu.kategori == "forretter");
       let hovedretter = ret.filter(menu => menu.kategori == "hovedretter");
       let desserter = ret.filter(menu => menu.kategori == "desserter");
       let drikkevarer = ret.filter(menu => menu.kategori == "drikkevarer");
       let sideorders = ret.filter(menu => menu.kategori == "sideorders");

       document.querySelector("#filter-alle").addEventListener("click", () => {
           vis(ret, "Menu");
       });
       document.querySelector("#filter-forretter").addEventListener("click", () => {
           vis(foretter, "Forretter");
       });
       document.querySelector("#filter-hovedretter").addEventListener("click", () => {
           vis(hovedretter, "Hovedretter");
       });
       document.querySelector("#filter-desserter").addEventListener("click", () => {
           vis(desserter, "Desserter");
       });

       document.querySelector("#filter-sideorders").addEventListener("click", () => {
           vis(sideorders, "Side-Orders");
       });

   }
*/

   function lavFiltre() {
       //sorter retter efter kategori
       document.querySelector('#filter-alle').addEventListener("click", () => {
           location.href = "index.html";
       });
       document.querySelector('#filter-forretter').addEventListener("click", () => {
           location.href = "kategori.html?kategori=forretter";
       });
       document.querySelector('#filter-hovedretter').addEventListener("click", () => {
           location.href = "kategori.html?kategori=hovedretter";
       });
       document.querySelector('#filter-desserter').addEventListener("click", () => {
           location.href = "kategori.html?kategori=desserter";
       });
       document.querySelector('#filter-drikkevarer').addEventListener("click", () => {
           location.href = "kategori.html?kategori=drikkevarer";
       });

       document.querySelector("#filter-sideorders").addEventListener("click", () => {
           location.href = "kategori.html?kategori=sideorders";
       });
   }
