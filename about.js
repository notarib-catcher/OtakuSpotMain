let lore=document.getElementsByClassName('theLore')[0].getElementsByClassName('carousel')[0];

function createLore(Title, Description, Image, Link){
  console.log('creating lore');
  let loreItem=document.createElement('div');
  loreItem.classList.add('loreItem');
  let loreTitle=document.createElement('h3');
  loreTitle.innerHTML=Title;
  loreItem.appendChild(loreTitle);
  let loreImage=document.createElement('img');
  loreImage.src=Image;
  loreItem.appendChild(loreImage);
  let loreDescription=document.createElement('p');
  loreDescription.innerHTML=Description;
  loreItem.appendChild(loreDescription);
  let loreLink=document.createElement('a');
  loreLink.href=Link;
  loreLink.innerHTML='Read More';
  loreItem.appendChild(loreLink);
  lore.appendChild(loreItem);
  lore.appendChild(loreItem);
}

createLore('The Beginning', 'The Beginning of the OtakuSpot', 'https://i.imgur.com/3Z0Q8ZB.png', 'https://www.otakuspot.cf/lore/the-beginning');
createLore('The First War', 'The First War of the OtakuSpot', 'https://i.imgur.com/3Z0Q8ZB.png', 'https://www.otakuspot.cf/lore/the-first-war');
createLore('The Second War', 'The Second War of the OtakuSpot', 'https://i.imgur.com/3Z0Q8ZB.png', 'https://www.otakuspot.cf/lore/the-second-war');
createLore('The Beginning', 'The Beginning of the OtakuSpot', 'https://i.imgur.com/3Z0Q8ZB.png', 'https://www.otakuspot.cf/lore/the-beginning');
createLore('The First War', 'The First War of the OtakuSpot', 'https://i.imgur.com/3Z0Q8ZB.png', 'https://www.otakuspot.cf/lore/the-first-war');
createLore('The Second War', 'The Second War of the OtakuSpot', 'https://i.imgur.com/3Z0Q8ZB.png', 'https://www.otakuspot.cf/lore/the-second-war');