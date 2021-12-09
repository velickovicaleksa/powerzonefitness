
 /* jQuery animacija pre nego sto se sajt ucita
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


/* document.ready naglasava da se funkcija izvrsava nakon upsesnog ucitavanja dom-a i stranica 
-------------------------------------------*/
$(document).ready(function() {

  /* navigacija
  -----------------------------------------------*/
 $('.main-navigation').onePageNav({
        scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
        scrollOffset: 75, //Visina navigacionog bara
        filter: ':not(.external)',
        changeHash: true
    }); 

    /* Navigacija je vidljiva prilikom srkola */
    mainNav();
    $(window).scroll(function () {
        mainNav();
    });

    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) $('.sticky-navigation').stop().animate({
            "opacity": '1',
            "top": '0'
        });
        else $('.sticky-navigation').stop().animate({
            "opacity": '0',
            "top": '-75'
        });
    }
    

   /* Sakri hamburger nakon klika
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


  /*  glatki skrol
  ----------------------------------------------*/
   $(function() {
        $('.navbar-default a, #home a, #overview a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });


 /* Sekcija za poomeranje objekata
    -----------------------------------------------*/
  function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#overview').parallax("100%", 0.3);
    $('#trainer').parallax("100%", 0.2);
    $('#newsletter').parallax("100%", 0.3);
    $('#blog').parallax("100%", 0.1);
    $('#price').parallax("100%", 0.2);
    $('#testimonial').parallax("100%", 0.2);

  }
  initParallax();


   /*dinamicki slajder
  -----------------------------------------------*/
  $(function(){
    jQuery(document).ready(function() {
    $('#home').backstretch([
       "images/home-bg-slider-img1.jpg", 
       "images/home-bg-slider-img2.jpg",
       "images/home-bg-slider-img3.jpg",
        ],  {duration: 2000, fade: 750});
    });
  })


  /* Owl Carousel manipulacija
  -----------------------------------------------*/
  $(document).ready(function() {
    $("#owl-testimonial").owlCarousel({
      autoPlay: 6000,
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet: [768,1],
      itemsTabletSmall: false,
      itemsMobile : [479,1],
    });
  });


  

  /* wow biblioteka
  -------------------------------*/
  new WOW({ mobile: false }).init();


  });

  /* Provera imena, rpezimena i email-a*/
  function provera(){
    var ime,prezime,emailadresa;
    var imevr,prezimevr,emailadresavr;
    niz=[];
    ime=document.querySelector("#name");
    imevr=ime.value;
    prezime=document.querySelector("#Lastname");
    prezimevr=prezime.value;
    emailadresa=document.querySelector("#email");
    emailadresavr=emailadresa.value;
  
    
     let ime1=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}$/;
      if(ime1.test(imevr)){
       niz.push(imevr);
	}
       else{
        document.querySelector("#ime1 > p").innerHTML-"The name is not correct";
       document.querySelector("#ime1 > p").style.color-"orange";
       }
      let prezime1=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}$/;
        if(prezime1.test(prezimevr)){
         niz.push(prezimevr);}
         else{
          document.querySelector("#Lastname1 > p").innerHTML-"The last name is not correct";
         document.querySelector("#Lastname1 > p").style.color-"orange";
         }
  
        
        let adresa1=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[\d]{1,5}$/; 
		if(adresa1.test(emailadresavr)){
        niz.push(emailadresavr);}
        else{document.querySelector("#email1 >p").innerHTML-"The adress is not correct ";
		 document.querySelector("#email1 >p").style.color-"orange";
		 alert("Milanko");
        }
      }


      (function( $ ){
        var $window = $(window);
        var windowHeight = $window.height();
      
        $window.resize(function () {
          windowHeight = $window.height();
        });
      
        $.fn.parallax = function(xpos, speedFactor, outerHeight) {
          var $this = $(this);
          var getHeight;
          var firstTop;
          var paddingTop = 0;
          
          //uzima se pocetna pozicija svakog elementa da bi se primenilo pomeranje blokova	
          function update (){
            
            $this.each(function(){
                      
              firstTop = $this.offset().top;
            });
        
            if (outerHeight) {
              getHeight = function(jqo) {
                return jqo.outerHeight(true);
              };
            } else {
              getHeight = function(jqo) {
                return jqo.height();
              };
            }
              
            // difoltne vrednosti ako nije navedeno
            if (arguments.length < 1 || xpos === null) xpos = "50%";
            if (arguments.length < 2 || speedFactor === null) speedFactor = 0.5;
            if (arguments.length < 3 || outerHeight === null) outerHeight = true;
            
            // pozvia se funkcija kad god se prozor skroluje ili risajzuje
            
              var pos = $window.scrollTop();				
        
              $this.each(function(){
                var $element = $(this);
                var top = $element.offset().top;
                var height = getHeight($element);
        
                // Check if totally above or totally below viewport
                if (top + height < pos || top > pos + windowHeight) {
                  return;
                }
                
                $this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
                
              });
          }		
      
          $window.bind('scroll', update).resize(update);
          update();
        };
      })(jQuery);

      
