const nav = () => {
    let pageFooter = document.createElement('div');
        pageFooter.setAttribute('class','page-footer');

        let pageLeft = document.createElement('div');
        pageLeft.setAttribute('class','page-left');
        
        let buttonLeft = document.createElement('button');
        buttonLeft.setAttribute('class','appetizer');
        buttonLeft.textContent = 'Appetizer';
        
        pageFooter.appendChild(buttonLeft);

        let buttonMid = document.createElement('button');
        buttonMid.setAttribute('class','main');
        buttonMid.textContent = 'Main Course';
        pageFooter.appendChild(buttonMid);
        

        let buttonRight = document.createElement('button');
        buttonRight.setAttribute('class','dessert')
        buttonRight.textContent = 'Dessert';
        pageFooter.appendChild(buttonRight);
    
        return pageFooter;
}
export default nav;