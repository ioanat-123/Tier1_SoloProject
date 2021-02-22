function readMore1() {
  var moreText1 = document.getElementById("more1");
  var read1 = document.getElementById("read1");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    read1.innerHTML = "Read more"; 
    moreText1.style.display = "none";
  } else {
    dots1.style.display = "none";
    read1.innerHTML = "Read less"; 
    moreText1.style.display = "inline";
  }
}

function readMore2() {
  var moreText2 = document.getElementById("more2");
  var read2 = document.getElementById("read2");
  
    if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    read2.innerHTML = "Read more"; 
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    read2.innerHTML = "Read less"; 
    moreText2.style.display = "inline";
  }
}

function readMore3() {
  var moreText3 = document.getElementById("more3");
  var read3 = document.getElementById("read3");
  
    if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    read3.innerHTML = "Read more"; 
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    read3.innerHTML = "Read less"; 
    moreText3.style.display = "inline";
  }
}