Headshots
=====

## Format

- 250x250px
- jpg
- optimized with ImageOptim

## Converting to B&W

Drag onto the Automator workflow included, then run through ImageOptim again. (OS X only)

## Uploading to S3

1. `cp credentials.json.example credentials.json` and set AWS key & secret
2. `npm install`
3. `grunt s3`