;(function($, window, document, undefined){

	// konstruktor za plug-in
	var OnePageNav = function(elem, options){
		this.elem = elem;
		this.$elem = $(elem);
		this.options = options;
		this.metadata = this.$elem.data('plugin-options');
		this.$win = $(window);
		this.sections = {};
		this.didScroll = false;
		this.$doc = $(document);
		this.docHeight = this.$doc.height();
	};

	// the plugin prototype
	OnePageNav.prototype = {
		defaults: {
			navItems: 'a',
			currentClass: 'current',
			changeHash: false,
			easing: 'swing',
			filter: '',
			scrollSpeed: 750,
			scrollThreshold: 0.5,
			begin: false,
			end: false,
			scrollChange: false
		},

		init: function() {
			// Introduce defaults that can be extended either
			// globally or using an object literal.
			this.config = $.extend({}, this.defaults, this.options, this.metadata);

			this.$nav = this.$elem.find(this.config.navItems);

			//FIltriraju se linkovi izvan nav-a
			if(this.config.filter !== '') {
				this.$nav = this.$nav.filter(this.config.filter);
			}

			//Hendlovanje klikova nav-a
			this.$nav.on('click.onePageNav', $.proxy(this.handleClick, this));

			//dobijanje pozicije sekcija
			this.getPositions();

			//hendlovanje promena skrola
			this.bindInterval();

			//menjanje poziija prilikom resize-a
			this.$win.on('resize.onePageNav', $.proxy(this.getPositions, this));

			return this;
		},

		adjustNav: function(self, $parent) {
			self.$elem.find('.' + self.config.currentClass).removeClass(self.config.currentClass);
			$parent.addClass(self.config.currentClass);
		},

		bindInterval: function() {
			var self = this;
			var docHeight;

			self.$win.on('scroll.onePageNav', function() {
				self.didScroll = true;
			});

			self.t = setInterval(function() {
				docHeight = self.$doc.height();

				//ako se skroluje
				if(self.didScroll) {
					self.didScroll = false;
					self.scrollChange();
				}

				//ako se promeni visina
				if(docHeight !== self.docHeight) {
					self.docHeight = docHeight;
					self.getPositions();
				}
			}, 250);
		},

		getHash: function($link) {
			return $link.attr('href').split('#')[1];
		},

		getPositions: function() {
			var self = this;
			var linkHref;
			var topPos;
			var $target;

			self.$nav.each(function() {
				linkHref = self.getHash($(this));
				$target = $('#' + linkHref);

				if($target.length) {
					topPos = $target.offset().top;
					self.sections[linkHref] = Math.round(topPos);
				}
			});
		},

		getSection: function(windowPos) {
			var returnValue = null;
			var windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);

			for(var section in this.sections) {
				if((this.sections[section] - windowHeight) < windowPos) {
					returnValue = section;
				}
			}

			return returnValue;
		},

		handleClick: function(e) {
			var self = this;
			var $link = $(e.currentTarget);
			var $parent = $link.parent();
			var newLoc = '#' + self.getHash($link);

			if(!$parent.hasClass(self.config.currentClass)) {
				//Start callback
				if(self.config.begin) {
					self.config.begin();
				}

				//Promeni oznacen link
				self.adjustNav(self, $parent);

				//Removing the auto-adjust on scroll
				self.unbindInterval();

				//Skrolovanje do tacne pozicije
				self.scrollTo(newLoc, function() {
					//Do we need to change the hash?
					if(self.config.changeHash) {
						window.location.hash = newLoc;
					}

					//Add the auto-adjust on scroll back in
					self.bindInterval();

					//End callback
					if(self.config.end) {
						self.config.end();
					}
				});
			}

			e.preventDefault();
		},

		scrollChange: function() {
			var windowTop = this.$win.scrollTop();
			var position = this.getSection(windowTop);
			var $parent;

			//Ako je pozicija odredjenja
			if(position !== null) {
				$parent = this.$elem.find('a[href$="#' + position + '"]').parent();

				//Ako nije vec ta na kojoj je korisnik trenutno
				if(!$parent.hasClass(this.config.currentClass)) {
					//Change the highlighted nav item
					this.adjustNav(this, $parent);

					//If there is a scrollChange callback
					if(this.config.scrollChange) {
						this.config.scrollChange($parent);
					}
				}
			}
		},

		scrollTo: function(target, callback) {
			var offset = $(target).offset().top;

			$('html, body').animate({
				scrollTop: offset
			}, this.config.scrollSpeed, this.config.easing, callback);
		},

		unbindInterval: function() {
			clearInterval(this.t);
			this.$win.unbind('scroll.onePageNav');
		}
	};

	OnePageNav.defaults = OnePageNav.prototype.defaults;

	$.fn.onePageNav = function(options) {
		return this.each(function() {
			new OnePageNav(this, options).init();
		});
	};

})( jQuery, window , document );


      
      

