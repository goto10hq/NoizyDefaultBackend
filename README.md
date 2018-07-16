# Default backend for nginx-ingress on Kubernetes

This is a custom default backend for [nginx-ingress](https://github.com/kubernetes/ingress-nginx). The purpose of this as stated in their readme:

> The default backend is a service which handles all url paths and hosts that the nginx controller doesn't understand (i.e., all requests that are not mapped with an Ingress).
>
> Basically a default backend exposes two URLs:
>
> - `/` that returns 404
> - `/healthz` that returns 200

![404-example](noizy.gif)

## Usage on Kubernetes

The easiest way to use this is by using the [`nginx-ingress`](https://github.com/kubernetes/charts/tree/master/stable/nginx-ingress) Helm chart. When you deploy the chart, set the image values for the default backend Docker image to `goto10hq/noizy-default-backend:1.1.0`

```
helm install \
  --name nginx-ingress \
  --set defaultBackend.image.repository=goto10hq/noizy-default-backend,defaultBackend.image.tag=1.1.0 \  
  stable/nginx-ingress
```

Then any time someone goes to a hostname or url that Nginx doesn't recognize, you will see the above 404 page.

## Build

If you'd like to customize this project and create your own build, edit the code and...

```sh
docker build -t noizy-default-backend .
```

## Run

To test locally:

```sh
docker run -d -p 8080:8080 noizy-default-backend
```

View at <http://localhost:8080>

## Acknowledgement

[default-backend](https://github.com/jshimko/default-backend) by [jshimko](https://github.com/jshimko)

## License

[MIT](./LICENSE.md)
