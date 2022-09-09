const card = {
    imge: ['images/Snapshoot_Portfolio.svg', 'images/multipost_stories.svg', 'images/yoga_app.svg', 'images/professional_printing.svg'],
    imge_full: ['images/Snapshoot_Portfolio_full.svg', 'images/professional_printing_full.svg', 'images/Snapshoot_Portfolio.svg', 'images/multipost_stories.svg'],
    title: ['Tonic', 'Multi-Post Stories', 'Tonic', 'Tonic'],
    title_f: ['Tonic', 'Multi-Post Stories', 'Facebook 360', 'Uber navigation'],
    path: [['CANOPY', 'BACK END DEV', '2015'], ['CANOPY', 'BACK END DEV', '2015'], ['CANOPY', 'BACK END DEV', '2015'], ['CANOPY', 'BACK END DEV', '2015']],
    path_f: [['CANOPY', 'BACK END DEV', '2015'], ['FACEBOOK', 'Full Stack Dev', '2015'], ['FACEBOOK', 'Full Stack Dev', '2015'], ['Uber', 'Lead Developer', '2018']],
    description: ['A daily selection of privately personalized reads; no accounts or sign-ups required', 'A daily selection of privately personalized reads; no accounts or sign-ups required', 'A daily selection of privately personalized reads; no accounts or sign-ups required', 'A daily selection of privately personalized reads; no accounts or sign-ups required'],
    description_f: ['A daily selection of privately personalized reads; no accounts or sign-ups required', 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.', 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.', 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.'],
    languages: [['html', 'css', 'javaScript'], ['html', 'css', 'javaScript'], ['html', 'css', 'javaScript'], ['html', 'css', 'javaScript']],
    languages_f: [['html', 'css', 'javaScript'], ['html', 'Ruby on rails', 'css', 'javaScript'], ['html', 'Ruby on rails', 'css', 'javaScript'], ['html', 'Ruby on rails', 'css', 'javaScript']],
}
const projects = document.getElementById('project');

for (let i = 0; i < card.title.length; i += 1) {
    const article = document.createElement('article');
    article.className = 'project';
    const img_ = document.createElement('img');
    img_.src = card.imge[i];
    img_.className = 'mobile';
    const img_f = document.createElement('img');
    img_f.src = card.imge_full[i];
    console.log(i);
    if (i % 2 === 1) {
        img_f.className = 'full reverse';
    }
    else {
        img_f.className = 'full';
    }

    const divCard = document.createElement('div');

    const innerDiv = document.createElement('div');

    const languages = document.createElement('ul');
    languages.className = 'project__language mobile';

    const languages_f = document.createElement('ul');
    languages_f.className = 'project__language full';

    const title = document.createElement('h2');
    const textTitle = document.createTextNode(card.title[i]);
    title.className = 'project__heading poppins mobile';
    title.appendChild(textTitle);

    const title_f = document.createElement('h2');
    const textTitle_f = document.createTextNode(card.title_f[i]);
    title_f.className = 'project__heading poppins full';
    title_f.appendChild(textTitle_f);

    const path = document.createElement('ul');
    path.className = 'project__path mobile poppins';
    const path_f = document.createElement('ul');
    path_f.className = 'project__path full poppins';

    const x = card.path[i];
    const x_f = card.path_f[i];

    const paragraph = document.createElement('p');
    const desc = document.createTextNode(card.description[i]);
    paragraph.className = 'project__desc mobile poppins'
    paragraph.appendChild(desc);

    const paragraph_f = document.createElement('p');
    const desc_f = document.createTextNode(card.description_f[i]);
    paragraph_f.className = 'project__desc full poppins'
    paragraph_f.appendChild(desc_f);

    for (let j = 0; j < x.length; j += 1) {
        const li = document.createElement('li');
        if (x[j] === x[0]) {
            li.className = 'project__path__name poppins';
        }
        else {
            li.className = 'project__path__type poppins';
        }
        li.innerText = x[j];
        path.appendChild(li);
    }

    for (let j = 0; j < x_f.length; j += 1) {
        const li = document.createElement('li');
        if (x_f[j] === x_f[0]) {
            li.className = 'project__path__name poppins';
        }
        else {
            li.className = 'project__path__type poppins';
        }
        li.innerText = x_f[j];
        path_f.appendChild(li);
    }

    const p_language = card.languages[i];
    for (let j = 0; j < p_language.length; j += 1) {
        const li = document.createElement('li');
        li.className = 'poppins';
        li.innerText = p_language[j];
        languages.appendChild(li);
    }

    const p_language_f = card.languages_f[i];
    for (let j = 0; j < p_language_f.length; j += 1) {
        const li = document.createElement('li');
        li.className = 'poppins';
        li.innerText = p_language_f[j];
        languages_f.appendChild(li);
    }


    const button = document.createElement('button');
    button.className = 'project__button poppins';
    button.innerText = 'See Project';
    button.href = '#';

    innerDiv.appendChild(button);
    article.appendChild(img_);
    article.appendChild(img_f);
    divCard.appendChild(title);
    divCard.appendChild(title_f);
    divCard.appendChild(path);
    divCard.appendChild(path_f);
    divCard.appendChild(paragraph);
    divCard.appendChild(paragraph_f);
    divCard.appendChild(languages);
    divCard.appendChild(languages_f);
    divCard.appendChild(innerDiv);
    article.appendChild(divCard);
    projects.appendChild(article);
}