/* global dynamicContent */

import DataUtil from './DataUtil'

export default function(Enabler, bannerSize) {
  const langKey = 'Super_2019_SG_en_all_sizes'

  Enabler.setProfileId(10495878);
  var devDynamicContent = {};

  devDynamicContent.Super_2019_SG_en_all_sizes = [{}];
  devDynamicContent.Super_2019_SG_en_all_sizes[0]._id = 0;
  devDynamicContent.Super_2019_SG_en_all_sizes[0].FirstFrame = true;
  devDynamicContent.Super_2019_SG_en_all_sizes[0].FinalFrame = false;
  devDynamicContent.Super_2019_SG_en_all_sizes[0].URL = {};
  devDynamicContent.Super_2019_SG_en_all_sizes[0].URL.Url = "https://www.finnair.com/";
  devDynamicContent.Super_2019_SG_en_all_sizes[0].Campaign_Label = "Offers end 2 December";
  devDynamicContent.Super_2019_SG_en_all_sizes[0].Campaign_Label_short = "Offers end 2 Dec";
  devDynamicContent.Super_2019_SG_en_all_sizes[0].IconText = "";
  devDynamicContent.Super_2019_SG_en_all_sizes[0].PriceColor = "#333";
  devDynamicContent.Super_2019_SG_en_all_sizes[0].LabelColor = "#333";
  devDynamicContent.Super_2019_SG_en_all_sizes[0].PriceLabel = "SGD";
  devDynamicContent.Super_2019_SG_en_all_sizes[0].Text1 = "Black Friday prices end soon";
  devDynamicContent.Super_2019_SG_en_all_sizes[0].Text2 = "Offers end 2 Dec";
  devDynamicContent.Super_2019_SG_en_all_sizes[0].CTA_Text = "Book now";
  devDynamicContent.Super_2019_SG_en_all_sizes[0].OnePriceLabel = "";
  devDynamicContent.Super_2019_SG_en_all_sizes[0].OneDest = "Berlin";
  devDynamicContent.Super_2019_SG_en_all_sizes[0].OnePrice = 799;
  devDynamicContent.Super_2019_SG_en_all_sizes[0].Dest1 = "Berlin";
  devDynamicContent.Super_2019_SG_en_all_sizes[0].Price1 = 799;
  devDynamicContent.Super_2019_SG_en_all_sizes[0].Dest2 = "Vienna";
  devDynamicContent.Super_2019_SG_en_all_sizes[0].Price2 = 799;
  devDynamicContent.Super_2019_SG_en_all_sizes[0].Dest3 = "Prague";
  devDynamicContent.Super_2019_SG_en_all_sizes[0].Price3 = 799;
  devDynamicContent.Super_2019_SG_en_all_sizes[0].Dest4 = "Paris";
  devDynamicContent.Super_2019_SG_en_all_sizes[0].Price4 = 799;
  devDynamicContent.Super_2019_SG_en_all_sizes[0].Dest5 = "Helsinki";
  devDynamicContent.Super_2019_SG_en_all_sizes[0].Price5 = 799;
  devDynamicContent.Super_2019_SG_en_all_sizes[0].Dest6 = "Oslo";
  devDynamicContent.Super_2019_SG_en_all_sizes[0].Price6 = 799;
  devDynamicContent.Super_2019_SG_en_all_sizes[0].Dest7 = "Copenhagen";
  devDynamicContent.Super_2019_SG_en_all_sizes[0].Price7 = 799;
  devDynamicContent.Super_2019_SG_en_all_sizes[0].Dest8 = "Frankfurt";
  devDynamicContent.Super_2019_SG_en_all_sizes[0].Price8 = 799;
  Enabler.setDevDynamicContent(devDynamicContent);


  const data = DataUtil(dynamicContent, langKey)

  data.slides = []

  // Intro slide
  if(dynamicContent[langKey][0].FirstFrame === true) {
    if((bannerSize.width === 728) ||
      (bannerSize.width === 980 && bannerSize.height === 120) ||
      (bannerSize.width === 980 && bannerSize.height === 400)) {
      data.slides.push({
        type: 'SingleDestinationSlide',
        conf: {
          title: data.texts.Text1,
          destination: data.destinations[0],
          color: data.texts.PriceColor
        }
      })
    }
  }


  if(bannerSize.width === 728){
    data.slides.push({
      outroTime: 100,
      type: 'DestinationsSlide',
      conf: {
        destinations: [
        data.destinations[0],
        data.destinations[1],
        ],
        color: data.texts.PriceColor
      }
    })

    data.slides.push({
      introTime: 100,
      type: 'DestinationsSlide',
      conf: {
        prevDestinations: [
        data.destinations[0],
        data.destinations[1],
        ],
        destinations: [
        data.destinations[4],
        data.destinations[2],
        ],
        color: data.texts.PriceColor
      }
    })
    data.slides.push({
      type: 'TextSlide',
      conf: {
        title: data.texts.Campaign_Label
      }
    })
  } else if ((bannerSize.width === 300 && bannerSize.height === 300) || bannerSize.height === 250 || bannerSize.width === 468) {
    data.slides.push({
      type: 'DestinationsSlide',
      conf: {
        title: data.texts.Text1,
        destinations: [
        data.destinations[0],
        data.destinations[1],
        ],
        color: data.texts.PriceColor
      }
    })

    data.slides.push({
      type: 'DestinationsSlide',
      conf: {
        title: data.texts.Text1,
        prevDestinations: [
        data.destinations[0],
        data.destinations[1],
        ],
        destinations: [
        data.destinations[4],
        data.destinations[2],
        ],
        color: data.texts.PriceColor
      }
    })

  } else if(bannerSize.width === 980 && bannerSize.height === 120){
    data.slides.push({
      type: 'DestinationsSlide',
      conf: {
        destinations: [
        data.destinations[0],
        data.destinations[1],
        data.destinations[2],
        ],
        color: data.texts.PriceColor
      }
    })
    data.slides.push({
      type: 'DestinationsSlide',
      conf: {
        prevDestinations: [
        data.destinations[0],
        data.destinations[1],
        data.destinations[2],
        ],
        destinations: [
        data.destinations[4],
        data.destinations[3],
        data.destinations[5],
        ],
        color: data.texts.PriceColor
      }
    })
  } else if(bannerSize.width === 980 && bannerSize.height === 400){
    data.slides.push({
      type: 'DestinationsSlide',
      conf: {
        title: data.texts.Text1,
        destinations: [
        data.destinations[0],
        data.destinations[1],
        data.destinations[2],
        data.destinations[3],
        ],
        color: data.texts.PriceColor
      }
    })
    data.slides.push({
      type: 'DestinationsSlide',
      conf: {
        title: data.texts.Text1,
        prevDestinations: [
        data.destinations[0],
        data.destinations[1],
        data.destinations[2],
        data.destinations[3],
        ],
        destinations: [
        data.destinations[4],
        data.destinations[5],
        data.destinations[6],
        data.destinations[7],
        ],
        color: data.texts.PriceColor
      }
    })
  } else {
    // Default
    data.slides.push({
      outroTime: 100,
      type: 'DestinationsSlide',
      conf: {
        title: data.texts.Text1,
        destinations: [
        data.destinations[0],
        data.destinations[1],
        data.destinations[2],
        data.destinations[3],
        ],
        color: data.texts.PriceColor
      }
    })

    data.slides.push({
      introTime: 100,
      type: 'DestinationsSlide',
      conf: {
        title: data.texts.Text1,
        prevDestinations: [
        data.destinations[0],
        data.destinations[1],
        data.destinations[2],
        data.destinations[3],
        ],
        destinations: [
        data.destinations[4],
        data.destinations[5],
        data.destinations[6],
        data.destinations[7],
        ],
        color: data.texts.PriceColor
      }
    })
  }

  if(dynamicContent[langKey][0].FinalFrame === true) {
    console.log('We do not have a text slide')
  }

  return data
}
