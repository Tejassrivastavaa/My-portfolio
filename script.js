
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


gsap.to("#nav", {
  // backgroundColor: "#1D2127", //#252930
  background:
 "radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)",
  duration: 0.3,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 0.5,
  },
});

// gsap.to("#hamburger-nav", {
//   // backgroundColor: "#1D2127", //#252930
//   background:
//  "radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)",
//   duration: 0.3,
//   height: "110px",
//   scrollTrigger: {
//     trigger: "#nav",
//     scroller: "body",
//     // markers:true,
//     start: "top -10%",
//     end: "top -11%",
//     scrub: 0.5,
//   },
// });


gsap.to("#main", {
  // background:
//  "radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)",
backgroundColor: "#0F0F0F " ,
scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});


var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #106477";
    crsr.style.backgroundColor = "#106477";
  });
});




function openProjectDetails(project) {
  let modalBody = document.getElementById("modal-body");
 
  if (project === 'coffee') {
      modalBody.innerHTML = `
          <div class="project-header">
              <h2>Coffee Shop Sales Analysis</h2>
              <span class="badge">Excel Project</span>
          </div>
          <div class="project-body">
              <div class="project-description">
                  <p>Welcome to the Coffee Shop Sales Analysis repository! In this project, we delve into coffee shop sales data using Microsoft Excel. Our analysis covers various aspects, including sales patterns, peak hours, store locations, and top-selling products. We leverage powerful Excel features to gain insights and visualize trends.

</p>
                   <span id="moreText" style="display: none;">
                      <br><b>Features Used</b><br>
                      MS Excel: The cornerstone for data organization and manipulation.<br>
                      Power Query: Ensures clean and transformed data.<br>
                      Power Pivot: Enables data modeling and measure calculations.<br>
                      Pivot Tables: Summarizes and filters top-performing data.<br>
                      Charts & Graphs: Visualizes trends for better understanding.<br>
                      Slicers: Enhances visualization interactivity.</span>
                        <a href="javascript:void(0);" id="readMoreLink" onclick="toggleReadMore()">Read More</a>
                   <div class="project-links">
  <a href="https://github.com/Tejassrivastava8/Coffee-Shop-Sales-Analysis" target="_blank" class="btn github">View Project on GitHub</a>
</div>
              </div>
               <div class="project-image">
                  <div class="carousel">
                      <div class="slides" id="project-slides">
                          <div class="slide">
                              <img src="assets/Coffee-Dashboard.jpg" alt="Coffee Shop Analysis">
                          </div>
                          <div class="slide">
                              <img src="assets/Coffee-Dashboard-2.jpg" alt="Coffee Shop Analysis 2">
                          </div>
                           <div class="slide">
                              <img src="assets/Coffee-Dashboard-3.jpg" alt="Coffee Shop Analysis 2">
                          </div>
                           <div class="slide">
                              <img src="assets/Coffee-Dashboard-4.jpg" alt="Coffee Shop Analysis 2">
                          </div>
                          <!-- Add more slides as needed -->
                      </div>
                      <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                      <a class="next" onclick="plusSlides(1)">&#10095;</a>
                  </div>
              </div>
          </div>
      `;
      showSlides(1); // Initialize the first slide
  } else if (project === 'crunchy') {
      modalBody.innerHTML = `
          <div class="project-header">
              <h2>Crunchy Corner Sales Analysis</h2>
              <span class="badge">Power BI Project</span>
          </div>
          <div class="project-body">
              <div class="project-description">
                  <p>This project involves a detailed analysis of Crunchy Corner's sales data using Power BI, incorporating both basic ETL techniques and advanced DAX measures. I explored key metrics such as Net Profit, category performance, SKU, EBITDA, and Gross Profit, providing valuable insights for the business.<br>
                   <span id="moreText" style="display: none;">
                   <br><b>Client's Requirement</b><br>
                    Financial Overview Metrices<br>
                    Optimization of Business<br>
                    Financial Planning and Budgeting<br>
                    <br>Techniques Used -
                    ETL Techniques in Excel Filtering, Data Cleaning, XLOOKUP, Advanced Measure Statements in Power BI.</span>
                        <a href="javascript:void(0);" id="readMoreLink" onclick="toggleReadMore()">Read More</a>
                  <div class="project-links">
                     
                      <a href="https://github.com/Tejassrivastava8/Crunchy-Corner-Data-Analysis" target="_blank" class="btn github">View Project on GitHub</a>
                  </div>
                  
              </div>

               <div class="project-image">
                  <div class="carousel">
                      <div class="slides" id="project-slides">
                          <div class="slide">
                              <img src="assets/Crunchy-dashboard.jpg" alt="crunchy corner sales analysis">
                          </div>
                            <div class="slide">
                              <img src="assets/crunchy-dashboard-2.jpg" alt="crunchy corner sales analysis">
                          </div>
                            <div class="slide">
                              <img src="assets/crunchy-dashboard-3.jpg" alt="crunchy corner sales analysis">
                          </div>
                            <div class="slide">
                              <img src="assets/crunchy-dashboard-4.jpg" alt="crunchy corner sales analysis">
                          </div>
               <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                      <a class="next" onclick="plusSlides(1)">&#10095;</a>
                  </div>
                  </div>
          </div>
      `;
      showSlides(1); // Initialize the first slide
      
  } else if (project === 'blinkit') {
      modalBody.innerHTML = `
          <div class="project-header">
              <h2>Blinkit Data Analysis</h2>
              <span class="badge">Power BI Project</span>
          </div>
          <div class="project-body">
              <div class="project-description">
                  <p>This Power BI dashboard project offers a comprehensive analysis of Blinkit, India's Last Minute App, focusing on sales performance, customer satisfaction, and inventory distribution. The interactive dashboard transforms raw data into actionable insights, enabling data-driven decision-making for business optimization.</p>
                   <span id="moreText" style="display: none;">
                   <Br> <b>Key features include:</b><br>
                  Real-time KPI tracking: Total sales ($1.20M), average sales ($141), item count (8523), and customer ratings (3.9/5).<br>
                  Interactive filters for customized analysis by outlet type, size, and product category.<br>
                  Trend analysis of outlet establishment from 2012 to 2022.<br>
                  Detailed breakdown of sales by product fat content and item types.<br>
                  Comparative analysis of outlet performance based on size, location, and type.<br></span>
                        <a href="javascript:void(0);" id="readMoreLink" onclick="toggleReadMore()">Read More</a>
                   </p>
                  <div class="project-links">
              
                      <a href="https://github.com/Tejassrivastava8/Blinkit-Data-Analysis" target="_blank" class="btn github">View Project on GitHub</a>
                  </div>
              </div>
              
               <div class="project-image">
                  <div class="carousel">
                      <div class="slides" id="project-slides">
                          <div class="slide">
                              <img src="assets/D1.jpg" alt="Blinkit analysis">
                          </div>
                            <div class="slide">
                              <img src="assets/D2.jpg" alt="Blinkit analysis">
                          </div>
                            <div class="slide">
                              <img src="assets/D3.jpg" alt="Blinkit analysis">
                          </div>
                            <div class="slide">
                              <img src="assets/D4.jpg" alt="Blinkit analysis">
                          </div>
                            <div class="slide">
                              <img src="assets/D5.jpg" alt="Blinkit analysis">
                          </div>
                            <div class="slide">
                              <img src="assets/D6.jpg" alt="Blinkit analysis">
                          </div>
                            <div class="slide">
                              <img src="assets/D7.jpg" alt="Blinkit analysis">
                          </div>
                            <div class="slide">
                              <img src="assets/D8.jpg" alt="Blinkit analysis">
                          </div>
                            <div class="slide">
                              <img src="assets/D9.jpg" alt="Blinkit analysis">
                          </div>
               <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                      <a class="next" onclick="plusSlides(1)">&#10095;</a>
              </div>
          </div>
          </div>
      `;
      showSlides(1); // Initialize the first slide
  }

  const modal = document.getElementById("project-details-modal");
  modal.classList.add('open');
  modal.classList.remove('closing');
  document.body.classList.add('modal-open'); // Disable scrolling
}


function toggleReadMore() {
  const moreText = document.getElementById("moreText");
  const linkText = document.getElementById("readMoreLink");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    linkText.innerHTML = "Read Less";
  } else {
    moreText.style.display = "none";
    linkText.innerHTML = "Read More";
  }
  
}



function closeProjectDetails() {
  const modal = document.getElementById("project-details-modal");
  modal.classList.add('closing');
  setTimeout(() => {
      modal.classList.remove('open');
      modal.classList.remove('closing');
      document.body.classList.remove('modal-open'); // Enable scrolling
  }, 300); // Match this duration with the transition duration in CSS
}

window.onclick = function(event) {
  const modal = document.getElementById("project-details-modal");
  if (event.target == modal) {
      closeProjectDetails();
  }
}



let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}
