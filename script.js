/*implementing date*/
const year = new Date().getFullYear();
document.querySelector(".date").textContent = year;

/*btn event listener*/
const header = document.querySelector(".header"),
  btn = document.querySelector(".btn-mobile-nav");
btn.addEventListener("click", () => header.classList.toggle("nav-open"));

/*Smooth scroll*/
let allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let href = link.getAttribute("href");

    /*scroll to top*/
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    //scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      let sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //close mobile navigaton
    if (link.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
  })
);

//implementing sticky Nav
const sectionHeroEl = document.querySelector(".section-hero");
let observer = new IntersectionObserver(
  function (entry) {
    let ent = entry[0];
    /* console.log(ent); */
    if (!ent.isIntersecting) document.body.classList.add("nav-sticky");
    else document.body.classList.remove("nav-sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
/* function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
 */
