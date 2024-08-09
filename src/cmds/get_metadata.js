// use cheerio for DOM parsing.
const cheerio=require("cheerio");
// get the count a specific type of tag is present
let get_tag_count =(parsedPage,tag)=>{
    let items=parsedPage(tag);
    if(items){
        return items.length;
    }
    return 0;
}
// returns a function to query page DOM by selector after parsing 
let parse_page=(content)=>{
    return cheerio.load(content);
}
// main command function
let get_metadata = async (urls) =>{
    for(url of urls){
        try {
            // Save current time before fetching;
            let fetchDate = new Date();
            // parse url to get site name (host)

            let site = new URL(url).hostname;
            // Get url content
            const response = await fetch(url);
            const data = await response.text();
            
            // parse content
            let parsedPage=parse_page(data)

            // query page information
            let links = get_tag_count(parsedPage,"a");
            let images = get_tag_count(parsedPage,"img")
            
            // print information
            console.log("site:",site)
            console.log("num_links:",links)
            console.log("num_images:",images)
            console.log("last_fetch:",fetchDate.toUTCString())
            console.log("")
        }
        catch (error) {
            console.error('Error while fetching', url, error);
        }
    }
}
module.exports={
    get_metadata
}