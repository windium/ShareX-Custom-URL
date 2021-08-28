addEventListener('fetch', event => {
    event.respondWith(runScript(event));
})
let cdnDomain = "example-sharex-uploader.com"
let domain = "cdn.example.com"
let secret = "secretkey"
async function runScript(event) {
    let response;
    if(event.request.method == 'POST') {
        let json = await event.request.json();
        if(event.request.headers.get("key") !== secret) {
          return new Response(
                JSON.stringify({
                    error: "401: Unauthorized"
                }), {
                    status: 401
                }
            )
        } else {
            response = json.url.replace(cdnDomain, domain)
            return new Response(response)
        }
    } else {
        let regex = /[a-zA-Z0-9]+\.(png|jpe?g|gifv?)/
        let status;
        const urlString = new URL(event.request.url).pathname.substring(1);

        if(!urlString) {
            status = 400
            return new Response(
                JSON.stringify({
                    error: "400: Please specify image url"
                }), {
                    status: status
                }
            )
        }

        if(!regex.test(urlString)) {
            status = 404
            return new Response(
                JSON.stringify({
                    error: "404: Not found"
                }), {
                    status: status
                }
            )
        }

        let img = await fetch("https://" + cdnDomain + "/" + urlString)
        let clone = img.clone().body
        response = new Response(clone)
    }
    return response
}
