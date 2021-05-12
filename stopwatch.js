function Stopwatch(){
    let isOn = false;
    let startTime =0;
    let stopTime =0;
    let duartion =0;
    
    

    this.start = function (){
        if(isOn === true) throw new Error('Stopwatch is already on');
        startTime = new Date();
        isOn = true;
    }

    this.stop = function (){
        if(isOn === false) throw new Error('Stopwatch is already off');
        stopTime = new Date();
        isOn = false;
        duartion = (stopTime.getTime() - startTime.getTime())/1000;
    }

    Object.defineProperty(this, 'duration', {
        get : function(){
            return duartion;
        },
        set : function(value) {
            duration = value;
        }
    
    })
}
  

