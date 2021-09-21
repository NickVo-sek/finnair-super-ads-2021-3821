/* global dynamicContent */

import DataUtil from './DataUtil'

export default function(Enabler, bannerSize) {
  const langKey = 'Super_2019_JP_ja_all_sizes'

  Enabler.setProfileId(10495735);
  var devDynamicContent = {};

  devDynamicContent[langKey] = [{}];
  devDynamicContent[langKey][0]._id = 0;
  devDynamicContent[langKey][0].FirstFrame = true;
  devDynamicContent[langKey][0].FinalFrame = false;
  devDynamicContent[langKey][0].URL = {};
  devDynamicContent[langKey][0].URL.Url = "https://www.finnair.com/";
  devDynamicContent[langKey][0].Campaign_Label = "\u304A\u5F97\u306A\u904B\u8CC3";
  devDynamicContent[langKey][0].Campaign_Label_short = "";
  devDynamicContent[langKey][0].IconText = "";
  devDynamicContent[langKey][0].PriceColor = "#333";
  devDynamicContent[langKey][0].LabelColor = "#333";
  devDynamicContent[langKey][0].PriceLabel = "";
  devDynamicContent[langKey][0].Text1 = "\u30D6\u30E9\u30C3\u30AF\u30D5\u30E9\u30A4\u30C7\u30FC<br>終了間近";
  devDynamicContent[langKey][0].Text2 = "ブラック<br>フライデー<br>終了間近";
  devDynamicContent[langKey][0].CTA_Text = "\u4ECA\u3059\u3050\u4E88\u7D04";
  devDynamicContent[langKey][0].OnePriceLabel = "";
  devDynamicContent[langKey][0].OneDest = "";
  devDynamicContent[langKey][0].OnePrice = "";
  devDynamicContent[langKey][0].Dest1 = "\u30D8\u30EB\u30B7\u30F3\u30AD";
  devDynamicContent[langKey][0].Price1 = 60000;
  devDynamicContent[langKey][0].Dest2 = "\u30ED\u30F3\u30C9\u30F3";
  devDynamicContent[langKey][0].Price2 = 60000;
  devDynamicContent[langKey][0].Dest3 = "\u30ED\u30FC\u30DE";
  devDynamicContent[langKey][0].Price3 = 60000;
  devDynamicContent[langKey][0].Dest4 = "\u30A6\u30A3\u30FC\u30F3";
  devDynamicContent[langKey][0].Price4 = 60000;
  devDynamicContent[langKey][0].Dest5 = "\u30C1\u30E5\u30FC\u30EA\u30C3\u30D2";
  devDynamicContent[langKey][0].Price5 = 60000;
  devDynamicContent[langKey][0].Dest6 = "\u30D7\u30E9\u30CF";
  devDynamicContent[langKey][0].Price6 = 60000;
  devDynamicContent[langKey][0].Dest7 = "\u30DF\u30E5\u30F3\u30D8\u30F3";
  devDynamicContent[langKey][0].Price7 = 60000;
  devDynamicContent[langKey][0].Dest8 = "\u30D1\u30EA";
  devDynamicContent[langKey][0].Price8 = 60000;
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
  } else if ((bannerSize.width === 300 && bannerSize.height === 300) || bannerSize.height === 250 || bannerSize.width === 468) {
    data.slides.push({
      type: 'DestinationsSlide',
      conf: {
        title: data.texts.Text1,
        destinations: [
        data.destinations[0],
        
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
        ],
        destinations: [
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
        data.destinations[1],
        ],
        destinations: [
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
  }else if(bannerSize.width === 160 && bannerSize.height === 600 && data.texts.Text2){
    data.slides.push({
      outroTime: 100,
      type: 'DestinationsSlide',
      conf: {
        title: data.texts.Text2,
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
        title: data.texts.Text2,
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
