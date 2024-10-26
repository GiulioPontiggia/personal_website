let textLength = 0;
let text = `Hello, I am a Network and security engineer at NTT Data.
I am really passionate about IT, I enjoy writing code (I love Python) and I like working on Linux systems.
I've always looked at the cloud with some kind of curiosity and just recently I decided to sign up on AWS
to try out some of the services they provide. 
This website is hosted with by an S3 bucket in AWS (pretty basic stuff). 

I'm really curious and I always want to understand how things work, I found reading as a way of satisfying
that need. In my free time I love sports and travelling around the world.`

function type() {
    let textChar = text.charAt(textLength++);
    let paragraph = document.getElementById("auto_type_text");

    if (textChar === "\n") {
        paragraph.appendChild(document.createElement("br"));
    } else {
        let charElement = document.createTextNode(textChar);
        paragraph.appendChild(charElement);
    }

    if(textLength < text.length+1) {
        setTimeout('type()', 55);
    } else {
        text = '';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    type();
});



