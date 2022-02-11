# docker-nodejs-info

[![Project Maintenance](https://img.shields.io/maintenance/yes/2022.svg)](https://github.com/pedrolamas/docker-nodejs-info 'GitHub Repository')
[![License](https://img.shields.io/github/license/pedrolamas/docker-nodejs-info.svg)](https://github.com/pedrolamas/docker-nodejs-info/blob/master/LICENSE 'License')

[![CI](https://github.com/pedrolamas/docker-nodejs-info/workflows/CI/badge.svg)](https://github.com/pedrolamas/docker-nodejs-info/actions 'Build Status')

[![Twitter Follow](https://img.shields.io/twitter/follow/pedrolamas?style=social)](https://twitter.com/pedrolamas '@pedrolamas')

Simple Docker image running a Node.js server with [nodejs-info](https://github.com/chrisveness/nodejs-info#readme)

## Usage

Create and run the new container as you would normally do:

```sh
docker run -d \
  --name nodejs-info \
  --net=host \
  ei99070/docker-nodejs-info
```

By default the server runs on port 3000, but this can be changed by specifying the `PORT` environment variable.

```sh
docker run -d \
  --name nodejs-info \
  --net=host \
  -e PORT=<alternative port> \
  ei99070/docker-nodejs-info
```

## License

MIT
