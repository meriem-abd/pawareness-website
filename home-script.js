// Smooth scroll for the "involved" button
const involvedBtn = document.querySelector('.involved-button');
const pagesSection = document.querySelector('.volunt');
if (involvedBtn && pagesSection) { //both elements exist
  involvedBtn.addEventListener('click', () => {
    pagesSection.scrollIntoView({ behavior: 'smooth' });
  });
}

// Flip cards on click
const flipCards = document.querySelectorAll('.flip-card');
if (flipCards.length) {
  flipCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
}

// Scroll animations for .left and .right elements
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".left, .right");
  if (elements.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("shown");
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  }
});

// Flip stray cards when section comes into view
document.addEventListener("DOMContentLoaded", () => {
  const strayCards = document.querySelectorAll(".stray-card, .ill-card-inner");

  if (strayCards.length) {
    const strayObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Find its index so stagger is correct
          const index = Array.from(strayCards).indexOf(entry.target);

          setTimeout(() => {
            entry.target.classList.add("flip"); // flip to back
            setTimeout(() => {
              entry.target.classList.remove("flip"); // flip back to front
            }, 400);
          }, index * 100);

          strayObserver.unobserve(entry.target); // run for that card only once
        }
      });
    }, { threshold: 0.2 });

    strayCards.forEach(card => strayObserver.observe(card));
  }
});




function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

let counted = false;

window.addEventListener('scroll', () => {
  const stats = document.getElementById('stats');
  if (!counted && isInViewport(stats)) {
    counted = true;
    let num = 0;
    const target = +stats.getAttribute('data-target');
    const suffix = stats.getAttribute('data-suffix') || '';
    const speed = 5;

    const timer = setInterval(() => {
      num++;
      stats.textContent = num + suffix;
      if (num >= target) clearInterval(timer);
    }, speed);
  }
});

function textOver(index){
  document.getElementsByClassName('over')[index].style.opacity='1';
   document.getElementsByClassName('behind')[index].style.filter = 'brightness(30%)';
}
function textOut(index){
  document.getElementsByClassName('over')[index].style.opacity= '0';
   document.getElementsByClassName('behind')[index].style.filter = 'brightness(100%)';
}

const titles = document.querySelectorAll(".column_title");

titles.forEach(title => {
  title.addEventListener("click", () => {
    const explanation = title.nextElementSibling;

    // toggle open/close
    if (explanation.style.maxHeight) {
      explanation.style.maxHeight = null; // collapse
    } else {
      explanation.style.maxHeight = explanation.scrollHeight + "px"; // expand
    }
  });
});
