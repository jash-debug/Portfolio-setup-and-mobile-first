const card2 = {
  imge: ['./images/multipost_stories.svg', 'https://raw.githubusercontent.com/jash-debug/Portfolio-setup-and-mobile-first/ef08c55ed224641d597ca0552bfffcfa041586f3/images/multipost_stories.svg', 'https://raw.githubusercontent.com/jash-debug/Portfolio-setup-and-mobile-first/ef08c55ed224641d597ca0552bfffcfa041586f3/images/multipost_stories.svg', 'https://raw.githubusercontent.com/jash-debug/Portfolio-setup-and-mobile-first/ef08c55ed224641d597ca0552bfffcfa041586f3/images/multipost_stories.svg'],
  imge_full: ['./images/popup1.svg', 'https://raw.githubusercontent.com/jash-debug/Portfolio-setup-and-mobile-first/ef08c55ed224641d597ca0552bfffcfa041586f3/images/multipost_stories.svg', 'https://raw.githubusercontent.com/jash-debug/Portfolio-setup-and-mobile-first/ef08c55ed224641d597ca0552bfffcfa041586f3/images/multipost_stories.svg', 'https://raw.githubusercontent.com/jash-debug/Portfolio-setup-and-mobile-first/ef08c55ed224641d597ca0552bfffcfa041586f3/images/multipost_stories.svg'],
  title: ['Tonic', 'Multi-Post Stories', 'Tonic', 'Tonic'],
  titleF: ['Tonic', 'Multi-Post Stories', 'Facebook 360', 'Uber navigation'],
  path: [['CANOPY', 'BACK END DEV', '2015'], ['CANOPY', 'BACK END DEV', '2015'], ['CANOPY', 'BACK END DEV', '2015'], ['CANOPY', 'BACK END DEV', '2015']],
  pathF: [['CANOPY', 'BACK END DEV', '2015'], ['FACEBOOK', 'Full Stack Dev', '2015'], ['FACEBOOK', 'Full Stack Dev', '2015'], ['Uber', 'Lead Developer', '2018']],
  description: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent', 'Description2', 'Description3', 'Description3'],
  descriptionF: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea', 'Description2', 'Description3', 'Description3'],
  languages: [['html', 'css', 'javaScript'], ['html', 'css', 'javaScript'], ['html', 'css', 'javaScript'], ['html', 'css', 'javaScript']],
  languages_f: [['html', 'css', 'javaScript'], ['html', 'Ruby on rails', 'css', 'javaScript'], ['html', 'Ruby on rails', 'css', 'javaScript'], ['html', 'Ruby on rails', 'css', 'javaScript']],
};

const popupWindow = document.querySelector('.popup');
const main = document.querySelector('#main');
const btn = document.querySelectorAll('.project__button');

// for (z = 0; z < btn.length; z++) {
//     btn[z].addEventListener('click', () => {
//         popupWindow.classList.toggle('show');
//         // main.style.filter = ('blur(50px)');
//     });
// }

