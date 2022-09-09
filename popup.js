const card2 = {
  imge: ['https://media.gettyimages.com/photos/modern-nairobi-cityscape-capital-city-of-kenya-east-africa-picture-id1191388474?s=612x612', 'https://raw.githubusercontent.com/jash-debug/Portfolio-setup-and-mobile-first/ef08c55ed224641d597ca0552bfffcfa041586f3/images/multipost_stories.svg', 'https://raw.githubusercontent.com/jash-debug/Portfolio-setup-and-mobile-first/ef08c55ed224641d597ca0552bfffcfa041586f3/images/multipost_stories.svg', 'https://raw.githubusercontent.com/jash-debug/Portfolio-setup-and-mobile-first/ef08c55ed224641d597ca0552bfffcfa041586f3/images/multipost_stories.svg'],
  imge_full: ['https://raw.githubusercontent.com/jash-debug/Portfolio-setup-and-mobile-first/ef08c55ed224641d597ca0552bfffcfa041586f3/images/multipost_stories.svg', 'https://raw.githubusercontent.com/jash-debug/Portfolio-setup-and-mobile-first/ef08c55ed224641d597ca0552bfffcfa041586f3/images/multipost_stories.svg', 'https://raw.githubusercontent.com/jash-debug/Portfolio-setup-and-mobile-first/ef08c55ed224641d597ca0552bfffcfa041586f3/images/multipost_stories.svg', 'https://raw.githubusercontent.com/jash-debug/Portfolio-setup-and-mobile-first/ef08c55ed224641d597ca0552bfffcfa041586f3/images/multipost_stories.svg'],
  title: ['Tonic', 'Multi-Post Stories', 'Tonic', 'Tonic'],
  titleF: ['Tonic', 'Multi-Post Stories', 'Facebook 360', 'Uber navigation'],
  path: [['CANOPY', 'BACK END DEV', '2015'], ['CANOPY', 'BACK END DEV', '2015'], ['CANOPY', 'BACK END DEV', '2015'], ['CANOPY', 'BACK END DEV', '2015']],
  pathF: [['CANOPY', 'BACK END DEV', '2015'], ['FACEBOOK', 'Full Stack Dev', '2015'], ['FACEBOOK', 'Full Stack Dev', '2015'], ['Uber', 'Lead Developer', '2018']],
  description: ['Description1', 'Description2', 'Description3', 'Description3'],
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
    images.className = 'mobile';
    const imagesf = document.createElement('img');
    imagesf.src = card2.imge_full[i];
    imagesf.className = 'full';

    const projectDiv = document.createElement('div');

    const innerDiv = document.createElement('div');
    innerDiv.className = 'flex';

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
    const desc = document.createTextNode(card2.description[i]);
    paragraph.className = 'project__desc poppins';
    paragraph.appendChild(desc);

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

    const button = document.createElement('button');
    button.className = 'project__button poppins';
    button.innerText = 'See Project';
    button.href = '#';

    const button2 = document.createElement('button');
    button2.className = 'project__button poppins';
    button2.innerText = 'See Project';
    button2.href = '#';

    innerDiv.appendChild(button);
    innerDiv.appendChild(button2);
    projectDiv.appendChild(close);
    projectDiv.appendChild(title);
    projectDiv.appendChild(titleF);
    projectDiv.appendChild(path);
    projectDiv.appendChild(pathF);
    projectDiv.appendChild(images);
    projectDiv.appendChild(imagesf);
    projectDiv.appendChild(paragraph);
    projectDiv.appendChild(languages);
    projectDiv.appendChild(innerDiv);
    article.appendChild(projectDiv);
    popupWindow.appendChild(article);
  });
});

document.querySelectorAll('.popup').forEach(
  (n) => n.addEventListener('click', () => {
    popupWindow.innerText='';
    popupWindow.classList.remove('show');
    main.removeAttribute('style');
  }),
);
