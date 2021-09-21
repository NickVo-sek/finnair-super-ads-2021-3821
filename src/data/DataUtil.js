export default function(dynamicContent, langKey) {
  const data = {}
  data.texts = {
    FirstFrame: dynamicContent[langKey][0].FirstFrame,
    URL: dynamicContent[langKey][0].URL,
    Campaign_Label: dynamicContent[langKey][0].Campaign_Label,
    Campaign_Label_short: dynamicContent[langKey][0].Campaign_Label_short,
    IconText: dynamicContent[langKey][0].IconText,
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

  data.destinations = []
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
    label: dynamicContent[langKey][0].Dest5,
    price: dynamicContent[langKey][0].Price5
  })

  data.destinations.push({
    label: dynamicContent[langKey][0].Dest6,
    price: dynamicContent[langKey][0].Price6
  })

  data.destinations.push({
    label: dynamicContent[langKey][0].Dest7,
    price: dynamicContent[langKey][0].Price7
  })

  data.destinations.push({
    label: dynamicContent[langKey][0].Dest8,
    price: dynamicContent[langKey][0].Price8
  })
  
  let maxVal = -1
  data.destinations.forEach((destination) => {
    maxVal = Math.max(maxVal, destination.price)
  })
  maxVal = maxVal + ''
  const numbers = maxVal.split('').length
  data.longestNumber = numbers
  console.log(data.destinations)
  return data
}
