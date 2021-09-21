/* global dynamicContent */

import DataUtil from './DataUtil'

export default function(Enabler, bannerSize) {
  const langKey = 'Super_2019_EE_et_all_sizes'

    Enabler.setProfileId(10499103);
    var devDynamicContent = {};

    devDynamicContent.Super_2019_EE_et_all_sizes = [{}];
    devDynamicContent.Super_2019_EE_et_all_sizes[0]._id = 0;
    devDynamicContent.Super_2019_EE_et_all_sizes[0].FirstFrame = true;
    devDynamicContent.Super_2019_EE_et_all_sizes[0].FinalFrame = true;
    devDynamicContent.Super_2019_EE_et_all_sizes[0].URL = {};
    devDynamicContent.Super_2019_EE_et_all_sizes[0].URL.Url = "https://www.finnair.com/ee/et/black-friday";
    devDynamicContent.Super_2019_EE_et_all_sizes[0].Campaign_Label = "Pakkumine l\u00F5peb 2. detsembril";
    devDynamicContent.Super_2019_EE_et_all_sizes[0].Campaign_Label_short = "Pakkumised l\u00F5ppevad 2. detsembril";
    devDynamicContent.Super_2019_EE_et_all_sizes[0].IconText = "";
    devDynamicContent.Super_2019_EE_et_all_sizes[0].PriceColor = "#333";
    devDynamicContent.Super_2019_EE_et_all_sizes[0].LabelColor = "#333";
    devDynamicContent.Super_2019_EE_et_all_sizes[0].PriceLabel = "SEK";
    devDynamicContent.Super_2019_EE_et_all_sizes[0].Text1 = "Musta reede<br>lennu&shy;pakkumised";
    devDynamicContent.Super_2019_EE_et_all_sizes[0].Text2 = "Vaata sihtkohti finnair.ee";
    devDynamicContent.Super_2019_EE_et_all_sizes[0].CTA_Text = "Broneeri kohe";
    devDynamicContent.Super_2019_EE_et_all_sizes[0].OnePriceLabel = "";
    devDynamicContent.Super_2019_EE_et_all_sizes[0].OneDest = "";
    devDynamicContent.Super_2019_EE_et_all_sizes[0].OnePrice = 136;
    devDynamicContent.Super_2019_EE_et_all_sizes[0].Dest1 = "Prague";
    devDynamicContent.Super_2019_EE_et_all_sizes[0].Price1 = 136;
    devDynamicContent.Super_2019_EE_et_all_sizes[0].Dest2 = "Kittil\u00E4";
    devDynamicContent.Super_2019_EE_et_all_sizes[0].Price2 = 176;
    devDynamicContent.Super_2019_EE_et_all_sizes[0].Dest3 = "Dubai";
    devDynamicContent.Super_2019_EE_et_all_sizes[0].Price3 = 341;
    devDynamicContent.Super_2019_EE_et_all_sizes[0].Dest4 = "Beijing";
    devDynamicContent.Super_2019_EE_et_all_sizes[0].Price4 = 378;
    devDynamicContent.Super_2019_EE_et_all_sizes[0].Dest5 = "Shanghai";
    devDynamicContent.Super_2019_EE_et_all_sizes[0].Price5 = 428;
    devDynamicContent.Super_2019_EE_et_all_sizes[0].Dest6 = "Seoul";
    devDynamicContent.Super_2019_EE_et_all_sizes[0].Price6 = 570;
    devDynamicContent.Super_2019_EE_et_all_sizes[0].Dest7 = "Manila";
    devDynamicContent.Super_2019_EE_et_all_sizes[0].Price7 = 649;
    devDynamicContent.Super_2019_EE_et_all_sizes[0].Dest8 = "Bali";
    devDynamicContent.Super_2019_EE_et_all_sizes[0].Price8 = 748;
    Enabler.setDevDynamicContent(devDynamicContent);

  const data = DataUtil(dynamicContent, langKey)

  // Add slides
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
          destination: {
            label: data.texts.OneDest,
            price: data.texts.OnePrice
          },
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
        data.destinations[2],
        data.destinations[3],
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
  } else if ((bannerSize.width === 300 && bannerSize.height === 300) || bannerSize.height === 320 || bannerSize.height === 250 || bannerSize.width === 468) {
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
        data.destinations[2],
        data.destinations[3],
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
        data.destinations[3],
        data.destinations[4],
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
    data.slides.push({
      type: 'TextSlide',
      conf: {
        title: data.texts.Text2,
      }
    })
  }


  return data
}
