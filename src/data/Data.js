/* global dynamicContent */

export default function(Enabler, bannerSize, profileId, lang) {
  const data = {
    destinations: [],
    slides: [],
    texts: {}
  }

  Enabler.setProfileId(profileId)

  var devDynamicContent = {}

  var langKey = `Super_2019_${lang}_all_sizes`

  devDynamicContent[langKey] = [{}]
  devDynamicContent[langKey][0]._id = 0
  devDynamicContent[langKey][0].FirstFrame = true
  devDynamicContent[langKey][0].FinalFrame = false
  devDynamicContent[langKey][0].URL = {}
  devDynamicContent[langKey][0].URL.Url = 'https://www.finnair.com/cn/cn'
  devDynamicContent[langKey][0].Campaign_Label = 'Voimassa 4.11. asti'
  devDynamicContent[langKey][0].Campaign_Label_short = ''
  devDynamicContent[langKey][0].PriceColor = '#884281'
  devDynamicContent[langKey][0].LabelColor = '#884281'
  devDynamicContent[langKey][0].PriceLabel = '\u20AC'
  devDynamicContent[langKey][0].Text1 = 'VIIKONLOPPUTARJOUKSET'
  devDynamicContent[langKey][0].Text1Break = 'VIIKONLOPPU-<br>TARJOUKSET'
  devDynamicContent[langKey][0].Text2 = 'Varaa \u00E4kkil\u00E4ht\u00F6 marraskuulle'
  devDynamicContent[langKey][0].Text2CampaignLabel = 'Varaa äkkilähtö marraskuulle 4.11. mennessä osoitteessa finnair.fi'
  devDynamicContent[langKey][0].CTA_Text = 'Varaa nyt'
  devDynamicContent[langKey][0].OnePriceLabel = ''
  devDynamicContent[langKey][0].OneDest = 'Tukholma'
  devDynamicContent[langKey][0].OnePrice = 86
  devDynamicContent[langKey][0].Dest1 = 'Tukholma'
  devDynamicContent[langKey][0].Price1 = 86
  devDynamicContent[langKey][0].Dest2 = 'Bangkok'
  devDynamicContent[langKey][0].Price2 = 549
  devDynamicContent[langKey][0].Dest3 = 'Tromssa'
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

  data.texts = {
    FirstFrame: dynamicContent[langKey][0].FirstFrame,
    URL: dynamicContent[langKey][0].URL,
    Campaign_Label: dynamicContent[langKey][0].Campaign_Label,
    Campaign_Label_short: dynamicContent[langKey][0].Campaign_Label_short,
    PriceColor: dynamicContent[langKey][0].PriceColor,
    LabelColor: dynamicContent[langKey][0].LabelColor,
    PriceLabel: dynamicContent[langKey][0].PriceLabel,
    Text1: dynamicContent[langKey][0].Text1,
    Text1Break: dynamicContent[langKey][0].Text1Break,
    Text2: dynamicContent[langKey][0].Text2,
    Text2CampaignLabel: dynamicContent[langKey][0].Text2CampaignLabel,
    CTA_Text: dynamicContent[langKey][0].CTA_Text,
    OnePriceLabel: dynamicContent[langKey][0].OnePriceLabel,
    OneDest: dynamicContent[langKey][0].OneDest,
    OnePrice: dynamicContent[langKey][0].OnePrice,
  }

  data.destinations.push({
    label: dynamicContent[langKey][0].Dest1,
    price: dynamicContent[langKey][0].Price1
  })

  data.destinations.push({
    label: dynamicContent[langKey][0].Dest2,
    price: dynamicContent[langKey][0].Price2
  })

  data.destinations.push({
    label: dynamicContent[langKey][0].Dest3,
    price: dynamicContent[langKey][0].Price3
  })

  data.destinations.push({
    label: dynamicContent[langKey][0].Dest4,
    price: dynamicContent[langKey][0].Price4
  })

  data.destinations.push({
    label: dynamicContent[langKey][0].Dest6,
    price: dynamicContent[langKey][0].Price6
  })

  data.destinations.push({
    label: dynamicContent[langKey][0].Dest5,
    price: dynamicContent[langKey][0].Price5
  })

  data.destinations.push({
    label: dynamicContent[langKey][0].Dest7,
    price: dynamicContent[langKey][0].Price7
  })

  data.destinations.push({
    label: dynamicContent[langKey][0].Dest8,
    price: dynamicContent[langKey][0].Price8
  })

  return data
}
