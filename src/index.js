const init = () => {
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const event = e.target.children[1].value
    console.log(event)

    fetch(`http://localhost:3000/movies/${event}`)
    .then (res => res.json())
    .then (jsonData => {
        const title = document.querySelector('#movieDetails h4')
        const summary = document.querySelector('#movieDetails p')

        title.innerText = jsonData.title
        summary.innerText = jsonData.summary
        console.log(jsonData.title)
        console.log(jsonData.summary)
    })
  })
}

document.addEventListener('DOMContentLoaded', init);

// const init = () => {
//     const inputForm = document.querySelector('form')
  
//     inputForm.addEventListener('submit', (event) => {
//       event.preventDefault();
//       const input = document.querySelector('input#searchByID');
//       console.log(input.value)
  
//       fetch(`http://localhost:3000/movies/${input.value}`)
//       .then(response => response.json())
//       .then(data => {
//         const title = document.querySelector('section#movieDetails h4');
//         const summary = document.querySelector('section#movieDetails p');
  
//         title.innerText = data.title;
//         summary.innerText = data.summary;
//         console.log(data.summary)
//       });
//     });
//   }
  
//   document.addEventListener('DOMContentLoaded', init);















