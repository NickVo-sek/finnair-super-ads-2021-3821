var container;
var content;
var bgExit;
var svg;
var cta;
var ctaRect;

function init() {
  if (Enabler.isPageLoaded()) {
    politeInit();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, politeInit);
  }
}

function politeInit() {
  // Assign All the elements to the elements on the page
  container = document.getElementById('container_dc');
  bgExit = document.getElementById('background_exit_dc');
  svg = document.getElementById('svg');
  cta = document.getElementById('cta');
  ctaRect = document.getElementById('ctaRect');

  container.style.display = 'block';

  Enabler.setProfileId(10006477);
  var devDynamicContent = {};

  devDynamicContent.Tactical_2017_UK_en = [{}];
  devDynamicContent.Tactical_2017_UK_en[0]._id = 0;
  devDynamicContent.Tactical_2017_UK_en[0].ID = 1;
  devDynamicContent.Tactical_2017_UK_en[0].startDate = {};
  devDynamicContent.Tactical_2017_UK_en[0].startDate.RawValue = "04/02/2011 00:00 (+02:00)";
  devDynamicContent.Tactical_2017_UK_en[0].startDate.UtcValue = 1301695200000;
  devDynamicContent.Tactical_2017_UK_en[0].endDate = {};
  devDynamicContent.Tactical_2017_UK_en[0].endDate.RawValue = "08/16/2027 00:00 (+03:00)";
  devDynamicContent.Tactical_2017_UK_en[0].endDate.UtcValue = 1818363600000;
  devDynamicContent.Tactical_2017_UK_en[0].RerportingLabel = "no label";
  devDynamicContent.Tactical_2017_UK_en[0].Default = true;
  devDynamicContent.Tactical_2017_UK_en[0].Active = true;
  devDynamicContent.Tactical_2017_UK_en[0].PriceFirst = false;
  devDynamicContent.Tactical_2017_UK_en[0].BoxTextFirst = false;
  devDynamicContent.Tactical_2017_UK_en[0].SaleMode = false;
  devDynamicContent.Tactical_2017_UK_en[0].ColorBox = true;
  devDynamicContent.Tactical_2017_UK_en[0].SkipSecondFrame = false;
  devDynamicContent.Tactical_2017_UK_en[0].PriceColor = "#ba4a9e";
  devDynamicContent.Tactical_2017_UK_en[0].StripeColor = "#ba4a9e";
  devDynamicContent.Tactical_2017_UK_en[0].image = {};
  devDynamicContent.Tactical_2017_UK_en[0].image.Type = "file";
  devDynamicContent.Tactical_2017_UK_en[0].image.Url = "https://s0.2mdn.net/ads/richmedia/studio/65231/65231_20171107062308722_1111.jpg";
  devDynamicContent.Tactical_2017_UK_en[0].Text1 = "FLY <span class=\'hidden\'>THE SHORT NORTHERN ROUTE TO ASIA<\/span>";
  devDynamicContent.Tactical_2017_UK_en[0].Text2 = "CHECK OUT OUR DAILY OFFERS";
  devDynamicContent.Tactical_2017_UK_en[0].Text3 = "CHECK OUT OUR DAILY OFFERS 2";
  devDynamicContent.Tactical_2017_UK_en[0].CTA = "BOOK NOW";
  devDynamicContent.Tactical_2017_UK_en[0].Dest1 = "SINGAPORE";
  devDynamicContent.Tactical_2017_UK_en[0].Price1 = "\u00A3509";
  devDynamicContent.Tactical_2017_UK_en[0].Dest2 = "BILLUND";
  devDynamicContent.Tactical_2017_UK_en[0].Price2 = "\u00A3509";
  devDynamicContent.Tactical_2017_UK_en[0].Dest3 = "AMSTERDAM";
  devDynamicContent.Tactical_2017_UK_en[0].Price3 = "\u00A3509";
  devDynamicContent.Tactical_2017_UK_en[0].Dest4 = "NIZZA";
  devDynamicContent.Tactical_2017_UK_en[0].Price4 = "\u00A3509";
  devDynamicContent.Tactical_2017_UK_en[0].HighlightDest = "REYKJAVIK";
  devDynamicContent.Tactical_2017_UK_en[0].HighlightPrice = "\u00A3509";
  devDynamicContent.Tactical_2017_UK_en[0].BoxDest = "REYKJAVIK";
  devDynamicContent.Tactical_2017_UK_en[0].BoxPrice = "\u00A3509";
  Enabler.setDevDynamicContent(devDynamicContent);

  addListeners();
};


addListeners = function (e) {
  bgExit.addEventListener('click', bgExitHandler, false);
  cta.addEventListener('click', bgExitHandler, false);

  politeLoad(['https://s0.2mdn.net/ads/richmedia/studio/appengine/842b046d-ffa8-46d1-8d59-57cfd055f9a6_greensock-tweenmax-1.17.min.js'], function () {
    setContent();
  });
};

function politeLoad(urls, onComplete) {
  var l = urls.length,
    loaded = 0,
    checkProgress = function () {
      if (++loaded === l && onComplete) {
        onComplete();
      }
    },
    i;
  for (i = 0; i < l; i++) {
    Enabler.loadScript(urls[i], checkProgress);
  }
}

