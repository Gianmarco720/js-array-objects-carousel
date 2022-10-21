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
  //console.log(slidesElement, nextElement, prevElement);
  
  
  
  // Seleziono l'indice dell'immagine, titolo e info che voglio attivare
  let activeSlides = 0;
  
  // inserisco le immagini
  for (let i = 0; i < slides.length; i++) {
    const slideUrl = slides[i];
    //console.log(slideUrl);
    const imgMarkup = `
    <img class="img-fluid ${i === activeSlides ? 'active' : ''}" src="${slideUrl.image}" alt= "">
    <div class="info ${i === activeSlides ? 'active' : 'hidden'}">
        <h1>${slideUrl.title}</h1>
        <p>${slideUrl.text}</p>
    </div>`;
                         
    //prendo l'elemento della dom dove inserire le imamgini le inserisco
    slidesElement.insertAdjacentHTML('beforeend', imgMarkup);
    //console.log(slidesElement);
  }

  
  /* 
  Al click dell 'utente sulle frecce, il programma cambierà l’immagine attiva
  */
  
  
  // aggiungo event listener sulla freccia del next
nextElement.addEventListener('click', function () {
    console.log('Ho cliccato su next');
    const currentImg = document.querySelector('img');
    const currentinfo = document.querySelector('.info')
    currentImg.classList.remove('active');
    currentinfo.classList.remove('active')
    activeSlides++
    console.log(activeSlides);
    const allImg = document.querySelector('.img-fluid')
    const nextImgElement = allImg[activeSlides];
    nextImgElement.classList.add('active')
     
});
  
  
//   // aggiungo event listener sulla freccia del prev
//   prevElement.addEventListener('click', function () {
//     console.log('Ho cliccato su prev');
    
//   });