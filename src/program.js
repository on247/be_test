const { program } = require('commander');

let programArgs = program.name('fetch')
  .description('A utility for fetching a page from the web')
  .option('--metadata',"Fetch metadata for page")
  .argument('<url>',"Url to fetch")

module.exports = {
    programArgs
}