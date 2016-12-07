Headshots
=====

A single source of truth for DOBT headshots. Uploaded to S3 so that they can be hotlinked from various web properties.

## Installation

1. `npm install`
2. `brew install webp`

## Adding or updating a headshot

1. Add a 250x250px image to `headshots/name.jpg`
2. Draw the image onto the `convert_to_bw` Automator workflow to create a grayscale version
3. Run `grunt process` to minify jpgs and create webps

## Uploading to S3

1. `cp credentials.json.example credentials.json` and set AWS key & secret
2. `grunt s3`
