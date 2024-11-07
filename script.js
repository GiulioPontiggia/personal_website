// Make text autotype itself for the presentation section and then make appear all other titles sections

let textLength = 0;
let text = `Hello, I am a Network and security engineer at NTT.
I am really passionate about IT, especially networks, coding and working with Linux.
This website is hosted on AWS and I'm thrilled to share my projects and document my IT journey here. 

Even though I love my job, life isn't all about tech. 
In my free time you'll find me working out, reading, exploring new places and digging into my other big interest - finance.
Thanks for stopping by, I hope you enjoy exploring my website as much as I enjoy building it`

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
        // Change timeout to 50 
        setTimeout('type()', 50);
    } else {
        document.getElementById("hidden_text").classList.remove("hidden_section");
        document.getElementById("hidden_sector").classList.remove("hidden_section");
    }
}

// Make appear pargraph after clicking the title
function appear_paragraph(id) {
    const section = document.getElementById(id);
    if (!section.classList.contains("dropdown-open")) {
        section.style.display = "block";  // Shows the element
        let sectionHeight = section.scrollHeight + "px";  // Calculate height
        section.style.height = "0px";      
        setTimeout(() => {
            section.style.height = sectionHeight;  // Set the height previously calculated
        }, 1);

        section.classList.add("dropdown-open");

        section.addEventListener("transitionend", function transitionEnd() {
            section.style.height = "auto"; 
            section.removeEventListener("transitionend", transitionEnd);
        });
    } else {
        section.style.height = section.scrollHeight + "px";  // height before closure
        setTimeout(() => {
            section.style.height = "0px";  // Close with the transition
        }, 1);
        
        section.addEventListener("transitionend", function transitionEnd() {
            section.style.display = "none";  // Hide after transition
            section.classList.remove("dropdown-open");
            section.removeEventListener("transitionend", transitionEnd);
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    type();
});





