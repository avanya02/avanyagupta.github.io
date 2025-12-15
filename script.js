// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});


function sendEmail() {
  const msg = document.getElementById("message").value;
  const email = "avanyagupta8@gmail.com";

  const url = `mailto:${email}?subject=Portfolio Contact&body=${encodeURIComponent(msg)}`;
  window.location.href = url;
}

