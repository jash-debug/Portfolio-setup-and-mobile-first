const card = {
  imge: ['images/Snapshoot_Portfolio.svg', 'images/multipost_stories.svg', 'images/yoga_app.svg', 'images/professional_printing.svg'],
  imge_full: ['images/Snapshoot_Portfolio_full.svg', 'images/professional_printing_full.svg', 'images/Snapshoot_Portfolio.svg', 'images/multipost_stories.svg'],
  title: ['Tonic', 'Multi-Post Stories', 'Tonic', 'Tonic'],
  titleF: ['Tonic', 'Multi-Post Stories', 'Facebook 360', 'Uber navigation'],
  path: [['CANOPY', 'BACK END DEV', '2015'], ['CANOPY', 'BACK END DEV', '2015'], ['CANOPY', 'BACK END DEV', '2015'], ['CANOPY', 'BACK END DEV', '2015']],
  pathF: [['CANOPY', 'BACK END DEV', '2015'], ['FACEBOOK', 'Full Stack Dev', '2015'], ['FACEBOOK', 'Full Stack Dev', '2015'], ['Uber', 'Lead Developer', '2018']],
  description: ['A daily selection of privately personalized reads; no accounts or sign-ups required', 'A daily selection of privately personalized reads; no accounts or sign-ups required', 'A daily selection of privately personalized reads; no accounts or sign-ups required', 'A daily selection of privately personalized reads; no accounts or sign-ups required'],
  description_f: ['A daily selection of privately personalized reads; no accounts or sign-ups required', 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.', 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.', 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.'],
  languages: [['html', 'css', 'javaScript'], ['html', 'css', 'javaScript'], ['html', 'css', 'javaScript'], ['html', 'css', 'javaScript']],
  languagesF: [['html', 'css', 'javaScript'], ['html', 'Ruby on rails', 'css', 'javaScript'], ['html', 'Ruby on rails', 'css', 'javaScript'], ['html', 'Ruby on rails', 'css', 'javaScript']],
};
const projects = document.getElementById('project');

for (let i = 0; i < card.title.length; i += 1) {
  const article = document.createElement('article');
  article.className = 'project';
  const images = document.createElement('img');
  images.src = card.imge[i];
  images.className = 'mobile';
  const imagesf = document.createElement('img');
  imagesf.src = card.imge_full[i];
  if (i % 2 === 1) {
    imagesf.className = 'full reverse';
  } else {
    imagesf.className = 'full';
  }

  const projectDiv = document.createElement('div');

  const innerDiv = document.createElement('div');

  const languages = document.createElement('ul');
  languages.className = 'project__language mobile';

  const languagesF = document.createElement('ul');
  languagesF.className = 'project__language full';

  const title = document.createElement('h2');
  const textTitle = document.createTextNode(card.title[i]);
  title.className = 'project__heading poppins mobile';
  title.appendChild(textTitle);

  const titleF = document.createElement('h2');
  const texttitleF = document.createTextNode(card.titleF[i]);
  titleF.className = 'project__heading poppins full';
  titleF.appendChild(texttitleF);

  const path = document.createElement('ul');
  path.className = 'project__path mobile poppins';
  const pathF = document.createElement('ul');
  pathF.className = 'project__path full poppins';

  const x = card.path[i];
  const xF = card.pathF[i];

  const paragraph = document.createElement('p');
  const desc = document.createTextNode(card.description[i]);
  paragraph.className = 'project__desc mobile poppins';
  paragraph.appendChild(desc);

  const paragraphF = document.createElement('p');
  const descF = document.createTextNode(card.description_f[i]);
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

  const pLanguage = card.languages[i];
  for (let j = 0; j < pLanguage.length; j += 1) {
    const li = document.createElement('li');
    li.className = 'poppins';
    li.innerText = pLanguage[j];
    languages.appendChild(li);
  }

  const pLanguageF = card.languagesF[i];
  for (let j = 0; j < pLanguageF.length; j += 1) {
    const li = document.createElement('li');
    li.className = 'poppins';
    li.innerText = pLanguageF[j];
    languagesF.appendChild(li);
  }

  const button = document.createElement('button');
  button.className = 'project__button poppins';
  button.innerText = 'See Project';
  button.href = '#';

  innerDiv.appendChild(button);
  article.appendChild(images);
  article.appendChild(imagesf);
  projectDiv.appendChild(title);
  projectDiv.appendChild(titleF);
  projectDiv.appendChild(path);
  projectDiv.appendChild(pathF);
  projectDiv.appendChild(paragraph);
  projectDiv.appendChild(paragraphF);
  projectDiv.appendChild(languages);
  projectDiv.appendChild(languagesF);
  projectDiv.appendChild(innerDiv);
  article.appendChild(projectDiv);
  projects.appendChild(article);
}