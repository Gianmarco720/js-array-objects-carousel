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
  
  
  
  // Seleziono l'indice dell'immagine, titolo e info che voglio attivare
  let activeImg = 0;
  let activeTitle = 0;
  let activeInfo = 0;
  
  
  // inserisco le immagini
  for (let i = 0; i < slides.length; i++) {
    const slideUrl = slides[i];
    //console.log(slideUrl);
    const imgMarkup = `
        <img class="img-fluid ${i === activeImg ? 'active' : ''}" src="${slideUrl.image}" alt= "">
        <h1 class="${i === activeTitle ? 'active' : ''}">${slideUrl.title}</h1>
        <p class="${i === activeInfo ? 'active' : ''}">${slideUrl.text}</p>`;
                         
    //prendo l'elemento della dom dove inserire le imamgini le inserisco
    slidesElement.insertAdjacentHTML('beforeend', imgMarkup);
  }
  
  /* 
  Al click dell 'utente sulle frecce, il programma cambierà l’immagine attiva
  */
  
  
  // aggiungo event listener sulla freccia del next
  nextElement.addEventListener('click', function () {
    console.log('Ho cliccato su next');
    
    const currentImg = document.querySelectorAll('img');
    currentImg.classList.remove('active');
    currentImg++;
    const nextImg = currentImg[activeImg]
    nextImg.classList.add('active')

    const currentTitle = document.querySelectorAll('h1');
    currentTitle.classList.remove('active');
    currentTitle++;
    const nextTitle = currentTitle[activeTitle]
    nextTitle.classList.add('active')
  });
  
  
  // aggiungo event listener sulla freccia del prev
  prevElement.addEventListener('click', function () {
    console.log('Ho cliccato su prev');
    
  });