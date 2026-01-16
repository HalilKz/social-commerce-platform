
      window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        console.log(scroll);
        if (scroll >= 160) {
          $("#ref").addClass("animate__fadeInRight");
        }
      });

      window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        console.log(scroll);
        if (scroll >= 350) {
          $("#sec-3-img-left").addClass("animate__fadeInLeft");
        }
      });
      window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        console.log(scroll);
        if (scroll >= 350) {
          $("#sec-3-img-right").addClass("animate__fadeInLeft");
        }
      });

       window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        console.log(scroll);
        if (scroll >= 370) {
          $("#sec-3-title").addClass("animate__fadeInDown");
        }
      });
       window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        console.log(scroll);
        if (scroll >= 430) {
          $("#sec-3-title-h2").addClass("animate__fadeInRight");
        }
      });
       window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        console.log(scroll);
        if (scroll >= 430) {
          $("#sec-3-con-1").addClass("animate__fadeInRight");
          $("#sec-3-con-2").addClass("animate__fadeInRight");
        }
      });
       window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        console.log(scroll);
        if (scroll >= 700) {
          $("#sec-3-btn").addClass("animate__fadeInUp");
        }
      });

     
      document.addEventListener('DOMContentLoaded', function () {
    let btnarrow = document.getElementById('more-arrow')
    let hoverBtn = document.getElementById('sec-3-btn')

    hoverBtn.addEventListener('mouseenter', function (e) {
        btnarrow.classList.add('animate__headShake');
        
    });

     hoverBtn.addEventListener('mouseleave', function (e) {
        btnarrow.classList.remove('animate__headShake');
        
    });
    

})
  


// sec=4

window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        console.log(scroll);
        if (scroll >= 1100) {
          $("#sec-4-title").addClass("animate__fadeInLeft");
        }
      });

window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        console.log(scroll);
        if (scroll >= 1100) {
          $("#sec-4-title").addClass("animate__fadeInLeft");
        }
      });

window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        console.log(scroll);
        if (scroll >= 1100) {
          $("#different-title").addClass("animate__fadeInRight");
          $("#different-con").addClass("animate__fadeInRight");
        }
      });

window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        console.log(scroll);
        if (scroll >= 1200) {
          $("#sec-4-con-1").addClass("animate__fadeInUp");
          $("#sec-4-con-2").addClass("animate__fadeInUp");
          $("#sec-4-con-3").addClass("animate__fadeInUp");
        }
      });

window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        console.log(scroll);
        if (scroll >= 1400) {
          $("#sec-4-con-4").addClass("animate__fadeInUp");
          $("#sec-4-con-5").addClass("animate__fadeInUp");
          $("#sec-4-con-6").addClass("animate__fadeInUp");
        }
      });

// sec=5

window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        console.log(scroll);
        if (scroll >= 1700) {
          $("#sec-5-title-top").addClass("animate__fadeInDown");
          $("#sec-5-title").addClass("animate__fadeInDown");
          $("#sec-5-title-bottom").addClass("animate__fadeInDown");
         
        }
      });

window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        console.log(scroll);
        if (scroll >= 2100) {
          $("#sec-5-title-top").addClass("animate__fadeInDown");
          $("#sec-5-title").addClass("animate__fadeInDown");
          $("#sec-5-title-bottom").addClass("animate__fadeInDown");
        }
      });
window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        console.log(scroll);
        if (scroll >= 2100) {
          $("#sec-5-con-left").addClass("animate__fadeInLeft");
        }
      });
window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        console.log(scroll);
        if (scroll >= 1950) {
          $("#sec-5-img").addClass("animate__fadeInUp");
        }
      });
window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        console.log(scroll);
        if (scroll >= 2100) {
          $("#sec-5-con-right").addClass("animate__fadeInRight");
        }
      });

      //sec-6

window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        console.log(scroll);
        if (scroll >= 2700) {
          $("#sec-6-title").addClass("animate__fadeInLeft");
          $("#sec-6-line").addClass("animate__fadeInLeft");
          $("#sec-6-con").addClass("animate__fadeInLeft");
        }
      });

window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        console.log(scroll);
        if (scroll >= 2700) {
          $("#sec-6-btn-left").addClass("animate__fadeInRight");
          $("#sec-6-btn-right").addClass("animate__fadeInRight");
        }
      });

      //footer

window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        console.log(scroll);
        if (scroll >= 2900) {
          $("#swiper-box").addClass("animate__fadeInRight");
        }
      });
