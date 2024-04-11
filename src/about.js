const aboutContent = () => {
    let content = document.querySelector("#content");

    let contentContainer = document.createElement('div');
    contentContainer.setAttribute('id','content-container');

    const about = `At SavorBite Bistro, we believe that dining is not just about food—it's about creating unforgettable experiences that nourish the body and soul. Our restaurant is more than just a place to eat; it's a gathering spot where friends and families come together to celebrate life's moments.
    
    Our culinary journey began 13 billion years ago, inspired by travelling all over the world. From our carefully curated menu to our warm and inviting ambiance, every aspect of SavorBite Bistro is designed to delight your senses.
    
    What sets us apart is our commitment to serve authentic food from all over the galaxy at one place, just like the big bang. We source the freshest locally-sourced ingredients, ensuring that every dish bursts with flavor and authenticity.
    
    But it's not just about the food; it's also about the people. Our team of talented chefs, servers, and staff are dedicated to providing you with an exceptional dining experience.
    
    Thank you for choosing SavorBite Bistro. We look forward to welcoming you and serving you soon.
    
    Bon appétit!
    
    Sincerely,
    
    SavorBite Bistro`;  

    contentContainer.textContent = about;

    content.appendChild(contentContainer);
    return content;
};

export default aboutContent;