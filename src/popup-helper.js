const popup = {
    //Display the pop-up with text and random background-color/border
    showText: (text) => {
        const random = Math.floor(Math.random() * Math.floor(3));
        if(random === 0){       
            $("#popupbox").show();
            $("#popuptext").html(text);
            $("#popupbox").css({ "background-color": "rgba(210, 120, 241, 0.7)", "border": "3px solid #3ed1ef" });
            $("#popuptext").css({ "opacity": 0, "margin-left": "50px" });
            
            const textWidth = $("#popuptext").width();
            $("#popupbox").width(1);
            $("#popupbox").animate({ width: textWidth + 30 }, 700);
            $("#popuptext").animate({ "opacity": 1, "margin-left": "15px" }, 900);
        }
        else if(random === 1){
            $("#popupbox").show();
            $("#popuptext").html(text);
            $("#popupbox").css({ "background-color": "rgba(161, 105, 243, 0.7)" , "border": "3px solid #3ed1ef"});
            $("#popuptext").css({ "opacity": 0, "margin-left": "50px" });

            const textWidth = $("#popuptext").width();
            $("#popupbox").width(1);
            $("#popupbox").animate({ width: textWidth + 30 }, 700);
            $("#popuptext").animate({ "opacity": 1, "margin-left": "15px" }, 900);
        }
        else if(random === 2){
            $("#popupbox").show();
            $("#popuptext").html(text);
            $("#popupbox").css({ "background-color": "rgba(62, 209, 239, 0.7)", "border": "3px solid #A169F3"});
            $("#popuptext").css({ "opacity": 0, "margin-left": "50px" });

            const textWidth = $("#popuptext").width();
            $("#popupbox").width(1);
            $("#popupbox").animate({ width: textWidth + 30 }, 700);
            $("#popuptext").animate({ "opacity": 1, "margin-left": "15px" }, 900);
        }
    },
 
    //Formate the text with emotes
    formatEmotes: (message, emotes, makeUpperCase) => {
        //parse the message for html and remove any tags
        if (makeUpperCase) {
            message = message.toUpperCase();
        }

        let newMessage = $($.parseHTML(message)).text().split("");

        //replace any twitch emotes in the message with img tags for those emotes
        if (twitchEmotes) {
            for (let emoteIndex in emotes) {
                const emote = emotes[emoteIndex];
                for (let charIndexes in emote) {
                    let emoteIndexes = emote[charIndexes];
                    if (typeof emoteIndexes == "string") {
                        emoteIndexes = emoteIndexes.split("-");
                        emoteIndexes = [parseInt(emoteIndexes[0]), parseInt(emoteIndexes[1])];
                        for (let i = emoteIndexes[0]; i <= emoteIndexes[1]; ++i) {
                            newMessage[i] = "";
                        }
                        newMessage[emoteIndexes[0]] = `<img class="emoticon" src="https://static-cdn.jtvnw.net/emoticons/v1/${emoteIndex}/3.0"/>`;
                    }
                }
            }
        }

        return newMessage.join("");
    }
}