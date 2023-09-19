function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    console.log(string);
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    if( string === string.toLowerCase()) {
        console.log(`this is the lower case ${string}`)
       return "I can\'t hear you!";

       }
    if(string === string.toUpperCase()){
        console.log(string)
        return 'YES INDEED!';

    } 
    if(string === "Let\'s have dinner together!"){
        return "I would love to!";
    }
    else {
        return string;
    }
}