var frameCount = 1

setContent = function () {

  document.getElementById('text1').innerHTML = dynamicContent.Tactical_2017_UK_en[0].Text1;
  document.getElementById('text2').innerHTML = dynamicContent.Tactical_2017_UK_en[0].Text2;

  document.getElementById('boxText').innerHTML = dynamicContent.Tactical_2017_UK_en[0].Text3;

  document.getElementById('dest1').innerHTML = dynamicContent.Tactical_2017_UK_en[0].Dest1;
  document.getElementById('price1').innerHTML = dynamicContent.Tactical_2017_UK_en[0].Price1;

  document.getElementById('dest2').innerHTML = dynamicContent.Tactical_2017_UK_en[0].Dest2;
  document.getElementById('price2').innerHTML = dynamicContent.Tactical_2017_UK_en[0].Price2;

  document.getElementById('dest3').innerHTML = dynamicContent.Tactical_2017_UK_en[0].Dest3;
  document.getElementById('price3').innerHTML = dynamicContent.Tactical_2017_UK_en[0].Price3;

  document.getElementById('oneDest').innerHTML = dynamicContent.Tactical_2017_UK_en[0].HighlightDest;
  document.getElementById('onePrice').innerHTML = dynamicContent.Tactical_2017_UK_en[0].HighlightPrice;

  document.getElementById('boxDest').innerHTML = dynamicContent.Tactical_2017_UK_en[0].BoxDest;
  document.getElementById('boxPrice').innerHTML = dynamicContent.Tactical_2017_UK_en[0].BoxPrice;

  document.getElementById('img').setAttributeNS('http://www.w3.org/1999/xlink', 'href', dynamicContent.Tactical_2017_UK_en[0].image.Url);

  document.getElementById('ctaText').innerHTML = dynamicContent.Tactical_2017_UK_en[0].CTA;

  // set the color for the area on left
  document.getElementById('colorBlock').style.backgroundColor = dynamicContent.Tactical_2017_UK_en[0].StripeColor;

  // set the color of the box to be the same as color of stripe
  document.getElementById('box').style.fill = document.getElementById('colorBlock').style.backgroundColor;

  // set the color for .price elements
  Array.prototype.filter.call(document.getElementsByClassName('price'), function (price) {
    if (price.id != 'boxPrice') {
      price.style.color = dynamicContent.Tactical_2017_UK_en[0].PriceColor;
    }
  });

  startAnimation();
},

  startAnimation = function () {

    var tl = new TimelineMax({

    });

    tl.set(emblem, {
      x: 50,
    })

    // animate the highlighted price first
    if (dynamicContent.Tactical_2017_UK_en[0].PriceFirst) {
      tl.set(oneOfferContainer, {
        scale: 4,
        transformOrigin: '30% 20%',
      })
        .set(oneOfferContainer, {
          css: {
            display: 'block',
          }
        })
        .set(oneOfferContainer, {
          opacity: 1,
        })
        .set(onePrice, {
          opacity: 0,
        })
        .set(text1, {
          display: 'none',
        })
        .to(oneOfferContainer, 1, {
          scale: 1,
          ease: Expo.easeInOut,
        }, '+=0.5')
        .to(onePrice, 1, {
          opacity: 1,
          ease: Expo.easeInOut,
        })
    }
    else {
      tl.set(text1, {
        scale: 4,
        transformOrigin: '0% 20%',
      })
        .to(text1, 1, {
          scale: 1,
          ease: Expo.easeInOut,
        }, '+=0.5')
        .to('.hidden', 1, {
          opacity: 1,
          ease: Expo.easeInOut,
        }, '-=1')
    }

    tl.to(emblem, 1, {
      opacity: 1,
      x: 0,
      ease: Sine.easeOut,
    })
      .to(clip, 1, {
        attr: {
          x: 415,
          width: 330,
          height: 240,
          y: 0,
        },
        ease: Expo.easeInOut,
      }, '-=0.5')
      .to(cta, 1, {
        opacity: 1,
        x: 0,
        ease: Sine.easeOut,
      })
      // add label where the box animation should go
      .addLabel('box')

    if (dynamicContent.Tactical_2017_UK_en[0].PriceFirst) {
      tl.to(oneOfferContainer, 1, {
        opacity: 0,
        ease: Expo.easeInOut,
      }, '+=3')
        .set(oneOfferContainer, {
          css: {
            display: 'none',
          }
        })
    }
    else {
      tl.to(text1, 0.5, {
        opacity: 0,
        ease: Expo.easeInOut,
      }, '+=3')
        .set(text1, {
          css: {
            display: 'none',
          }
        })
    }

    // if skip second frame is false the animate the second frame
    if (!dynamicContent.Tactical_2017_UK_en[0].SkipSecondFrame) {
      // if salemode is false - then show sencond frame text
      if (!dynamicContent.Tactical_2017_UK_en[0].SaleMode && !dynamicContent.Tactical_2017_UK_en[0].SkipSecondFrame) {
        tl.set(text2, {
          css: {
            display: 'block',
          }
        })
          .to(text2, 0.5, {
            opacity: 1,
            ease: Expo.easeInOut,
          })
      }
      // if salemode is true - then show one price on the second frame
      else if (!dynamicContent.Tactical_2017_UK_en[0].SkipSecondFrame) {
        tl.set(oneOfferContainer, {
          css: {
            display: 'block',
          }
        })
          .set(oneOfferContainer, {
            opacity: 1,
          })
          .from(onePrice, 1, {
            y: -55,
            ease: Expo.easeInOut,
          })
          .from(oneDest, 1, {
            y: -30,
            ease: Expo.easeInOut,
          }, '-=0.8')
      }

      // just animate something to get the 2 s delay
      tl.set(finnair, {
        opacity: 1
      }, '+=2')
    }

    // if there's first destination set then show the third frame
    if (dynamicContent.Tactical_2017_UK_en[0].Dest1 != "") {
      tl.to(text2, 0.5, {
        opacity: 0,
        ease: Expo.easeInOut,
      })
        .to(oneOfferContainer, 0.5, {
          opacity: 0,
          ease: Expo.easeInOut,
        }, '-=0.5')
        .to(clip, 1, {
          attr: {
            x: 750,
            width: 0,
            height: 120,
            y: 0,
          },
          ease: Expo.easeInOut,
        }, '+=0.5')
        .set(text2, {
          css: {
            display: 'none',
          }
        })
        .set(oneOfferContainer, {
          css: {
            display: 'none',
          }
        })
        .set(textContainer, {
          css: {
            display: 'none',
          }
        })
        .set(prices, {
          css: {
            display: 'block',
            opacity: 1,
          }
        })
        .from(price1, 1, {
          y: -75,
          ease: Expo.easeInOut,
        })
        .from(price2, 1, {
          y: -75,
          ease: Expo.easeInOut,
        }, '-=1')
        .from(price3, 1, {
          y: -75,
          ease: Expo.easeInOut,
        }, '-=1')
        .from(dest1, 1, {
          y: -50,
          ease: Expo.easeInOut,
        }, '-=0.8')
        .from(dest2, 1, {
          y: -50,
          ease: Expo.easeInOut,
        }, '-=1')
        .from(dest3, 1, {
          y: -50,
          ease: Expo.easeInOut,
        }, '-=1')
    }

    // if the ColorBox variable is true, then animate the box
    if (dynamicContent.Tactical_2017_UK_en[0].ColorBox) {
      var boxAnimation = new TimelineMax({});

      boxAnimation.to(box, 1, {
        attr: {
          height: 140,
        },
        ease: Expo.easeInOut,
      })

      // display text before the price in box
      if (dynamicContent.Tactical_2017_UK_en[0].BoxTextFirst) {
        boxAnimation.set(boxText, {
          css: {
            display: 'block',
          }
        })
          .to(boxText, 1, {
            opacity: 1,
            ease: Sine.easeOut,
          })
        // if second frame is not skipped
        if (!dynamicContent.Tactical_2017_UK_en[0].SkipSecondFrame) {
          boxAnimation.to(boxText, 1, {
            opacity: 0,
            ease: Sine.easeOut,
          }, '+=2')
            .set(boxOffer, {
              css: {
                display: 'block',
              }
            })
            .to(boxOffer, 0.5, {
              opacity: 1,
              ease: Expo.easeOut,
            })
        }
      }

      // display price before text in the box
      else {
        boxAnimation.to(boxOffer, 1, {
          opacity: 1,
          ease: Sine.easeOut,
        })

        if (dynamicContent.Tactical_2017_UK_en[0].Text3 != "" && !dynamicContent.Tactical_2017_UK_en[0].SkipSecondFrame) {
          boxAnimation.to(boxOffer, 1, {
            opacity: 0,
            ease: Sine.easeOut,
          }, '+=2')
            .set(boxText, {
              css: {
                display: 'block',
              }
            })
            .to(boxText, 0.5, {
              opacity: 1,
              ease: Expo.easeInOut,
            })
        }
      }

      boxAnimation.set(finnair, {
        opacity: 1
      }, '+=2')

      if (dynamicContent.Tactical_2017_UK_en[0].Dest1 != "") {

        boxAnimation.to(boxText, 0.5, {
          opacity: 0,
          ease: Expo.easeInOut,
        })
          .to(boxOffer, 0.5, {
            opacity: 0,
            ease: Expo.easeInOut,
          }, '-=0.5')
          .set(boxText, {
            css: {
              display: 'none',
            }
          })
          .set(boxOffer, {
            css: {
              display: 'none',
            }
          })
          .to(box, 1, {
            attr: {
              height: 0,
            },
            ease: Expo.easeInOut,
          })
      }
      // this adds the box animation where the label is
      tl.add(boxAnimation, 'box')

    }







  }

bgExitHandler = function (e) {
  Enabler.exit("background clicktrough");
}

// Wait for Enabler to init
window.onload = function () {

  if (Enabler.isInitialized()) {
    init();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
  }
};
