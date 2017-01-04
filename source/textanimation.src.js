var TextAnim = null;

/*
 * animation einer zahl solange bis diese das maximum erreicht
 */
function TextAnimation(){
    this.m_animationDuration = 3000;
    this.m_animationUpdate = 50;
    this.m_lastUpdate = Date.now();      
    this.m_start = null;
    this.m_finalNumber = 50000;
    this.m_startNumber = "000000";
    this.m_increaseNumberBy = 0;
    
    //this.m_slicedNumberLast = new Array();
    //this.m_slicedNumber = new Array();
    
    // Umwandeln in ein Array;
   // this.sliceNumber();
    this.setIncreaseCounter(this.m_startNumber, this.m_finalNumber);
    this.animate();
    this.stop = false;
}

TextAnimation.prototype.animate = function(){
    window.requestAnimationFrame( function(){ if(TextAnim){ TextAnim.nextFrame(TextAnim.m_lastUpdate); }});
};

TextAnimation.prototype.nextFrame = function(timestamp){
    if(!this.m_start) this.m_start = timestamp;
   // console.log(this.m_lastUpdate - this.m_start);
    if(this.m_lastUpdate - this.m_start > this.m_animationUpdate && this.stop == false){
        //this.updateSlicedNumber(1);
                
        this.m_startNumber = (parseInt(this.m_startNumber) + this.m_increaseNumberBy).toString();
        if(parseInt(this.m_startNumber) > this.m_finalNumber){
            this.m_startNumber = this.m_finalNumber.toString();
        }
        
        //console.log(this.addDot(this.m_startNumber));
        $(".number").html(this.addDot(this.m_startNumber));
        //$(".number").html(this.getSlicedNumberToString());
        
        this.m_start = this.m_lastUpdate;
    }
    
    if(this.m_startNumber !== this.m_finalNumber){
        window.requestAnimationFrame(function(){ if(TextAnim){ TextAnim.animate(); } });
    }
    this.m_lastUpdate = Date.now();
};

TextAnimation.prototype.setIncreaseCounter = function(start,end){
    // Berechnen der geschwindigkeit die erhohet wird.
    var difference = end - start;
    var updateinterval = this.m_animationDuration/this.m_animationUpdate;
    this.m_increaseNumberBy = Math.ceil(difference/updateinterval);
};

/*
 * Tausender Trennzeichen hinzufuegen
 */
TextAnimation.prototype.addDot = function(number){
    console.log(number);
    number = number;
    
    if(number.length < this.m_finalNumber.toString().length){
        
        for(var i = number.length; i < this.m_finalNumber.toString().length; i++){
            //number = "0"+number;
        }
    }
    
    if(number.length > 3){
        var mod = number.length % 3;
        var output = (mod > 0 ? (number.substring(0,mod)) : "");
        for(i = 0; i < Math.floor(number.length/3); i++){
            if((mod == 0) && (i == 0)){
                output = output + number.substring(mod + 3 * i, mod + 3 * i + 3);
            }else{
                output = output + "." + number.substring(mod+3*i,mod+3*i+3);
            }
        }
        return (output);
    }else{
        return number;
    }
};

TextAnim = new TextAnimation();