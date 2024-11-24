/**
 * Template Name: eNno - v2.1.0
 * Template URL: https://bootstrapmade.com/enno-free-simple-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
 !(function ($) {
  "use strict";

  // Cache frequently used selectors
  const $window = $(window);
  const $document = $(document);
  const $body = $('body');
  const $header = $('#header');
  const $navMenu = $('.nav-menu');
  const $mobileNav = $('.mobile-nav');
  const $backToTop = $('.back-to-top');
  
  // Configuration
  const config = {
    scrollDuration: 1500,
    scrollEasing: 'easeInOutExpo',
    mobileBreakpoint: 991,
    scrollOffset: $header.outerHeight() - (window.matchMedia("(max-width: 991px)").matches ? -16 : 16)
  };

  // Debounce function
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Smooth scroll handler
  function handleSmoothScroll(e) {
    try {
      const $this = $(this);
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && 
          location.hostname === this.hostname) {
        e.preventDefault();
        const target = $(this.hash);
        if (target.length) {
          const scrollto = $this.attr("href") === '#header' ? 0 : target.offset().top - config.scrollOffset;
          
          $('html, body').animate({
            scrollTop: scrollto
          }, config.scrollDuration, config.scrollEasing);

          if ($this.parents('.nav-menu, .mobile-nav').length) {
            $('.nav-menu .active, .mobile-nav .active').removeClass('active');
            $this.closest('li').addClass('active');
          }

          if ($body.hasClass('mobile-nav-active')) {
            $body.removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('far fa-bars far fa-times');
            $('.mobile-nav-overly').fadeOut();
          }
          return false;
        }
      }
    } catch (error) {
      console.error('Smooth scroll error:', error);
    }
  }

  // Combined scroll handler
  const handleScroll = debounce(() => {
    try {
      const scrollTop = $window.scrollTop();
      const isScrolled = scrollTop > 100;

      // Header scroll class
      $header.toggleClass('header-scrolled', isScrolled);

      // Back to top button
      $backToTop.fadeToggle('slow');

      // Navigation active state
      if (scrollTop < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
        return;
      }

      const curPos = scrollTop + 200;
      $('section').each(function() {
        const $section = $(this);
        const top = $section.offset().top;
        const bottom = top + $section.outerHeight();

        if (curPos >= top && curPos <= bottom) {
          $('.nav-menu, #mobile-nav').find('li').removeClass('active');
          $('.nav-menu, #mobile-nav')
            .find(`a[href="#${$section.attr('id')}"]`)
            .parent('li')
            .addClass('active');
        }
      });
    } catch (error) {
      console.error('Scroll handler error:', error);
    }
  }, 100);

  // Mobile navigation setup
  function setupMobileNav() {
    try {
      if ($navMenu.length) {
        const $mobileNavClone = $navMenu.clone().prop({
          class: 'mobile-nav d-lg-none'
        });
        
        $body.append($mobileNavClone)
             .prepend('<button type="menu" class="mobile-nav-toggle d-lg-none"><i class="far fa-bars"></i></button>')
             .append('<div class="mobile-nav-overly"></div>');

        $document.on('click', '.mobile-nav-toggle', function() {
          $body.toggleClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('far fa-bars far fa-times');
          $('.mobile-nav-overly').toggle();
        });

        $document.on('click', '.mobile-nav .drop-down > a', function(e) {
          e.preventDefault();
          $(this).next().slideToggle(300);
          $(this).parent().toggleClass('active');
        });

        // Close mobile nav when clicking outside
        $document.on('click', function(e) {
          if (!$(e.target).closest('.mobile-nav, .mobile-nav-toggle').length) {
            if ($body.hasClass('mobile-nav-active')) {
              $body.removeClass('mobile-nav-active');
              $('.mobile-nav-toggle i').toggleClass('far fa-bars far fa-times');
              $('.mobile-nav-overly').fadeOut();
            }
          }
        });
      } else {
        $(".mobile-nav, .mobile-nav-toggle").hide();
      }
    } catch (error) {
      console.error('Mobile nav setup error:', error);
    }
  }

  // Initialize
  function init() {
    // Bind events
    $document.on('click', '.nav-menu a, .mobile-nav a, .scrollto', handleSmoothScroll);
    $window.on('scroll', handleScroll);
    $backToTop.on('click', () => {
      $('html, body').animate({
        scrollTop: 0
      }, config.scrollDuration, config.scrollEasing);
      return false;
    });

    // Setup components
    setupMobileNav();

    // Handle initial hash in URL
    if (window.location.hash) {
      const initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        $('html, body').animate({
          scrollTop: $(initial_nav).offset().top - config.scrollOffset
        }, config.scrollDuration, config.scrollEasing);
      }
    }

    // Initialize counters
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 2000
    });

    // Initialize portfolio
    const portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initialize lightbox
    $('.venobox').venobox();

    // Initialize carousels
    $(".testimonials-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        900: { items: 3 }
      }
    });

    $(".portfolio-details-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      items: 1
    });
  }

  // Initialize when DOM is ready
  $(() => init());

})(jQuery);