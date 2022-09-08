const card = {
  imge: ['https://media.gettyimages.com/photos/modern-nairobi-cityscape-capital-city-of-kenya-east-africa-picture-id1191388474?s=612x612', 'https://raw.githubusercontent.com/jash-debug/Portfolio-setup-and-mobile-first/ef08c55ed224641d597ca0552bfffcfa041586f3/images/multipost_stories.svg', 'https://raw.githubusercontent.com/jash-debug/Portfolio-setup-and-mobile-first/ef08c55ed224641d597ca0552bfffcfa041586f3/images/multipost_stories.svg', 'https://raw.githubusercontent.com/jash-debug/Portfolio-setup-and-mobile-first/ef08c55ed224641d597ca0552bfffcfa041586f3/images/multipost_stories.svg'],
  imge_full: ['https://raw.githubusercontent.com/jash-debug/Portfolio-setup-and-mobile-first/ef08c55ed224641d597ca0552bfffcfa041586f3/images/multipost_stories.svg', 'https://raw.githubusercontent.com/jash-debug/Portfolio-setup-and-mobile-first/ef08c55ed224641d597ca0552bfffcfa041586f3/images/multipost_stories.svg', 'https://raw.githubusercontent.com/jash-debug/Portfolio-setup-and-mobile-first/ef08c55ed224641d597ca0552bfffcfa041586f3/images/multipost_stories.svg', 'https://raw.githubusercontent.com/jash-debug/Portfolio-setup-and-mobile-first/ef08c55ed224641d597ca0552bfffcfa041586f3/images/multipost_stories.svg'],
  title: ['Tonic', 'Multi-Post Stories', 'Tonic', 'Tonic'],
  title_f: ['Tonic', 'Multi-Post Stories', 'Facebook 360', 'Uber navigation'],
  path: [['CANOPY', 'BACK END DEV', '2015'], ['CANOPY', 'BACK END DEV', '2015'], ['CANOPY', 'BACK END DEV', '2015'], ['CANOPY', 'BACK END DEV', '2015']],
  path_f : [['CANOPY', 'BACK END DEV', '2015'], ['FACEBOOK', 'Full Stack Dev', '2015'], ['FACEBOOK', 'Full Stack Dev', '2015'], ['Uber', 'Lead Developer', '2018']],
  description: ['Description1', 'Description2', 'Description3', 'Description3'],
  languages: [['html','css', 'javaScript'], ['html','css', 'javaScript'], ['html','css', 'javaScript'], ['html','css', 'javaScript']],
  languages_f: [['html','css', 'javaScript'], ['html','Ruby on rails','css', 'javaScript'], ['html','Ruby on rails','css', 'javaScript'], ['html','Ruby on rails','css', 'javaScript']],
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
  languages.className = 'project__language';

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
}