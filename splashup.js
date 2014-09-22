 function overide() {

    var anchorElements = document.getElementsByClassName('splashup');
    var alink = [];

     //this checks if you want to direct all anchor links to the system or if you want to specify specific elements
    if(anchorElements.length === 0){

         var anchorElements = document.getElementsByTagName('a');
         
         for (i = 0; i < anchorElements.length; i++) {
            
            var link = anchorElements[i].getAttribute('href');      
            alink.push(link);
            anchorElements[i].addEventListener('click' , (function(i,event) { 
                                
                return function(event) {
                    event.preventDefault(); 
                    var form = makeForm(alink[i]);                    
                    form.submit();                        
                }                   
            })(i),false);
        }
        return false;
    }
    else {
        for (i = 0; i < anchorElements.length; i++) {
            
            var link = anchorElements[i].getAttribute('href');      
            alink.push(link);
            anchorElements[i].addEventListener('click' , (function(i,event) { 
                                
                return function(event) {
                    event.preventDefault(); 
                    var form = makeForm(alink[i]);                    
                    form.submit();                        
                }                   
            })(i),false);
        }
        return false;
    }
}

function makeForm(link) {
    
    var f = document.createElement("form");
    f.setAttribute('method',"post");
    f.setAttribute('action',"http://thegamingunderground.com/splashup.php");
    f.setAttribute('target',"_blank");
    var inp = document.createElement("input"); //input element, text
    inp.setAttribute('type',"hidden");
    inp.setAttribute('name',"link");

    inp.setAttribute('value',link);
    f.appendChild(inp);
    
    document.getElementsByTagName('body')[0].appendChild(f);
    
    return f;
}

function countdown(currentTime,destinationURL) {


    var buttonCount = document.getElementById('count');

    setTimeout(                        
        function() {
            var nextTime = currentTime -1;

            buttonCount.innerHTML = "You Can Skip in " + currentTime + " sec";

            if(currentTime === 0) {

                buttonCount.addEventListener("click", function(){location.href=destinationURL;}, false);
                buttonCount.innerHTML = "Go To My Content";

                return;

            }

            countdown(nextTime,destinationURL);
        }
    ,1000);

}

document.onreadystatechange = function () {
    
    var state = document.readyState;

    if(state === 'complete') {
      console.log('system runnning');
      overide();
    };
};
