const speakers = document.querySelector('.speakers');
const closeLink = document.querySelector('.close');
const ham = document.querySelector('.hmbgr');
const modal = document.querySelector('.mobile-nav');
const links = document.querySelectorAll('.mobile-item');
const body = document.getElementById('body');

const members = [
  {
    mainDiv: ['speaker', 'flex-row', 'y-gap'],
    imgDiv: 'speaker-image',
    imgAttributes: ['./images/betina.jpg', 'betina\'s picture', 'speaker-item'],
    bioDiv: 'speaker-bio',
    head: 'Betina Nankya',
    pAcademics: 'academics',
    pContent: 'Study masters in information technology at MakerereUniversity',
    pRClass: 'role',
    pRole: 'Incident manager at MTN Uganda LTD. Interfaces with different',
  },
  {
    mainDiv: ['speaker', 'flex-row', 'y-gap'],
    imgDiv: 'speaker-image',
    imgAttributes: ['./images/ludiya.jpg', 'ludiya\'s picture', 'speaker-item'],
    bioDiv: 'speaker-bio',
    head: 'Ludiya Becca',
    pAcademics: 'academics',
    pContent: 'Study masters in information technology at MakerereUniversity',
    pRClass: 'role',
    pRole: 'Incident manager at MTN Uganda LTD. Interfaces with different',
  },
  {
    mainDiv: ['speaker', 'flex-row', 'y-gap'],
    imgDiv: 'speaker-image',
    imgAttributes: ['./images/ming.jpg', 'ludiya\'s picture', 'speaker-item'],
    bioDiv: 'speaker-bio',
    head: 'Ming Wan',
    pAcademics: 'academics',
    pContent: 'Study masters in information technology at MakerereUniversity',
    pRClass: 'role',
    pRole: 'Incident manager at MTN Uganda LTD. Interfaces with different',
  },
  {
    mainDiv: ['speaker', 'flex-row', 'y-gap'],
    imgDiv: 'speaker-image',
    imgAttributes: ['./images/ojo.jpg', 'ludiya\'s picture', 'speaker-item'],
    bioDiv: 'speaker-bio',
    head: 'Ojo Nyal',
    pAcademics: 'academics',
    pContent: 'Study masters in information technology at MakerereUniversity',
    pRClass: 'role',
    pRole: 'Incident manager at MTN Uganda LTD. Interfaces with different',
  },
  {
    mainDiv: ['speaker', 'flex-row', 'y-gap'],
    imgDiv: 'speaker-image',
    imgAttributes: ['./images/olara.jpg', 'ludiya\'s picture', 'speaker-item'],
    bioDiv: 'speaker-bio',
    head: 'Olara Peter',
    pAcademics: 'academics',
    pContent: 'Study masters in information technology at MakerereUniversity',
    pRClass: 'role',
    pRole: 'Incident manager at MTN Uganda LTD. Interfaces with different',
  },
  {
    mainDiv: ['speaker', 'flex-row', 'y-gap'],
    imgDiv: 'speaker-image',
    imgAttributes: ['./images/ojok.jpg', 'ludiya\'s picture', 'speaker-item'],
    bioDiv: 'speaker-bio',
    head: 'Ojok Patrick',
    pAcademics: 'academics',
    pContent: 'Study masters in information technology at MakerereUniversity',
    pRClass: 'role',
    pRole: 'Incident manager at MTN Uganda LTD. Interfaces with different',
  },
];

function createSpeaker(speaker) {
  // create speaker div
  const speakerDiv = document.createElement('div');
  speakerDiv.classList.add(...speaker.mainDiv);

  // create speaker div
  const speakerImage = document.createElement('div');
  speakerImage.classList.add(speaker.imgDiv);

  // create speaker image
  const img = document.createElement('img');
  const [src, alt, cl] = speaker.imgAttributes;
  img.classList.add(cl);
  img.src = src;
  img.alt = alt;
  speakerImage.appendChild(img);

  // create speaker boigraphy div
  const speakerBio = document.createElement('div');
  speakerBio.classList.add(speaker.bioDiv);

  // create speaker name tag
  const h2 = document.createElement('h2');
  h2.textContent = speaker.head;
  speakerBio.appendChild(h2);

  // create red paragraph
  const p1 = document.createElement('p');
  p1.classList.add(speaker.pAcademics);
  p1.textContent = speaker.pContent;
  speakerBio.appendChild(p1);

  // create black paragraph
  const p2 = document.createElement('p');
  p2.classList.add(speaker.pRClass);
  p2.textContent = speaker.pRole;
  speakerBio.appendChild(p2);

  // append the main divs to the page
  speakerDiv.appendChild(speakerImage);
  speakerDiv.appendChild(speakerBio);
  speakers.appendChild(speakerDiv);
}

// create the speakers
members.forEach((member) => {
  createSpeaker(member);
});

// display modal on clicking hamburger
ham.addEventListener('click', () => {
  modal.classList.remove('hide');
  body.classList.add('no-scroll');
});

// hide modal on clicking close
closeLink.addEventListener('click', () => {
  modal.classList.add('hide');
  body.classList.remove('no-scroll');
});

//  Add click lister to links and hide modal
Array.from(links).forEach((link) => {
  link.addEventListener('click', () => {
    modal.classList.add('hide');
    body.classList.remove('no-scroll');
  });
});