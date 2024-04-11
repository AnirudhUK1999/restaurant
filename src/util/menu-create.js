import nav from "./navigation";
// Object: food, int: num
// num to create specific class page and to access object index
const menuCreate = (food,num) => {

    let menuContainer = document.createElement('div');
    menuContainer.setAttribute('class','menu-container');

    let pages = document.createElement('div');
    pages.setAttribute('class',`page page${num}`);
    
    let menuContent = document.createElement('div');
    menuContent.setAttribute('class','menu-content');
    
    // Food topic
    let menuLeft = document.createElement('div');
    menuLeft.setAttribute('class','menu-left');
    let topic = Object.keys(food)[num-1];
    menuLeft.textContent = topic;    //left of menu
    
    
    menuContent.appendChild(menuLeft);
    

    // Food content
    let menuRight = document.createElement('div');
    menuRight.setAttribute('class','menu-right');
    
    
    // right menu logic
    let unorderedList = document.createElement('ul');
        
    for(let item=0;item<food[topic].length;item++){
        let listItem = document.createElement('li');
        let foodArr = food[topic][item].split(":");
        let descText = document.createElement('div');
        descText.setAttribute('class','desc-text');
        listItem.textContent = foodArr[0];
        descText.textContent = foodArr[1];
        unorderedList.appendChild(listItem);
        listItem.appendChild(descText);
    }


    menuRight.appendChild(unorderedList);
    menuContent.appendChild(menuRight);
    
    pages.appendChild(menuContent);
    menuContainer.appendChild(pages);

    //menu navigation
    pages.appendChild(nav());
    
    menuContainer.appendChild(pages);
    return menuContainer;

}

export default menuCreate;