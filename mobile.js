let currentPage = 1;

function goToNextPage() {
    if (currentPage < 7) {
        currentPage++;
        updatePageContent();
    } else {
        // You've reached the last page, you can handle this as per your requirement
        alert("You've reached the last page");
    }
}

function goToPreviousPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePageContent();
    } else {
        // You're on the first page, you can handle this as per your requirement
        alert("You're on the first page");
    }
}

function updatePageContent() {
    const content = document.querySelector('.content');
    const pageTitle = document.querySelector('h1');
    const pageDescription = document.querySelector('p');

    // Update content based on the current page
    switch (currentPage) {
        case 1:
            pageTitle.textContent = "He'lo,";
            pageDescription.textContent = "This is my official portfolio website to showcase my works related to web development and UI design";
            hideButtons();
            break;
        case 2:
            pageTitle.textContent = "About Me";
            pageDescription.innerHTML = `
                <div class="details-box left-box">
                    <h2>Personal Details</h2>
                    <p>Name: S Revanth Reddy</p>
                    <!-- ... Other personal details ... -->
                </div>
            `;
            showButtons();
            break;
        case 3:
            pageTitle.textContent = "Education";
            pageDescription.innerHTML = `
                <div class="details-box left-box">
                    <h2>Education</h2>
                    <p>SSC: 2011 - 90%</p>
                    <!-- ... Other education details ... -->
                </div>
            `;
            showButtons();
            break;
        case 4:
            pageTitle.textContent = "Work Experience";
            pageDescription.innerHTML = `
                <div class="details-box left-box">
                    <h2>Work Experience</h2>
                    <p>2017-2018: Architecture Internship - DLF pvt ltd. - Chennai</p>
                    <!-- ... Other work experience details ... -->
                </div>
            `;
            showButtons();
            break;
        case 5:
            pageTitle.textContent = "Skills and Softwares";
            pageDescription.innerHTML = `
                <div class="details-box left-box">
                    <h2>Softwares</h2>
                    <p><img src="photoshop-logo.png" alt="Photoshop Logo"> Photoshop</p>
                    <!-- ... Other software details ... -->
                </div>
            `;
            showButtons();
            break;
        case 6:
            pageTitle.textContent = "Work Gallery";
            pageDescription.innerHTML = `
                <div class="details-box1 right-box">
                    <h2>Work Gallery</h2>
                    <iframe src="images.pdf" width="100%" height="85%" style="border: none;"></iframe>
                </div>
            `;
            showButtons();
            break;
        case 7:
            pageTitle.textContent = "Website Links";
            pageDescription.innerHTML = `
                <div class="details-box left-box">
                    <h2>Website Links</h2>
                    <p><a href="http://www.williamclarence.co.in/" target="_blank">http://www.williamclarence.co.in/</a></p>
                    <p><a href="https://revanthreddy123.github.io/neoframes/" target="_blank">https://revanthreddy123.github.io/neoframes/</a></p>
                    <p><a href="https://revanthreddy123.github.io/portfolio/" target="_blank">https://revanthreddy123.github.io/portfolio/</a></p>
                </div>
            `;
            showButtons();
            break;
        default:
            break;
    }
}

function hideButtons() {
    const backBtn = document.getElementById('back-btn');
    const nextBtn = document.getElementById('next-btn');
    backBtn.style.display = "none";
    nextBtn.style.display = "none";
}

function showButtons() {
    const backBtn = document.getElementById('back-btn');
    const nextBtn = document.getElementById('next-btn');
    backBtn.style.display = "inline-block";
    nextBtn.style.display = "inline-block";
}

// Add an event listener to check if the screen size is less than or equal to a certain value
window.addEventListener('resize', checkScreenSize);

function checkScreenSize() {
    const isMobile = window.innerWidth <= 600; // Adjust the screen size as needed

    if (isMobile) {
        // If in mobile mode, update the page content
        updatePageContent();
    } else {
        // If not in mobile mode, hide buttons
        hideButtons();
    }
}

// Initial check when the page loads
window.addEventListener('DOMContentLoaded', checkScreenSize);
