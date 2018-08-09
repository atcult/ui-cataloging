#!/bin/bash

# Find entries in translations/en.json that are not used and
# translation ids that are missing from translations/en.json.

# extract the name like ui-marccat or stripes-core
NAME=`sed -n -e '/"repository"/ { s=.*"folio-org\/\(.*\)".*=\1=p;}' package.json`

comm -3 \
   <( cat translations/ui-marccat/en.json | grep : | cut -d: -f1 | tr -d " \"" | sort -u ) \
   <( find . \( -path ./.git -o -path ./node_modules -o -path ./translations -o -path ./package.js \) -prune -o -name '*.js' -print \
      | xargs grep -h -P -o "(?<!perm: |perm=)(\"|')$NAME\\.\\K[a-zA-Z0-9._-]+(?=\\1)" | sort -u ) \
| sed -e 's/^\(\S.*\)/"\1" is in translations\/en.json but not used/; s/^\s\(.*\)/"\1" is missing from translations\/ui-marccat\/en.json/' \
| grep "."

[ "$?" -eq "1" ]  # success if grep didn't find any of our error messag