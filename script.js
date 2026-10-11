(() => {
  'use strict';
  const root = document.documentElement;
  const themeButton = document.querySelector('#theme-toggle');
  const header = document.querySelector('#header');
  const navigation = document.querySelector('#navigation');
  const menuButton = document.querySelector('#menu-toggle');
  function updateThemeLabel() {
    themeButton.setAttribute('aria-label', root.dataset.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    document.querySelector('meta[name="theme-color"]').content = root.dataset.theme === 'light' ? '#f8f9fc' : '#080d17';
  }
  updateThemeLabel();
  themeButton.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('pa-portfolio-theme', root.dataset.theme); } catch { /* The theme still works when storage is unavailable. */ }
    updateThemeLabel();
    drawBackground();
  });
  function closeMenu(returnFocus = false) {
    navigation.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    if (returnFocus) menuButton.focus();
  }
  menuButton.addEventListener('click', () => {
    if (navigation.classList.contains('open')) { closeMenu(); return; }
    navigation.classList.add('open');
    document.body.classList.add('menu-open');
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'Close navigation');
    navigation.querySelector('a').focus();
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    closeMenu();
    const target = link.hash && document.querySelector(link.hash);
    if (target) { target.setAttribute('tabindex', '-1'); target.focus({preventScroll: true}); }
  }));
  document.addEventListener('keydown', event => {
    if (!navigation.classList.contains('open')) return;
    if (event.key === 'Escape') { closeMenu(true); return; }
    if (event.key !== 'Tab') return;
    const links = [...navigation.querySelectorAll('a'), themeButton, menuButton];
    const first = links[0], last = links[links.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  window.matchMedia('(min-width: 851px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, {passive: true});
  onScroll();
  const sections = [...document.querySelectorAll('main section[id]')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navigation.querySelectorAll('a[href^="#"]').forEach(link => {
          const active = link.hash === '#' + entry.target.id;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
        });
      });
    }, {rootMargin: '-15% 0px -65% 0px', threshold: 0});
    sections.forEach(section => observer.observe(section));
  }
  document.querySelectorAll('[role="tablist"]').forEach(tablist => {
    const tabs = [...tablist.querySelectorAll('[role="tab"]')];
    function selectTab(selected, moveFocus = false) {
      tabs.forEach(tab => {
        const active = tab === selected;
        tab.setAttribute('aria-selected', String(active));
        tab.tabIndex = active ? 0 : -1;
        document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
      });
      if (moveFocus) selected.focus();
    }
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => selectTab(tab));
      tab.addEventListener('keydown', event => {
        const keys = ['ArrowRight', 'ArrowLeft', 'Home', 'End'];
        if (!keys.includes(event.key)) return;
        event.preventDefault();
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
        selectTab(tabs[next], true);
      });
    });
  });
  document.querySelector('#year').textContent = new Date().getFullYear();
  const canvas = document.querySelector('#pipeline-canvas');
  const context = canvas.getContext('2d');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let width = 0, height = 0, frame = 0, lastTime = 0;
  const dots = Array.from({length: 26}, (_, i) => ({x: ((i * 71 + 17) % 997) / 997, y: ((i * 131 + 41) % 991) / 991, speed: .00003 + (i % 3) * .00001}));
  function resizeCanvas() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth; height = window.innerHeight;
    canvas.width = width * ratio; canvas.height = height * ratio;
    context?.setTransform(ratio, 0, 0, ratio, 0, 0);
    drawBackground();
  }
  function drawBackground() {
    if (!context) return;
    context.clearRect(0, 0, width, height);
    context.fillStyle = getComputedStyle(root).getPropertyValue('--accent').trim();
    dots.forEach(dot => { context.beginPath(); context.arc(dot.x * width, dot.y * height, 1.4, 0, Math.PI * 2); context.fill(); });
  }
  function animate(time) {
    if (time - lastTime > 48) {
      dots.forEach(dot => { dot.y = (dot.y + dot.speed * (time - lastTime || 48)) % 1; });
      drawBackground(); lastTime = time;
    }
    frame = requestAnimationFrame(animate);
  }
  function manageMotion() {
    cancelAnimationFrame(frame); lastTime = 0;
    if (!reducedMotion.matches && !document.hidden) frame = requestAnimationFrame(animate);
    else drawBackground();
  }
  window.addEventListener('resize', resizeCanvas, {passive: true});
  document.addEventListener('visibilitychange', manageMotion);
  reducedMotion.addEventListener('change', manageMotion);
  resizeCanvas(); manageMotion();
})();
