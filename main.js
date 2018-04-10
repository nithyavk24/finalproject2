// front view
    function front_translate(value) {
        document.getElementById("fronttranslate").value=value;
        var x = value;
        var y="translate("+x+"px,0px)";
        document.getElementById("front").style.transform = y;
	}
    
    function front_scale(value) {
        document.getElementById("frontscale").value=value;
        var x = value;
        var y="scale("+x+","+x+")";
        document.getElementById("front").style.transform = y;
    }

	function front_rotate(value) {
        var i=value+" deg";
        document.getElementById("frontrotate").value=i;
        var x = value;
        var y="rotate("+x+"deg)";
        document.getElementById("front").style.transform = y;
	}
	
	function front_shear(value) {
        var i=value+" deg";
        document.getElementById("frontshear").value=i;
        var x = value;
        var y="skewX("+x+"deg)";
        document.getElementById("front").style.transform = y;
    }
    

	// side view
	function side_translate(value) {
        document.getElementById("sidetranslate").value=value;
        var x = value;
        var y="translate("+x+"px,0px)";
        document.getElementById("side").style.transform = y;
	}
    
    function side_scale(value) {
        document.getElementById("sidescale").value=value;
        var x = value;
        var y="scale("+x+","+x+")";
        document.getElementById("side").style.transform = y;
	}

	function side_rotate(value) {
        var i=value+" deg";
        document.getElementById("siderotate").value=i;
        var x = value;
        var y="rotate("+x+"deg)";
        document.getElementById("side").style.transform = y;
	}
		
	function side_shear(value) {
        var i=value+" deg";
        document.getElementById("sideshear").value=i;
        var x = value;
        var y="skewX("+x+"deg)";
        document.getElementById("side").style.transform = y;
	}
	
	// top view
	function top_translate(value) {
        document.getElementById("toptranslate").value=value;
        var x = value;
        var y="translate("+x+"px,0px)";
        document.getElementById("top").style.transform = y;
	}
    
    function top_scale(value) {
        document.getElementById("topscale").value=value;
        var x = value;
        var y="scale("+x+","+x+")";
        document.getElementById("top").style.transform = y;
    }
    
	function top_rotate(value) {
        var i=value+" deg";
        document.getElementById("toprotate").value=i;
        var x = value;
        var y="rotate("+x+"deg)";
        document.getElementById("top").style.transform = y;
	}
	
	function top_shear(value) {
        var i=value+" deg";
        document.getElementById("topshear").value=i;
        var x = value;
        var y="skewX("+x+"deg)";
        document.getElementById("top").style.transform = y;
	}