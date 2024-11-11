const slidesData = [
    {
      id: "slide-0",
      name: "John Doe",
      designation: "Chief Marketing Officer",
      company: "Acme Corp",
      image: "./assets/Ellipse 24.png",
      description:"Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."
    },
    {
        id: "slide-1",
        name: "John Doe",
        designation: "Chief Engagement Officer",
        company: "Acquia",
        image: "./assets/Ellipse 24 (3).png",
        description:"Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."
      },
      {
        id: "slide-2",
        name: "John Doe",
        designation: "Chief Technical Developer",
        company: "Pantheon",
        image: "./assets/Ellipse 24 (2).png",
        description:"Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."
      },
      {
        id: "slide-3",
        name: "John Doe",
        designation: "Chief Marketing Officer",
        company: "Specbee",
        image: "./assets/Ellipse 24 (1).png",
        description:"Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."
      },
    ]
      




const open=(slideId)=>{
    const slideData = slidesData.find(slide => slide.id === slideId);

    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("popupImage");
    const popupName = document.getElementById("popupName");
    const popupDesignation = document.getElementById("popupDesignation");
    const popupDetails = document.getElementById("popupDetails");
    const popupCompany=document.getElementById("popupCompany")
  
    
    popupImage.src = slideData.image;
    popupName.textContent = slideData.name;
    popupDesignation.textContent = slideData.designation;
    popupDetails.textContent = slideData.description;
    popupCompany.textContent=slideData.company
  
    
    popup.style.display = "flex";
}

   
document.getElementById("close").addEventListener("click",()=>{
    const popup = document.getElementById("popup");
    popup.style.display = "none";
})

document.querySelectorAll(".speaker-slider__card").forEach(slide => {
    slide.addEventListener("click", () => open(slide.id));
  });




const container=document.querySelector('.main')
  const slider = document.querySelector('.speaker-slider');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
let currentPosition=0;

let currentSlide = 0;
const cards = document.querySelectorAll('.speaker-slider__card');
const totalSlides = cards.length;

function shiftRight() {
  const cards = document.querySelectorAll('.speaker-slider__card');
  slider.prepend(cards[currentPosition]);
  currentPosition = (currentPosition + 1) % cards.length;
}

function shiftLeft() {
  const cards=document.querySelectorAll('.speaker-slider__card');

  slider.prepend(cards[cards.length-1]);
  currentPosition = (currentPosition - 1 + cards.length) % cards.length;
  
}



leftButton.addEventListener("click",shiftLeft)
rightButton.addEventListener('click',shiftRight)