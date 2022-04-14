document.querySelector('button').addEventListener('click', getPoem)
document.querySelector('button.goBack').addEventListener('click', goBack)

function getPoem(){
    //hide button and unhide the divs with image and content
    const image = document.querySelectorAll("img");
    const divider = document.querySelectorAll("div");
    const goBackButton = document.querySelectorAll("button.goBack");
    const pickerButton =  document.querySelector('button.Picker')
    const header = document.querySelector('section.button')

    image.forEach(item => item.classList.remove("hidden"));
    divider.forEach(item => item.classList.remove("hidden"));
    goBackButton.forEach(item => item.classList.remove("hidden"));
    
    pickerButton.style = "display: none;"
    header.style = "padding: 0; margin: 1em 0 1em 0"

    ///api fetch
    fetch(`https://poetrydb.org/random/1;`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      //plugs title into h1, author into h3, and poem into p. also adds a br for empty lines in the array
      document.querySelector("div").insertAdjacentHTML("beforeend", `<h1>${data[0].title}</h1>`)
      document.querySelector("div").insertAdjacentHTML("beforeend", `<h3>${data[0].author}</h3>`) 
      data[0].lines.forEach((arr, x) => {
        if (data[0].lines[x] === "") document.querySelector("div").insertAdjacentHTML("beforeend", `
        <br/>
        `);
        document.querySelector("div").insertAdjacentHTML("beforeend", `
        <p>
          ${ data[0].lines[x] }
         </p>
        `);
       
      })
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function goBack(){
  location.reload()
}
