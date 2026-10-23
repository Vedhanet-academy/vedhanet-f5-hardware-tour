// VedhaNet Academy contact links — edit these two lines, every page picks them up.
window.VEDHANET = {
  website: 'https://www.vedhanetacademy.com',
  whatsapp: 'https://wa.me/919354718526?text=' + encodeURIComponent('Hi VedhaNet Academy, I tried the F5 lab and would like to know about the F5 course / free demo class.'),
  demoText: 'Book free demo',
  courseText: 'Join the F5 course',
};

(function(){
  function apply(){
    const b = window.VEDHANET;
    document.querySelectorAll('[data-cta="demo"], #ctaDemo').forEach(a => {
      a.textContent = a.dataset.text || b.demoText;
      if(b.website) a.href = b.website; else { a.href = '#'; a.title = 'Link coming soon'; }
    });
    document.querySelectorAll('[data-cta="whatsapp"], #ctaWa').forEach(a => {
      if(b.whatsapp) a.href = b.whatsapp; else a.style.display = 'none';
    });
  }
  window.VEDHANET.apply = apply;
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply); else apply();
})();
