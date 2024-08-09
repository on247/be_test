const process = require("process")
// import program argument definition
const {programArgs} = require("./program");

// import subcommands
const cmds = require("./cmds")

// Attempt to parse arguments, displays error and exits if invalid
const parsedArgs=programArgs.parse()

// required argument url is present 
// check what subcommand to execute, fetch or metadata 
let selected_cmd = null

//get option flags
const options = parsedArgs.opts()

if(options.metadata){
    selected_cmd = "get_metadata"
}
else{
    selected_cmd = "fetch_page"
}

// get urls from arguments 
const urls = parsedArgs.args;

// Validate command exists.
if(!selected_cmd || !cmds[selected_cmd]){
    // this should never be triggered
    console.log("Invalid subcommand called. this is a bug. exiting")
    process.exit(1)
}

// execute the selected command with the url as argument
cmds[selected_cmd](urls) 