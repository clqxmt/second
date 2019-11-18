function Animate(_ele){
    this.timer=null;
    this.hz=30;
    this.step=function(_css,_times){
        this.time=_times/this.hz;
        if(_css.left){
            this.hs=(Number(_css.left.match(/-*\d+/g)[0])-_ele.offsetLeft)/this.time;
            console.log(_css.left.match(/-*\d+/g)[0]);
        }
        if(_css.top){
            this.vs=(Number(_css.top.match(/-*\d+/g)[0])-_ele.offsetTop)/this.time;
        }
    }
    this.move=function(_css,_times,_fx){
        console.log("aa"+_css.left);
        var _me=this;
        var _conter=0;
        this.step(_css,_times);
        this.timer=setInterval(function(){
            if(_css.left){
                _ele.style.left=_ele.offsetLeft+_me.hs+"px";

            }
            if(_css.top){
                _ele.style.top=_ele.offsetTop+_me.vs+"px";
            }
            if(_conter++ >= _me.time){
                if(_css.left){
                    _ele.style.left=_css.left;
                }
                if(_css.top){
                    _ele.style.top=_css.top;
                }
                if(typeof _fx==="function"){
                    _fx();
                }
                clearInterval(_me.timer);
            }
        },_me.hz);
    }
    this.delay=function(_fx,_ms){
        var _me=this;
        this.timer=setTimeout(function(){
            clearTimeout(_me.timer);
            _fx();
        },_ms);
    }
    this.clear=function(){
        
        clearInterval(this.timer);
        // alert(1);
    }
}

