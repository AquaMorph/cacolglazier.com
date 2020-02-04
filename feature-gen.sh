#! /bin/bash

filename=$1
echo Creating thumbnail for $filename
mv $filename "${filename%.jpg}-bak.jpg"
convert -resize 1500x "${filename%.jpg}-bak.jpg" $filename
