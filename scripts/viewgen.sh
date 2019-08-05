#!/bin/bash
PAGE=$1
COMPONENT=$2


cp -R src/views/fight src/views/$PAGE
mv src/views/$PAGE/Fight.jsx src/views/$PAGE/$COMPONENT.jsx
sed -i 's/Fight/'$COMPONENT'/g' src/views/$PAGE/$COMPONENT.jsx
echo "View created in src/views/$PAGE/$COMPONENT.jsx"
echo "Edit in to src/App.js routes when ready"