/* global dynamicContent */

import DataUtil from './DataUtil'

export default function(Enabler, bannerSize) {
  const langKey = 'Super_2019_SE_sv_all_sizes'

  Enabler.setProfileId(10503284);
  var devDynamicContent = {};

  devDynamicContent.Super_2019_SE_sv_all_sizes = [{}];
  devDynamicContent.Super_2019_SE_sv_all_sizes[0]._id = 0;
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].FirstFrame = true;
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].FinalFrame = false;
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].URL = {};
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].URL.Url = "https://www.finnair.com/gb/gb/black-friday";
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].Campaign_Label = "Alla erbjudanden gäller till den 2 december";
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].Campaign_Label_short = "Alla erbjudanden gäller till den 2 dec";
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].IconText = "";
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].PriceColor = "#333";
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].LabelColor = "#333";
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].PriceLabel = "SEK";
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].Text1 = "<span style='font-size:.78em; line-height:.9em'>Black Friday flyg&shy;erbjudandena <br> snart slut</span>";//"Black Friday-erbju&shy;dandena snart slut";
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].Text2 = "Se alla destinationer på finnair.se";
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].CTA_Text = "Boka nu";
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].OnePriceLabel = "";
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].OneDest = "<span style='font-size: 0.85em'>St Petersburg</span>";
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].OnePrice = 1810;
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].Dest1 = "<span class='twolines'>Sankt Petersburg</span>";
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].Price1 = 1810;
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].Dest2 = "<span class='fillSpace'> <br> </span>Beijing";
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].Price2 = 3975;
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].Dest3 = "Shanghai";
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].Price3 = 4575;
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].Dest4 = "Singapore";
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].Price4 = 5399;
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].Dest5 = "Bangkok";
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].Price5 = 5449;
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].Dest6 = "Sapporo";
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].Price6 = 5634;
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].Dest7 = "Tokio";
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].Price7 = 5639;
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].Dest8 = "Seoul";
  devDynamicContent.Super_2019_SE_sv_all_sizes[0].Price8 = 6684;
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
    data.slides.push({
      type: 'TextSlide',
      conf: {
        title: data.texts.Text2,
      }
    })
  }

  return data
}
