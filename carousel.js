'use strict';

  const emblaNode = document.querySelector('.embla');
  const options = { loop: true };
  const plugins = [EmblaCarouselAutoplay()]

  const embla = EmblaCarousel(emblaNode, options, plugins);


