    /* global dynamicContent */

import DataUtil from './DataUtil'

export default function(Enabler, bannerSize) {
  const langKey = 'Super_2019_CN_zh_all_sizes'

  Enabler.setProfileId(10495313)
  var devDynamicContent = {}

  devDynamicContent[langKey] = [{}]
  devDynamicContent[langKey][0]._id = 0
  devDynamicContent[langKey][0].FirstFrame = false
  devDynamicContent[langKey][0].FinalFrame = false
  devDynamicContent[langKey][0].URL = {}
  devDynamicContent[langKey][0].URL.Url = 'https://www.finnair.com/cn/cn/flight-offers-europe'
  devDynamicContent[langKey][0].Campaign_Label = '\u673A\u7968\u4F18\u60E0 \u53EA\u523011\u670812\u65E5'
  devDynamicContent[langKey][0].IconText = ''
  devDynamicContent[langKey][0].PriceColor = '#884281'
  devDynamicContent[langKey][0].LabelColor = '#884281'
  devDynamicContent[langKey][0].PriceLabel = '\u5F80\u8FD4'
  devDynamicContent[langKey][0].Text1 = '\u9650\u65F6\u7279\u60E0'
  devDynamicContent[langKey][0].Text2 = ''
  devDynamicContent[langKey][0].CTA_Text = '\u7ACB\u5373\u9884\u8BA2'
  devDynamicContent[langKey][0].OnePriceLabel = ''
  devDynamicContent[langKey][0].OneDest = '\u8D6B\u5C14\u8F9B\u57FA'
  devDynamicContent[langKey][0].OnePrice = 4241
  devDynamicContent[langKey][0].Dest1 = '\u54E5\u672C\u54C8\u6839'
  devDynamicContent[langKey][0].Price1 = 3638
  devDynamicContent[langKey][0].Dest2 = '\u8D6B\u5C14\u8F9B\u57FA'
  devDynamicContent[langKey][0].Price2 = 4611
  devDynamicContent[langKey][0].Dest3 = '\u4F26\u6566'
  devDynamicContent[langKey][0].Price3 = 4403
  devDynamicContent[langKey][0].Dest4 = '\u66FC\u5F7B\u65AF\u7279'
  devDynamicContent[langKey][0].Price4 = 4559
  devDynamicContent[langKey][0].Dest5 = '\u5E03\u62C9\u683C'
  devDynamicContent[langKey][0].Price5 = 3743
  devDynamicContent[langKey][0].Dest6 = '\u96F7\u514B\u96C5\u672A\u514B'
  devDynamicContent[langKey][0].Price6 = 4751
  devDynamicContent[langKey][0].Dest7 = '\u7F57\u9A6C'
  devDynamicContent[langKey][0].Price7 = 3815
  devDynamicContent[langKey][0].Dest8 = '\u67CF\u6797'
  devDynamicContent[langKey][0].Price8 = 3911
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
