var thelist = document.getElementById("thelist");
var button = document.getElementById("b");
thelist.count = 7;
killI = function(i) { 
	var child = thelist.children[i];  // at time of call
	return function() {
		thelist.removeChild(child); 
	} 
}
for (var i = 0; i < thelist.children.length; i++) {
	var el = thelist.children[i];
	el.onclick = killI(i);
}
button.onclick = function(){  // this adds an element to list
	thelist.count++;
	var newEl = document.createElement("li")
	newEl.innerHTML = "item " + thelist.count.toString();
	newEl.onclick = function(){thelist.removeChild(newEl);}
	thelist.appendChild(newEl);
}

var newlist = document.createElement("ol");
var one = document.createElement("li");
one.innerHTML = "1";
newlist.last = 1;
newlist.lastlast = 0;
newlist.appendChild(one);
document.body.appendChild(newlist);

var newbutton = document.createElement("button");
newbutton.innerHTML = "Secret button";
document.body.appendChild(newbutton);

newbutton.onclick = function(){  // no fib
	var holdlast = newlist.last;
	newlist.last += newlist.lastlast;
	newlist.lastlast = holdlast;
	var newell = document.createElement("li");  // no relation
	newell.innerHTML = newlist.last.toString();
	newlist.appendChild(newell);
}
