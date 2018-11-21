#!/bin/bash
echo "...syncing..."
aws s3 sync ./build/ s3://ninjawars-shell/public/ --profile=bitdog --exclude ".git/*" --delete
echo "---------------------------------------------------------------------------------------"
echo ""
echo "Site should be uploaded at: https://shell.ninjawars.net or cloudfront https://d24sifup9e4c35.cloudfront.net "
echo "Done."