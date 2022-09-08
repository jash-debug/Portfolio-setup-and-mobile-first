const card = {
    imge: ['https://media.gettyimages.com/photos/modern-nairobi-cityscape-capital-city-of-kenya-east-africa-picture-id1191388474?s=612x612', 'https://raw.githubusercontent.com/jash-debug/Portfolio-setup-and-mobile-first/ef08c55ed224641d597ca0552bfffcfa041586f3/images/multipost_stories.svg', 'https://raw.githubusercontent.com/jash-debug/Portfolio-setup-and-mobile-first/ef08c55ed224641d597ca0552bfffcfa041586f3/images/multipost_stories.svg', 'https://raw.githubusercontent.com/jash-debug/Portfolio-setup-and-mobile-first/ef08c55ed224641d597ca0552bfffcfa041586f3/images/multipost_stories.svg'],
    title: ['Tonic', 'Multi-Post Stories', 'Tonic', 'Tonic'],
    title_f: ['Tonic', 'Multi-Post Stories', 'Facebook 360', 'Uber navigation'],
    path: [['css', 'js', 'html'], ['css', 'js'], ['js', 'html'], ['js', 'html']],
    description: ['Description1', 'Description2', 'Description3', 'Description3'],
    languages: [['css', 'js', 'html'], ['css', 'js'], ['js', 'html'], ['js', 'html']],
}
const projects = document.getElementById('project');

for (let i = 0; i < card.title.length; i += 1) {
    //card
    const article = document.createElement('article');
    article.className = 'project';
    //image tag
    const img_ = document.createElement('img');
    img_.src = card.imge[i];
    //div tag
    const divCard = document.createElement('div');
    // heading
    const hgroup = document.createElement('hgroup');


    const title = document.createElement('h2');
    const textTitle = document.createTextNode(card.title[i]);
    title.className = 'project__heading poppins';
    title.appendChild(textTitle);

    const path = document.createElement('ul');
    path.className = 'project__path mobile poppins';

    const languages = document.createElement('ul');
    languages.className = 'project__path mobile poppins';

    const desc = document.createTextNode(card.description[i]);

    const x = card.path[i];
    for (let j = 0; j < x.length; j += 1) {
        const li = document.createElement('li');
        li.className = 'project__path__name poppins';
        li.innerText = x[j];
        path.appendChild(li);
    }

    const p_language = card.path[i];
    for (let j = 0; j < p_language.length; j += 1) {
        const li = document.createElement('li');
        li.className = 'project__path__name poppins';
        li.innerText = p_language[j];
        languages.appendChild(li);
    }

    const button = document.createElement('button');
    button.className = 'project__button poppins';
    button.innerText = 'See Project';
    button.className = 'button';
    button.href = '#';
    divCard.appendChild(img_);
    hgroup.appendChild(title);
    divCard.appendChild(hgroup);
    divCard.appendChild(path);
    divCard.appendChild(desc);
    divCard.appendChild(languages);
    divCard.appendChild(button);
    article.appendChild(divCard);
    projects.appendChild(article);
}