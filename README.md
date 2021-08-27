# ShareX Custom URL
Cloudflare Workers script that allows you to upload files to ShareX Custom Uploaders and use with your own domain.

- You need to use Cloudflare as a DNS service to connect your worker to domain.

## Installation

Clone this repo using git `git clone https://github.com/Windium/ShareX-Custom-URL.git`

### Cloudflare Worker
Create worker account and worker. [guide](https://developers.cloudflare.com/workers/quickstart)

Open `worker-script.js` on any text exitor, change `cdnDomain` to custom uploader url and `domain` to your domain.

Copy script then on Cloudflare Workers page > Quick edit > Paste the content of `worker-script.js` > Done

### ShareX Config
  - Open ShareX > Destinations > Custom uploader settings > Import > From file > Select `custom-domain.sxcu` file > Open
  - On custom domain settings change request url to your domain.
  - Go back to ShareX menu > Destinations > URL Shortener > Select Custom URL Shortener
  - After capture tasks must be selected as `Upload image to host`.
  - After upload tasks select `Shorten URL` and `Copy URL to clipboard`.

##### Windium (https://windium.xyz)
