/* global dynamicContent */

import DataUtil from './DataUtil'

export default function(Enabler, bannerSize) {
  const langKey = 'Super_2019_FI_fi_all_sizes'

  Enabler.setProfileId(10492290)
  var devDynamicContent = {}

  devDynamicContent[langKey] = [{}]
  devDynamicContent[langKey][0]._id = 0
  devDynamicContent[langKey][0].FirstFrame = true
  devDynamicContent[langKey][0].FinalFrame = false
  devDynamicContent[langKey][0].URL = {}
  devDynamicContent[langKey][0].URL.Url = 'https://www.finnair.com/cn/cn'
  devDynamicContent[langKey][0].Campaign_Label = 'Voimassa 4.11. asti'
  devDynamicContent[langKey][0].IconText = ''
  devDynamicContent[langKey][0].PriceColor = '#333'
  devDynamicContent[langKey][0].LabelColor = '#333'
  devDynamicContent[langKey][0].PriceLabel = '\u20AC'
  devDynamicContent[langKey][0].Text1 = 'Black Friday <br/>-hinnat'
  devDynamicContent[langKey][0].Text1Break = 'Black Friday -hinnat'
  devDynamicContent[langKey][0].Text2 = 'Varaa \u00E4kkil\u00E4ht\u00F6 marraskuulle'
  devDynamicContent[langKey][0].Text2CampaignLabel = 'Varaa äkkilähtö marraskuulle 4.11. mennessä osoitteessa finnair.fi'
  devDynamicContent[langKey][0].CTA_Text = 'Varaa nyt'
  devDynamicContent[langKey][0].OnePriceLabel = ''
  devDynamicContent[langKey][0].OneDest = 'Oslo'
  devDynamicContent[langKey][0].OnePrice = 50
  devDynamicContent[langKey][0].Dest1 = 'Tukholma'
  devDynamicContent[langKey][0].Price1 = 86
  devDynamicContent[langKey][0].Dest2 = 'Los Angeles'
  devDynamicContent[langKey][0].Price2 = 549
  devDynamicContent[langKey][0].Dest3 = 'Los Angeles'
  devDynamicContent[langKey][0].Price3 = 188
  devDynamicContent[langKey][0].Dest4 = 'Praha'
  devDynamicContent[langKey][0].Price4 = 150
  devDynamicContent[langKey][0].Dest5 = 'Lontoo'
  devDynamicContent[langKey][0].Price5 = 138
  devDynamicContent[langKey][0].Dest6 = 'Riika'
  devDynamicContent[langKey][0].Price6 = 95
  devDynamicContent[langKey][0].Dest7 = 'Wien'
  devDynamicContent[langKey][0].Price7 = 189
  devDynamicContent[langKey][0].Dest8 = 'Milano'
  devDynamicContent[langKey][0].Price8 = 190
  Enabler.setDevDynamicContent(devDynamicContent)

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
          title: data.texts.Text1Break,
          destination: {
            label : data.texts.OneDest ? data.texts.OneDest : data.destinations[0].label,
            price : data.texts.OneDest ? data.texts.OnePrice : data.destinations[0].price
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
  } else if (bannerSize.width === 160 && bannerSize.height === 600){
    data.slides.push({
      outroTime: 100,
      type: 'DestinationsSlide',
      conf: {
        title: data.texts.Text1Break,
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
        title: data.texts.Text1Break,
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

  if (dynamicContent[langKey][0].FinalFrame === true || bannerSize.width === 728 || bannerSize.width === 980 && bannerSize.height === 120) {
    if (bannerSize.width === 728 || bannerSize.width === 980 && bannerSize.height === 120) {
      data.slides.push({
        type: 'TextSlide',
        conf: {
          title: data.texts.Text2CampaignLabel
        }
      })
    } else {
      data.slides.push({
        type: 'TextSlide',
        conf: {
          title: data.texts.Text2
        }
      })
    }
  }

  return data
}
