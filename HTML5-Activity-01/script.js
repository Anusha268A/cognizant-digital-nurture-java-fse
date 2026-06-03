
        console.log("Portal Loaded");

        function validatePhone(){
            let phone=document.getElementById("phone").value;

            if(!/^\d{10}$/.test(phone)){
    alert("Enter a valid 10-digit phone number");
}
        }

        function showFee(){
            let event=document.getElementById("eventType").value;
            let fee="";

            if(event==="Music") fee="Fee: ₹200";
            else if(event==="Sports") fee="Fee: ₹150";
            else if(event==="Tech") fee="Fee: ₹300";

            document.getElementById("fee").innerHTML=fee;
        }

        function submitForm(){
            document.getElementById("confirmation").innerHTML=
            "Registration Successful!";
        }

        function enlargeImage(img){
            img.style.width="300px";
            img.style.height="220px";
        }

        function countCharacters(){
            let count=document.getElementById("feedback").value.length;
            document.getElementById("count").innerHTML=count;
        }

        function videoReady(){
            document.getElementById("videoMessage").innerHTML=
            "Video ready to play";
        }

        function savePreference(){
            let selected=document.getElementById("eventType").value;
            localStorage.setItem("preferredEvent",selected);
        }

        window.onload=function(){
            let saved=localStorage.getItem("preferredEvent");

            if(saved){
                document.getElementById("eventType").value=saved;
                showFee();
            }
        }

        function clearPreferences(){
            localStorage.clear();
            sessionStorage.clear();
            alert("Preferences Cleared");
        }

        function findLocation(){

            if(navigator.geolocation){

                navigator.geolocation.getCurrentPosition(
                    function(position){

                        document.getElementById("location").innerHTML=
                        "Latitude: "
                        + position.coords.latitude +
                        "<br>Longitude: "
                        + position.coords.longitude;

                    },

                    function(error){

                        if(error.code===1)
                            alert("Permission Denied");

                        else if(error.code===3)
                            alert("Request Timed Out");
                    },

                    {
                        enableHighAccuracy:true,
                        timeout:5000
                    }
                );
            }
            else{
    alert("Geolocation is not supported by this browser.");
}
        }

        window.onbeforeunload=function(){
            return "You have unsaved changes.";
        };
        function enlargeImage(img){
    if(img.style.width==="300px"){
        img.style.width="200px";
        img.style.height="150px";
    }else{
        img.style.width="300px";
        img.style.height="220px";
    }
}