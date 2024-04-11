const homeContent = () => {
    let content = document.querySelector("#content");

    let contentContainer = document.createElement('div');
    contentContainer.setAttribute('id','content-container');

    const header = `🌟 Welcome to SavorBite Bistro! 🌟`

    const message = `Step into a world where every bite is a celebration and every moment is savored. At SavorBite, we invite you to indulge in an exquisite culinary experience that tantalizes your taste buds and warms your soul.
    
    At SavorBite, we believe that dining is more than just a meal—it's an opportunity to create lasting memories and forge meaningful connections. So sit back, relax, and let us take you on a culinary journey that's as unforgettable as it is delicious.
    
    Thank you for choosing SavorBite Bistro.
    
    Bon appétit!`;
    const brk = document.createElement('br');
    const headerDiv = document.createElement('h3')
    headerDiv.setAttribute('class','header-div');
    headerDiv.append(header);
    contentContainer.appendChild(headerDiv);
    contentContainer.appendChild(brk);
    contentContainer.append(message);
    content.appendChild(contentContainer);
    return content;
};

export default homeContent;