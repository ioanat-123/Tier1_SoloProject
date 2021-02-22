var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";  
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}    
	for (i = 0; i < dots.length; i++) {
	dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
	setTimeout(showSlides, 2000);
};

function isInView(elem) {
    var bounding = elem.getBoundingClientRect();
    return Math.abs(bounding.top) < bounding.height;
};

function scroll() {
    let elems = {
        "section1": "#home",
        "about": "#about",
        "contact": "#contact"
    };
    Object.keys(elems).forEach(function (key) {
        document.querySelectorAll("a[href='" + elems[key] + "']")[0].classList.remove('activeItem');
    });
    for (var key in elems) {
        if (isInView(document.getElementById(key))) {
            document.querySelectorAll("a[href='" + elems[key] + "']")[0].classList.add('activeItem');
            return;
        }
    }
};