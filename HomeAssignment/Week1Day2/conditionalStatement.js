function launchBrowser(browserName){
    if(browserName === "chrome"){
        console.log("Launch the chrome broswer")
    }
    else if (browserName === "firefox"){
        console.log("Launch the firefox browser")}
    
}

function runTests(testType){
switch(testType){
    case "smoke": 
    console.log("run smoke testcases");
    break;
    case "sanity": 
    console.log("run sanity testcases")
    break;
    case "regression": 
    console.log("run regression testcases")
    break;

    default:
    console.log("run smoke testcases")
    break
}

}

launchBrowser("chrome")
runTests()