// AA+ Studio — interactions
(function () {
  'use strict';

  // Sticky nav background
  var nav = document.getElementById('nav');
  var heroFull = document.querySelector('.hero-full');
  var threshold = 40;
  var computeThreshold = function () {
    threshold = heroFull ? Math.max(40, heroFull.offsetHeight - 80) : 40;
  };
  var onScroll = function () {
    if (window.scrollY > threshold) nav.classList.add('solid');
    else nav.classList.remove('solid');
  };
  computeThreshold();
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { computeThreshold(); onScroll(); }, { passive: true });

  // Mobile menu
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  var setMenu = function (open) {
    links.classList.toggle('open', open);
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  };
  toggle.addEventListener('click', function () {
    setMenu(!links.classList.contains('open'));
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setMenu(false);
  });

  // Scroll reveal
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
    // Safety net: never leave content hidden if the observer misfires
    window.addEventListener('load', function () {
      setTimeout(function () {
        reveals.forEach(function (el) {
          var r = el.getBoundingClientRect();
          if (r.top < window.innerHeight) el.classList.add('in');
        });
      }, 1200);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Lightbox
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbClose = document.getElementById('lbClose');
  var openLB = function (src, alt) {
    lbImg.src = src; lbImg.alt = alt || '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  var closeLB = function () {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.src = '';
  };
  document.querySelectorAll('.frame[data-full]').forEach(function (f) {
    f.addEventListener('click', function () {
      var img = f.querySelector('img');
      openLB(f.getAttribute('data-full'), img ? img.alt : '');
    });
  });
  lb.addEventListener('click', function (e) { if (e.target === lb || e.target === lbImg) closeLB(); });
  lbClose.addEventListener('click', closeLB);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLB(); });
})();
