let currentPage = 1;

// Set initial visibility of buttons
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
backBtn.style.display = "none"; // Hide back button initially
nextBtn.style.display = "block"; // Hide next button initially

function goToNextPage() {
    if (currentPage < 4) {
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
            backBtn.style.display = "none"; // Hide the back button
            nextBtn.style.display = "block"; // Show the next button
            
            backBtn.style.marginTop = "350px"; // Show the back button
            nextBtn.style.marginTop = "350px";

            main.style.marginTop = "250px"; //margin


            break;
        case 2:
            pageTitle.textContent = "About Me";
            pageDescription.innerHTML = `


            <div class="slideshow">

            
                <div class="details-box" id="box1">
                    <h2>Personal Details</h2>
                    <p>Name: S Revanth Reddy</p>
                    <p>Date of Birth: 11 February 1996</p>
                    <p>Gender: Male</p>
                    <p>Languages: English,Telugu & Hindi</p>
                    <p>Location: Hyderabad, Telangana</p>
                    <p>Mail: ar.revanthreddy@gmail.com </p>
                    <p>Phone: +91 73066 66643</p>
                </div>
                
                <div class="details-box" id="box2">
                    <h2>Education</h2>
                    <p>SSC: 2011 - 90%</p>
                    <p> </p>
                    <p>Intermediate: 2011-2013 - 93.5%</p>
                    <p> </p>
                    <p>Bachelor of Architecture: 2013-2018 - 60.5%</p>
                    <p> </p>
                    <p>UI/UX Beginer google course: 2021</p>
                </div>


                <div class="details-box" id="box3">
                    <h2>Work Experience</h2>
                    <p>2017-2018: Architecture Internship - DLF pvt ltd. - Chennai</p>
                    <p></p>
                    <p>2018-2020: 3d Modelling - Rajendran Associates - Chennai</p>
                    <p></p>
                    <p>2020-present: Frontend Developer and 3d Modelling - Neo Frames - Hyderabad</p>
                    
                </div>


</div>
                

                
                
            `;
            backBtn.style.display = "inline-block"; // Show the back button
            nextBtn.style.display = "inline-block"; // Show the next button
            nextBtn.textContent = "Next"; // Change the text of the next button
            main.style.marginTop = "100px"; //margin

            backBtn.style.marginTop = "550px"; // Show the back button
            nextBtn.style.marginTop = "550px";


            break;
        case 3:
            pageTitle.textContent = "Portfolio";
            pageDescription.innerHTML = `
            



                <div class="details-box" id="box1">
    <h2>Softwares</h2>
    <p><img src="photoshop-logo.png" alt="Photoshop Logo"> Photoshop</p>
    <p><img src="figma-logo.png" alt="Figma Logo"> Figma</p>
    <p><img src="html-logo.png" alt="HTML Logo"> HTML</p>
    <p><img src="css-logo.png" alt="CSS Logo"> CSS</p>
    <p><img src="javascript-logo.png" alt="JavaScript Logo"> JavaScript</p>
</div>


<div class="details-box" id="box2">
            <h2>Website Links</h2>
            <p><a href="http://www.williamclarence.co.in/" target="_blank">http://www.williamclarence.co.in/</a></p>
            <p><a href="https://revanthreddy123.github.io/neoframes/" target="_blank">https://revanthreddy123.github.io/neoframes/</a></p>
            <p><a href="https://revanthreddy123.github.io/portfolio/" target="_blank">https://revanthreddy123.github.io/portfolio/</a></p>
        </div>


                
            `;
            backBtn.style.display = "inline-block"; // Show the back button
            nextBtn.style.display = "inline-block"; // Show the next button
            nextBtn.textContent = "Next"; // Change the text of the next button

            main.style.marginTop = "100px"; //margin
            
            backBtn.style.marginTop = "550px"; // Show the back button
            nextBtn.style.marginTop = "550px";
            
            break;
        case 4:
            pageTitle.textContent = "Portfolio";
            pageDescription.innerHTML = `
            
        
            <div class="details-box1 right-box">
    <h2>Work Gallery</h2>
    <iframe src="images.pdf" width="100%" height="85%" style="border: none;"></iframe>
</div>



        
            `;
            backBtn.style.display = "inline-block"; // Show the back button
            nextBtn.style.display = "none"; // Hide the next button
            nextBtn.textContent = "Next"; // Change the text of the next button

            main.style.marginTop = "100px"; //margin


            backBtn.style.marginTop = "550px"; // Show the back button
            nextBtn.style.marginTop = "550px";



            break;
        default:
            break;
    }
}
