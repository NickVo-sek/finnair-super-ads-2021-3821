#!/usr/bin/env bash

# Run build with "bash build XX_xx (country code)"

if [ $1 == 'FI_fi' ]
then
  LANGUAGE=$1
  BANNERS=(
    "300x250"
    "300x300"
    "160x600"
    "300x600"
    "468x400"
    "728x90"
    "980x120"
    "980x400"
)
elif [ $1 == 'EE_et' ] 
then
  LANGUAGE=$1
  BANNERS=(
    "980x400"
    "300x600"
    "160x600"
    "320x320"
    "728x90"
    "300x250"
)
elif [ $1 == 'DE_de' ] 
then
  LANGUAGE=$1
  BANNERS=(
    "980x400"
    "300x600"
    "160x600"
    "320x320"
    "728x90"
    "300x250"
)
elif [ $1 == 'UK_en' ] 
then
LANGUAGE=$1
BANNERS=(
  "980x400"
  "300x600"
  "320x320"
  "300x250"
  "160x600"
  "728x90"
)
elif [ $1 == 'NO_no' ] 
then
LANGUAGE=$1
BANNERS=(
  "980x400"
  "300x600"
  "320x320"
  "300x250"
  "160x600"
  "728x90"
)
elif [ $1 == 'SE_sv' ] 
then
LANGUAGE=$1
BANNERS=(
  "980x400"
  "300x600"
  "320x320"
  "300x250"
  "160x600"
  "728x90"
)
elif [ $1 == 'DK_da' ] 
then
LANGUAGE=$1
BANNERS=(
  "980x400"
  "300x600"
  "320x320"
  "300x250"
  "160x600"
  "728x90"
)
elif [ $1 == 'HK_en' ] 
then
  LANGUAGE=$1
  BANNERS=(
    "300x600"
    "300x250"
    "160x600"
    "728x90"
  )
elif [ $1 == 'SG_en' ] 
then
  LANGUAGE=$1
  BANNERS=(
    "160x600"
    "300x250"
    "300x600"
    "728x90"
  )
elif [ $1 == 'JP_ja' ] 
then
  LANGUAGE=$1
  BANNERS=(
    "160x600"
    "300x250"
    "300x600"
    "728x90"
  )
else
  LANGUAGE="FI_fi"
  BANNERS=(
    "728x90"
  )
fi


# Remove old builds.
rm -rf dist
mkdir dist

IFRAMESMARKUP=''
IFRAMESMARKUP+=$(cat ./src/preview-template-partials/iframetemplatehead.html)
IFS='x'

# Loop through the banner list
for banner in "${BANNERS[@]}"; do
  echo "Building $banner banner..."
  read -ra SIZE <<<"$banner"
  WIDTH=${SIZE[0]}
  HEIGHT=${SIZE[1]}
  IFRAMESMARKUP+="<iframe src=\"$banner/index.html\" width=\"$WIDTH\" height=\"$HEIGHT\"></iframe>"

  # Command.
  LANGUAGE=$LANGUAGE W="$WIDTH" H="$HEIGHT" npm run build
done

echo "$IFRAMESMARKUP" >>dist/"$LANGUAGE"/index.html
IFRAMESMARKUP+=$(cat ./src/preview-template-partials/iframetemplatefooter.html)
