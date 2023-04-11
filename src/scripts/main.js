'use strict';

function clickOnMenuButton(event) {
  const button = event.target;

  const ariaExpandedBoolean = button.ariaExpanded === 'true';

  if (ariaExpandedBoolean) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }

  button.setAttribute('aria-expanded', !ariaExpandedBoolean);

  const drawer = document.querySelector('.drawer');

  drawer.classList.toggle('active');
};

const headerButton = document.querySelector('.header-button');

headerButton.addEventListener(
  'click', clickOnMenuButton);
