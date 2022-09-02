'use strict';

const documentReady = () => {
  const heroTitle = document.querySelector('.hero__title');
  const heroButtonSi = document.getElementById('heroButtonSi');
  const heroButtonNo = document.querySelector('#heroButtonNo');

  const nowZomosNobios = () => {
    alert('💞 Sabia que dirias que si 💞');
    alert('😱Besitos en tu colita😱');
    location.href = 'https://www.youtube.com/watch?v=GuZzuQvv7uc';
  };

  const evitarKCRompanMyBobo = () => {
    heroButtonNo.style.position = 'absolute';
    heroButtonNo.style.top = (Math.random() * window.innerHeight) + 'px';
    heroButtonNo.style.left = (Math.random() * window.innerWidth) + 'px';
  };

  const partner = prompt('🥰 Hola como estas? 🥰');
  

  heroButtonSi.addEventListener('click', nowZomosNobios);
  heroButtonNo.addEventListener('mouseover', evitarKCRompanMyBobo);
};

document.addEventListener('DOMContentLoaded', documentReady);