btn.forEach((button, i) => {
  button.addEventListener('click', () => {
    popupWindow.classList.toggle('show');
    main.style.filter = ('blur(50px)');

    const article = document.createElement('article');
    article.className = 'projectPopup';
    const images = document.createElement('img');
    images.src = card2.imge[i];
    images.className = 'mobile ';
    const imagesf = document.createElement('img');
    imagesf.src = card2.imge_full[i];
    imagesf.className = 'full image__size';

    const imagesLive = document.createElement('img');
    imagesLive.src = './images/seeLive.svg';

    const imagesLive2 = document.createElement('img');
    imagesLive2.src = './images/githubBlue.svg';

    const projectDiv = document.createElement('div');
    projectDiv.className = 'card__container';

    const innerDiv = document.createElement('div');
    innerDiv.className = 'flex';

    const desktopDiv = document.createElement('div');
    desktopDiv.className = 'paragraph__div';
    const line = document.createElement('div');
    line.className = 'span';
    const desktopDiv2 = document.createElement('div');
    desktopDiv2.className = 'innerDiv';
    const desktopDiv3 = document.createElement('div');
    desktopDiv3.className = 'full flex space';

    const innerDiv2 = document.createElement('div');
    innerDiv2.className = 'flex';

    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'project__button poppins button__flex';
    const buttonDiv2 = document.createElement('div');
    buttonDiv2.className = 'project__button poppins button__flex';

    const languages = document.createElement('ul');
    languages.className = 'project__language';

    const title = document.createElement('h2');
    const textTitle = document.createTextNode(card2.title[i]);
    title.className = 'project__heading poppins mobile';
    title.appendChild(textTitle);

    const titleF = document.createElement('h2');
    const texttitleF = document.createTextNode(card2.titleF[i]);
    titleF.className = 'project__heading poppins full';
    titleF.appendChild(texttitleF);

    const path = document.createElement('ul');
    path.className = 'project__path mobile poppins';
    const pathF = document.createElement('ul');
    pathF.className = 'project__path full poppins';

    const x = card2.path[i];
    const xF = card2.pathF[i];

    const paragraph = document.createElement('p');
    const desc = document.createTextNode(card2.description[0]);
    paragraph.className = 'project__desc mobile poppins';
    paragraph.appendChild(desc);

    const paragraphF = document.createElement('p');
    const descF = document.createTextNode(card2.descriptionF[0]);
    paragraphF.className = 'project__desc full poppins';
    paragraphF.appendChild(descF);

    for (let j = 0; j < x.length; j += 1) {
      const li = document.createElement('li');
      if (x[j] === x[0]) {
        li.className = 'project__path__name poppins';
      } else {
        li.className = 'project__path__type poppins';
      }
      li.innerText = x[j];
      path.appendChild(li);
    }

    for (let j = 0; j < xF.length; j += 1) {
      const li = document.createElement('li');
      if (xF[j] === xF[0]) {
        li.className = 'project__path__name poppins';
      } else {
        li.className = 'project__path__type poppins';
      }
      li.innerText = xF[j];
      pathF.appendChild(li);
    }

    const pLanguage = card2.languages[i];
    for (let j = 0; j < pLanguage.length; j += 1) {
      const li = document.createElement('li');
      li.className = 'poppins';
      li.innerText = pLanguage[j];
      languages.appendChild(li);
    }

    const close = document.createElement('button');
    close.className = 'close__button';
    close.innerText = 'X';
    close.href = '#';

    const button = document.createElement('p');
    button.className = 'flex';
    button.innerText = 'See Project';
    button.href = '#';

    const button2 = document.createElement('p');
    button2.className = 'flex';
    button2.innerText = 'See Project';
    button2.href = '#';

    buttonDiv.appendChild(button);
    buttonDiv.appendChild(imagesLive);
    innerDiv.appendChild(buttonDiv);

    buttonDiv2.appendChild(button2);
    buttonDiv2.appendChild(imagesLive2);
    innerDiv.appendChild(buttonDiv2);

    innerDiv2.appendChild(title);
    innerDiv2.appendChild(titleF);
    innerDiv2.appendChild(close);
    projectDiv.appendChild(innerDiv2);
    projectDiv.appendChild(path);
    projectDiv.appendChild(pathF);
    projectDiv.appendChild(images);
    projectDiv.appendChild(imagesf);
    projectDiv.appendChild(paragraph);
    projectDiv.appendChild(languages);
    projectDiv.appendChild(line);
    projectDiv.appendChild(innerDiv);
    article.appendChild(projectDiv);
    popupWindow.appendChild(article);

    if (window.screen.width > 768) {
      desktopDiv.appendChild(paragraphF);
      desktopDiv3.appendChild(desktopDiv);
      desktopDiv2.appendChild(languages);
      desktopDiv2.appendChild(line);
      desktopDiv2.appendChild(innerDiv);
      desktopDiv3.appendChild(desktopDiv2);
      projectDiv.appendChild(desktopDiv3);
      article.appendChild(projectDiv);
    }
  });
});

document.querySelectorAll('.popup').forEach(
  (n) => n.addEventListener('click', () => {
    popupWindow.innerText = '';
    popupWindow.classList.remove('show');
    main.removeAttribute('style');
  }),
);
