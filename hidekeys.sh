#!/bin/bash

while read tok
do
    find src -type f -exec echo "
	if grep -l '$tok' {};
	then
		sed -e 's/$tok/[GITHUB TOKEN]/g' {} > x \
		&& \
		mv x {};
	fi" \;
done < token.env | /bin/bash
