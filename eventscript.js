//console.log("connected");
function change(a)
{
    a.innerHTML="Clicked";
}

var num_butb=0;
var num_butc=0;
var b=document.querySelector('button');
b.addEventListener('click',function()
{
	num_butb++;
	if(num_butb==1)
	{
	console.log("button is clicked");
	b.innerHTML="<strong>Clicked</strong>";
    }
    else
    {
        console.log("Sorry! You can click only once");
    	console.log("\n");
    }
}
	);
b.addEventListener('mouseover',function()
    {
         this.style.color="red";
    }
);
var c=document.getElementById('button_2');
c.addEventListener('click',click);
function click()
{
	num_butc++;
	if(num_butc==1)
	{
	console.log("button is clicked");
	this.innerHTML="<strong>Clicked</strong>";
    }
    else
    {
        console.log("Sorry! You can click only once");
    	console.log("\n");
    }
}
var d=document.querySelectorAll('li');
for (var i=0;i<d.length;i++)
{
	//console.log("in the loop");
	d[i].addEventListener('click',function()
		    {
              //  console.log("pink");
                this.style.color="pink";
		    }
		);
}
//console.log("out of loop");
/*function button(a)
{
	a.innerHTML="<strong>Clicked</strong>";
	console.log("Button is clicked");
}*/