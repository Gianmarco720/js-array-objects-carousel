const slides = [
    {
        image: './assets/img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },

    {
        image: './assets/img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    
    {
        image: './assets/img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    
    {
        image: './assets/img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    
    {
        image: './assets/img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }    
  ];
  
  
  // Selezione elementi della DOM 
  const slidesElement = document.querySelector('.slides'); //dove inserire le immagini .slides usando querySelector()
  const nextElement = document.querySelector('.next'); // la freccia next
  const prevElement = document.querySelector('.prev'); // la freccia prev
  
  
  
  // Seleziono l'indice dell'immagine che voglio attivare
  let active = 0
  
  
  
  // inseriamo tutte le immagini dinamicamente servendoci dell 'array fornito
  
  for (let i = 0; i < slides.length; i++) {
    const slideUrl = slides[i];
    //console.log(slideUrl);
    const imgMarkup = `
        <img class="img-fluid ${i === active ? 'active' : ''}" src="${slideUrl.image}" alt= "">
        <h1 class="${i === active ? 'active' : ''}">${slideUrl.title}</h1>
        <p class="${i === active ? 'active' : ''}">${slideUrl.text}</p>`;
                         
    //prendo l'elemento della dom dove inserire le imamgini le inserisco
    slidesElement.insertAdjacentHTML('beforeend', imgMarkup);
  }
  
  /* 
  Al click dell 'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
  */
  
  
  // aggiungo event listener sulla freccia del next
  nextElement.addEventListener('click', function () {
    console.log('Ho cliccato su next');
  
    //cambierà l’immagine attiva
    // selezionare dalla dom l'immagine attualmente attiva
    const activeSlideElement = document.querySelector('.slides > img.active')
    console.log(slides[active]);
  
    console.log(activeSlideElement);
    // tolgo all'immagine la classe active
    activeSlideElement.classList.remove('active');
    //activeInfoElement.classList.remove('active');
    
    // incremento active image di 1
    active++ // activeImage = activeImage + 1
    console.log(activeImage); // al primo click il valore da 0 diventa 1
    // seleziono tutte le immagini
    const allSlides = document.getElementsByClassName('img-fluid')
    // sleziono l'immagine successiva
    const nextSlideElement = allSlides[active];
    // aggiungo alla slide successiva la class active
    nextSlideElement.classList.add('active')
  
  });
  
  
  // aggiungo event listener sulla freccia del prev
  prevElement.addEventListener('click', function () {
    console.log('Ho cliccato su prev');
    //cambierà l’immagine attiva
    // selezionare dalla dom l'immagine attualmente attiva
    const activeSlideElement = document.querySelector('.slides > img.active')
    console.log(activeSlideElement);
    // tolgo all'immagine la classe active
    activeSlideElement.classList.remove('active');
    // incremento active image di 1
    active-- // activeImage = activeImage + 1
    console.log(active); // al primo click il valore da 0 diventa 1
    // seleziono tutte le immagini
    const allSlides = document.getElementsByClassName('img-fluid')
    // sleziono l'immagine successiva
    const nextSlideElement = allSlides[active];
    // aggiungo alla slide successiva la class active
    nextSlideElement.classList.add('active')
  });