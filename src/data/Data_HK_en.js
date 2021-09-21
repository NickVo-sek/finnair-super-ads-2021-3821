/* global dynamicContent */

import DataUtil from './DataUtil'

export default function(Enabler, bannerSize) {
  const langKey = 'Super_2019_HK_en_all_sizes'

  Enabler.setProfileId(10492602)
  var devDynamicContent = {}

  devDynamicContent.Super_2019_HK_en_all_sizes = [{}]
  devDynamicContent.Super_2019_HK_en_all_sizes[0]._id = 0
  devDynamicContent.Super_2019_HK_en_all_sizes[0].FirstFrame = true
  devDynamicContent.Super_2019_HK_en_all_sizes[0].FinalFrame = false
  devDynamicContent.Super_2019_HK_en_all_sizes[0].URL = {}
  devDynamicContent.Super_2019_HK_en_all_sizes[0].URL.Url = 'https://www.finnair.com/cn/cn'
  devDynamicContent.Super_2019_HK_en_all_sizes[0].Campaign_Label = 'Offers end 12 November'
  devDynamicContent.Super_2019_HK_en_all_sizes[0].IconText = ''
  devDynamicContent.Super_2019_HK_en_all_sizes[0].PriceColor = '#884281'
  devDynamicContent.Super_2019_HK_en_all_sizes[0].LabelColor = '#884281'
  devDynamicContent.Super_2019_HK_en_all_sizes[0].PriceLabel = 'HKD'
  devDynamicContent.Super_2019_HK_en_all_sizes[0].Text1 = "<span class='urgency-header'>last chance for Super offers</span>"
  devDynamicContent.Super_2019_HK_en_all_sizes[0].Text2 = ''
  devDynamicContent.Super_2019_HK_en_all_sizes[0].CTA_Text = 'Book now'
  devDynamicContent.Super_2019_HK_en_all_sizes[0].OnePriceLabel = ''
  devDynamicContent.Super_2019_HK_en_all_sizes[0].OneDest = 'Zurich'
  devDynamicContent.Super_2019_HK_en_all_sizes[0].OnePrice = 4703
  devDynamicContent.Super_2019_HK_en_all_sizes[0].Dest1 = 'Paris'
  devDynamicContent.Super_2019_HK_en_all_sizes[0].Price1 = 4194
  devDynamicContent.Super_2019_HK_en_all_sizes[0].Dest2 = 'London'
  devDynamicContent.Super_2019_HK_en_all_sizes[0].Price2 = 5205
  devDynamicContent.Super_2019_HK_en_all_sizes[0].Dest3 = 'Oslo'
  devDynamicContent.Super_2019_HK_en_all_sizes[0].Price3 = 4844
  devDynamicContent.Super_2019_HK_en_all_sizes[0].Dest4 = 'Helsinki'
  devDynamicContent.Super_2019_HK_en_all_sizes[0].Price4 = 4379
  devDynamicContent.Super_2019_HK_en_all_sizes[0].Dest5 = 'Prague'
  devDynamicContent.Super_2019_HK_en_all_sizes[0].Price5 = 4619
  devDynamicContent.Super_2019_HK_en_all_sizes[0].Dest6 = 'Copenhagen'
  devDynamicContent.Super_2019_HK_en_all_sizes[0].Price6 = 4314
  devDynamicContent.Super_2019_HK_en_all_sizes[0].Dest7 = 'Berlin'
  devDynamicContent.Super_2019_HK_en_all_sizes[0].Price7 = 4873
  devDynamicContent.Super_2019_HK_en_all_sizes[0].Dest8 = 'Zurich'
  devDynamicContent.Super_2019_HK_en_all_sizes[0].Price8 = '4703'
  Enabler.setDevDynamicContent(devDynamicContent)

  const data = DataUtil(dynamicContent, langKey)

  // Add slides
  data.slides = []

  if ((bannerSize.width === 300 && bannerSize.height === 300) || bannerSize.height === 250 || bannerSize.width === 468) {
    data.slides.push({
      type: 'DestinationsSlide',
      conf: {
        title: data.texts.Text1,
        destinations: [
        data.destinations[0],
        // Only one dest for HK
        // data.destinations[1],
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
        // data.destinations[1],
        ],
        destinations: [
        data.destinations[1],
        // data.destinations[2],
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
        // data.destinations[1],
        ],
        destinations: [
        data.destinations[2],
        // data.destinations[2],
        ],
        color: data.texts.PriceColor
      }
    })
  } else if(bannerSize.width === 980 && bannerSize.height === 120 || bannerSize.width === 728){
    // Intro frame
    if(dynamicContent.Super_2019_HK_en_all_sizes[0].FirstFrame === true) {
      data.slides.push({
        type: 'SingleDestinationSlide',
        conf: {
          title: data.texts.Text1,
          destination: data.destinations[1],
          color: data.texts.PriceColor
        }
      })
    }

    data.slides.push({
      type: 'DestinationsSlide',
      conf: {
        destinations: [
        data.destinations[0],
        data.destinations[1],
        // data.destinations[2],
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
        // data.destinations[2],
        ],
        destinations: [
        data.destinations[2],
        data.destinations[3],
        // data.destinations[5],
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
  } else if(bannerSize.width === 980 && bannerSize.height === 400){
      // Intro frame
      if(dynamicContent.Super_2019_HK_en_all_sizes[0].FirstFrame === true) {
        data.slides.push({
          type: 'SingleDestinationSlide',
          conf: {
            title: data.texts.Text1,
            destination: data.destinations[0],
            color: data.texts.PriceColor
          }
        })
      }

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
  }else {
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
  }

  // Outro frame

  // data.slides.push({
  //   type: 'TextSlide',
  //   conf: {
  //     title: data.texts.Text1
  //   }
  // })


  return data
}
