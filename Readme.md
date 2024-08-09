# BE Test
Test application implemented with Node.js/Javascript

## Dependencies
- [Cheerio](cheerio.js.org/) For HTML content parsing
- [Commander.js](https://www.npmjs.com/package/commander) for commandline argument parsing/checking

## Prerequisites
- [Docker](https://www.docker.com/) installed

## Set up
### 1. Clone the Repository
### 2. Build the Docker image
```bash
docker build -t fetch .
```
## Uasge
### Fetch URL content and save
```bash
docker run --rm -v .:/app/sites fetch https://www.google.com
```

### Fetch URL metadata
```bash
docker run --rm fetch --metadata https://www.google.com
```

### Fetch mutiple URLs
```bash
docker run --rm -v .:/app/sites fetch https://www.google.com https://amazon.com
```