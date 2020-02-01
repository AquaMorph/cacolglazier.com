#! /bin/bash

imageDir=$1

for filename in ${imageDir}*.jpg; do
    echo Creating thumbnail for $filename
    convert -thumbnail x100 $filename "${filename%.jpg}-thumb.jpg"
done
