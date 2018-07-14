	  var x2 = 0, mul2=1;
      var xx, yy, pi = Math.PI;
	  var r, angle=pi/2;
	  var mul = 1, posA = (5*pi)/2, negA = -posA;
      var two = new Two({
        fullscreen: true
      }).appendTo(document.body);
	  xx = two.width/2;
	  yy = two.height/4;
	  r  = two.height/6;
	  two.fill = '#aa8888'
      var circle = two.makeCircle(two.width/2, two.height/2+r, 20);
	  //var circle2 = two.makeCircle(0, two.height/2, 20);
	  circle.fill = '#ffffff';
	  //circle2.fill = '#ff8000';
      two.bind('update', function(framecount) {
	    if(angle>0&&angle>=posA)
		{
		 yy = yy + 2*r;
		 mul = -1;
		 angle = -pi/2;
		}
		else if(angle<0&&angle<=negA)
		{
		 yy = yy -2*r;
		 mul = 1;
		 angle = pi/2;
		}
		
		/*
		if(x2>0&&x2>=two.width)
		{
		 mul2 = -1;
		}
		else if(x2<0)
		{
		 mul2 = 1;
		}*/
	    circle.translation.set(xx + (r*Math.cos(angle)),yy + (r*Math.sin(angle)));
	    //circle2.translation.set(x2,two.height/2);
		//x2 = x2+(mul2*8);
		angle = angle + (mul*0.04);
      }).play();
