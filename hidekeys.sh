#!/bin/bash

tmpfilename=$(mktemp $(basename $0).XXXXXX)

while read tok
do
	for dir in src android ios
	do
	    find "$dir" -type f -exec echo "
		if grep -l '$tok' {};
		then
			sed -e 's/$tok/[GITHUB TOKEN]/g' {} > '$tmpfilename' \
			&& \
			mv '$tmpfilename' {};
		fi" \;
	done
done < token.env | /bin/bash

if [ -e "$tmpfilename" ]
then
	rm -f "$tmpfilename"
fi
