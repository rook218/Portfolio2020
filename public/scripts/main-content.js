const contentJSON = {
    pageViews: [{
            id: "home",
            title: "&lt; home &gt;",
            type: 'text',
            paragraphs: [
                "Thank you for checking out my portfolio site. This entire site is built on one page, with JS listeners and CSS transition effects powering the whole show.",
                "Seleting a new page doesn't navigate anywhere, instead it triggers an animation and a script loads JSON into the DOM. It allowed me to have some cool aesthetics for such a simple site.",
                "Please see the 'about' page to learn more about who I am, the 'projects' page to see more of what I'm capable of, and of course the 'contact' page to get in touch!",
                "Non-profits, please see the 'nonprofits' page to see what I can help you with."
            ]
        },
        {
            id: "about",
            title: "&lt; about &gt;",
            type: 'text',
            paragraphs: [
                "The short story: I graduated from the University of Rochester in 2012 with a Bachelors in political science and history, went into the Army as a CBRN (Chem, Bio, Rad, Nuke) Officer until 2017, traveled the world for a year, and decided I wanted to make my way into tech. I've been learning new technologies over my two years in the industry and found that I love learning how to build real, helpful applications.",
                "The longer story: My first job in IT was (as it was for many) as a helpdesk support technician. The web development team at the company became increasingly busy, while the helpdesk became increasingly idle, so I spent a good part of my time learning web development skills so I could help out more.",
                "As I grew, I wanted more and more responsibility but the company simply wasn't structured for that kind of growth. Theyw were a mechanical engineering and design company with a small IT section that didn't have much room. I found a new job making custom Workflows and Web Forms in a content management system called Laserfiche and the challenge has been awesome!",
                "Now I spend my days solving problems to help people work smarter and more effectively, and I get to hone my skills daily in HTML, CSS, JavaScript, C# .NET, and SQL - and that's not to mention all the networking and security pieces I get to touch that I never thought I would.",
                "I love learning new technologies and systems! Please see my 'projects' page to see more of what I'm capable of, and if you'd like to read more please download my resume < <a target=\"_blank\" href=\"/Rook_WebDeveloper.pdf\"><span class=\"blue-font hidden\">here</span></a> >."
            ]
        },
        {
            id: "projects",
            title: "&lt; projects &gt;",
            type: 'html',
            html: `
            <div id="project-wrapper" class="content-wrapper">
               <div class="project">
                   Financial calculators built with Angular7, Bootstrap, and chart.js &lt;<a target="_blank" href="/projects/finance"><span class="blue-font hidden">a</span></a>/&gt;
               </div>
               <div class="project">
                   Clock made with vanilla JS and CSS elements only &lt;<a target="_blank" href="/clock"><span class="blue-font hidden">a</span></a>/&gt; 
               </div>
               <div class="project">
                   A sample page for a local non-profit &lt;<a target="_blank" href="/ear"><span class="blue-font hidden">a</span></a>/&gt; 
               </div>
               <div class="project">
                   Drumkit made with vanilla JS, HTML and CSS &lt;<a target="_blank" href="/drum"><span class="blue-font hidden">a</span></a>/&gt; 
               </div>
            </div>`
        },
        {
            id: "nonprofits",
            title: "&lt; nonprofits &gt;",
            type: 'text',
            paragraphs: [
                "If you have a non-profit and want to get a custom website developed for free, please contact me. I love helping the community. Here's a &lt; <a target\"_blank\" href=\"/ear\"><span class=\"blue-font hidden\">sample</span></a> &gt; of what I can do (note that it's just the homepage - none of the links will navigate away).",
                "Though your organization deserves the best websites, I unfortunately don't have the time to build Here's what I can do:",
                `<span>1. A fully customized, one to three page static website. (static means no log-ins, database connections, etc. Just a few informational pages for people to read)<br/>
                2. A one-hour in-person consultation up front to determine your needs and style preferences. <br/>
                3. Recommendations and help in hosting your website.<br/>
                4. Keep a backup of your site so we can redeploy it if anything bad happens.<br/>
                5. Give you all the files and teach you how to make small edits to content, style, etc.
                `,
                "And unfortunately, here's what I can't do:",
                `1. Host your website or provide immediate support. (I'll help you get it back up because I like you and appreciate your work, but I have a full-time job and family that take priority) <br/>
                2. Update your website's content routinely.`,
                "Please visit the 'contact' page to drop me a line if I can help you spread the message about your organization!"
            ]
        },
        {
            id: "contact",
            title: "&lt; contact &gt;",
            type: 'html',
            html: `<form id="contact-form" onsubmit="return false" class="contact-form">
            <div class="form-item single-line hidden">
                <label for="name">Name:</label>
                <input type="text" name="name" id="name">
            </div>

            <div class="form-item single-line hidden">
                <label for="email">Email:</label>
                <input type="email" name="email" id="email">
            </div>

            <div class="form-item dropdown hidden">
                <label for="subject">Subject:</label>
                <select name="subject" id="purpose">
                  <option value="job">Employer / job discussion</option>
                  <option value="nonprofit">Non-profit</option>
                  <option value="dev">Fellow Developer</option>
                  <option value="other">Other</option>
                </select>
            </div>

            <div class="form-item text-area hidden">
                <label for="body">Body:</label>
                <textarea name="body" id="body" cols="37" rows="5"></textarea>
            </div>
            <div class="form-item button hidden">
                <button type="submit">Submit</button>
            </div>
        </form>`
        }
    ]
};
const mainContent = document.getElementById("main-content");
let form;

function onFormSubmit() {

    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    const url = '/contactform';
    const submitButton = document.querySelector('.button button');
    // on success behavior
    xhr.addEventListener("load", function(event) {
        submitButton.classList.add('btn-success');
        submitButton.innerText = "Success! Thank you!";
    });

    // on error behavior
    xhr.addEventListener("error", function(event) {
        submitButton.classList.add('btn-error');
        submitButton.innerText = "Error in form submission!"
    });

    xhr.open('POST', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(this.responseText);
        }
    }
    xhr.send(formData);
}

function toggleMainContent() {
    mainContent.classList.toggle("main-hidden");
    mainContent.classList.toggle("main-shown");
    setTimeout(toggleContactForm, 10);
    toggleLinkColors();
}

function toggleContactForm() {
    const formItems = document.querySelectorAll('.form-item');
    for (var i = 0; i < formItems.length; i++) {
        let currentItem = formItems[i];
        currentItem.classList.toggle('hidden');
    }
    form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function() {
            onFormSubmit();
        });
    }
}

function toggleLinkColors() {
    let links = mainContent.querySelectorAll(".blue-font");
    if (links) {
        setTimeout(function() {
            links.forEach(link => link.classList.toggle("hidden"))
        }, 50);
    }
}

function changePageContent(pageContentId) {
    contentJSON.pageViews.forEach(function(view) {
        if (view.id == pageContentId) {
            toggleSlideout();
            let constructedHTML = '<h1 class="main-header">' + view.title + '</h1>';
            if (view.type == 'text') {
                view.paragraphs.forEach(paragraph => {
                    constructedHTML += '<p class="main-paragraph">' + paragraph + '</p>';
                });
            } else {
                constructedHTML += view.html;
            }
            toggleMainContent();
            setTimeout(function() {
                mainContent.innerHTML = constructedHTML;
                toggleMainContent();
            }, 620);
        }
    })
}

// makes the sidebar links handle the rest of the functions
document.querySelectorAll('#slideout-content li span.blue-font').forEach(link =>
    link.addEventListener('click', function(e) {
        changePageContent(e.target.innerText);
    })
);

toggleMainContent();

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 50);
});