window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    let links = document.querySelectorAll('.a_tag');
    if (window.scrollY > 0) {
      header.classList.add('gray');
      header.classList.remove('transparent');
      Array.from(links).forEach(function(link) {
        link.style.color = '#424244';
      });
    } else {
      header.classList.remove('gray');
      header.classList.add('transparent');
      Array.from(links).forEach(function(link) {
        link.style.color = '#ffff';
        link.addEventListener('mouseenter', function() {
            link.style.color = '#FF6700';
          });
        
          
          link.addEventListener('mouseleave', function() {
            link.style.color = ''; 
          });
      });
    
    }
  });
  var cardsData = {
    card1: {
      title: "Card Title 1",
      about: "This is a brief description about the first card.",
      imgAddress: "https://via.placeholder.com/200/FF0000"
    },
    card2: {
      title: "Card Title 2",
      about: "This is a brief description about the second card.",
      imgAddress: "https://via.placeholder.com/200/00FF00"
    },
    card3: {
      title: "Card Title 3",
      about: "This is a brief description about the third card.",
      imgAddress: "https://via.placeholder.com/200/0000FF"
    },
    card4: {
      title: "Card Title 4",
      about: "This is a brief description about the fourth card.",
      imgAddress: "https://via.placeholder.com/200/FFFF00"
    }
  };
  
  function createCard(cardInfo) {
    var card = document.createElement('div');
    card.classList.add('card');

  
    var title = document.createElement('h2');
    title.textContent = cardInfo.title;
  
    var about = document.createElement('p');
    about.textContent = cardInfo.about;
  
    var img = document.createElement('img');
    img.src = cardInfo.imgAddress;
    img.alt = cardInfo.title;
    
  
    
    card.appendChild(title);
    card.appendChild(about);
    card.appendChild(img);
  
    return card;
  }
  
  
  var cardContainer0 = document.getElementById('cardContainer0');
  var cardContainer = document.getElementById('cardContainer');

  let h1 = document.createElement("h1");
   h1.textContent = "Discover Our Services";
  let p = document.createElement("p");
  p.style.width="800px"
  p.textContent = "ExploreEra provides a one-stop solution for individuals seeking well-planned journeys.  These services include expert advice on destination selection, flight and accommodation bookings, and customized itineraries to individual preferences.";
  cardContainer0.appendChild(h1);
    cardContainer0.appendChild(p);
 
  for (var key in cardsData) {
    var newCard = createCard(cardsData[key]);
    var cardSection = document.createElement('section');
    cardSection.classList.add('card-section');
    cardSection.appendChild(newCard);
    cardContainer.appendChild(cardSection);
    

  }