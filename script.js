/////////// USED TRY AND CATCH FOR ERRORS //////////////

document.body.innerHTML += `<section class="dune-list"></section>`;

///// ASYNC FUNCTION FOR GETTING DATA OF DUNE BOOKS //////
async function getdune() {
    const data = await fetch("https://the-dune-api.herokuapp.com/books/20");
    const dunes = await data.json();
    console.log(dunes);
    const dunecontainer = document.querySelector(".dune-list");

    dunes.forEach((dune)=>{
        console.log(dune);
        
        dunecontainer.innerHTML += `
        <div class="dune-container">    
            <h1 class="dune-name">${dune.title}</h1>
            <h3 class="dune-"><i>${dune.author}</i></h3>
            <h3 class="dune-"><i>${dune.year}</i></h3>
        </div>    
            `;
    });

}


getdune();












