 const path = require("path");
 const fs = require("fs");
let fetch_page = async (urls) =>{
    // Command will attempt to fetch next urls if one fails.
    // This is intended behavior
    for(url of urls){
        try {
            // Get url content
            const response = await fetch(url);
            const data = await response.text();
            
            // Parse url and get file name
            const parsedUrl = new URL(url);
            const fileName = `${parsedUrl.hostname}.html` ;
    
            const filePath = path.join( 
                process.cwd(), 
                fileName
            );
            
            // save file 
            fs.writeFileSync(filePath, data);
            console.log(`Saved data: ${fileName}`);
        }
        catch (error) {
            console.error('Error while fetching', url, error);
        }
    }
}
module.exports={
    fetch_page
}