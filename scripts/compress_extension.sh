#! /bin/bash

DIST="dist"

if [ -d "$DIST" ]; then
  echo "Copying extension resources into dist folder..."
  cp -RL icon dist
  cp manifest.json dist

  echo "Compressing extension..."
  cd dist
  zip -r -X make-chapo-great-again.zip ./
  cd ..
  mv dist/make-chapo-great-again.zip .
  echo "Done."
fi
