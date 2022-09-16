//fxn();
var n1=5;
var n2=6;
console.log("connected with external file");
var a=["apple","banana","mango","orange"];
a.forEach(item => console.log(item)); 
for (var item in a)
console.log(item);
for (var item of a)
{
	console.log(item);
}
console.log(10**5);
var num=8;
console.log(n2+n1==13);
console.log(2=="2");
console.log(2==="2");
console.log(2!="2");
console.log(2!=="2");

//console.log(numb);
//var numb=10;
var xyz;
console.log(xyz);

let y=10;
 y=20;

 const c=15;
 //c=15;

var d=15;
console.log(d);
 var cdef=function asd()
 {
 	a=10;
 	b=9;
 	var d=20;
 	{
 		var d=25;
 		console.log(d);
 	}
 	console.log(d);
 }

 cdef();
 console.log(d);

 var is=true;
// is=null;
 console.log(is);
 console.log(is);
 console.log(typeof(is));
 console.log(typeof(d));
 console.log(typeof("apple"));
 console.log(typeof(cdef()));
 console.log(typeof(asd));
 console.log(typeof(a));
 console.log(typeof(c)); 
 console.log(typeof(p));
 console.log(typeof(true));
 console.log(is);
 console.log(typeof(is));
 var pou=5;
 //pou=null;
 console.log(pou);
 console.log(typeof(pou));
 pou=undefined;
 console.log(pou);
 console.log(typeof(pou));
 pou="hkyhygiij";
 console.log(typeof(pou));
 console.log(""==true);
 console.log(0==false);
 var pg='AMU Is better than MIT';
 console.log(pg);
 console.log(typeof(pg));
 var TIMES=1000;
 var e='AMU IS +${TIMES}  ';
 console.log( e);
var s=NaN;
console.log(s);
console.log(typeof(s));

let sym=Symbol('foo');
let sym1=Symbol('foo');
let sym2=Symbol('foo');
console.log(sym==sym1);

var fruits=
{
	'apple':5,
	'orange':'orange',
	'banana':'yellow',
	eat()
	{
		console.log("fruit is finished");
	}
};
console.log(fruits['apple']);
var obj=fruits['apple'];
console.log(typeof(obj));
fruits.eat();

/*class fruit=
{
        'color':undefined,
        'age':undefined,
        'rotten':false,

	fruit()
		{
	    'color':undefined,
        'age':undefined,
        'rotten':false,

		}

	showfru()
	{
       console.log(this['color']);
       console.log(this['age']);
       console.log(this['rotten']);
	}
};

fruit mango=new fruit();
mango["color"]='yellow';
mango["age"]=2;
mango["rotten"]=false;
mango.showfru();*/

Object.is(3,3);

var arr=[3,true,,"Saad",23543];
console.log(typeof(arr[1]));
console.log(typeof(arr[2]));
console.log(typeof(arr[3]));


function arrdisplay()
{
	console.log("\n");
	console.log("\n");
	arr.forEach(item => console.log(item));
}

arrdisplay();

arr.push(true);
arr.push("AMU IS BETTER THAN mit");
arr.push(true);
arrdisplay();

arr.pop();
arrdisplay();
arr.unshift(1000);
arr.unshift(56);
arrdisplay();
arr.shift();
arrdisplay();
arr.splice(0,2,"AMU IS 1000 TIMES BETTER THAN mit");
arrdisplay();
/*arr.splice(3,4,);
arrdisplay();*/
console.log("\n");
console.log("\n");
for (var item in arr)
console.log(item);
console.log("\n");
console.log("\n");
for (var item of arr)
{
	console.log(item);
}

var dan=0;

var assignment=function()
{
	dan=15;
}

/*(function(xab,xac)
    {
	    console.log("answer is"+(xab+xac));
    }
)(12,18);*/

let animal=
{
	name:'animal',
	eat(n,m)
	{
        console.log(this.name+" is eating " + n + " "+m+"s");
	}
};

let human=
{
    name:'Nesar',
};
//animal.eat(5,chese)
//animal.eat.apply(human,[5,"gobar cake"]);

let humaneat=animal.eat.bind(human);
humaneat(5,"gobar cakes");

var printer=
{
    name:'Printing Machine',
     print()
    {
    	console.log("a",this);
    	var pri_mac=()=>
    	{
    		console.log("b",this);
    	} 
    	pri_mac();
    }
};      
printer.print();


function canvote(age)
{
	if (age>=18)return true;
	else return false;
}

function candrive(age)
{
	return age>=16;
}

function canmarry(age)
{
    return age>=21;
}
console.log(canvote(11));
console.log(candrive(21));
console.log(canmarry(16));

console.log(canvote(27));
console.log(candrive(27));
console.log(canmarry(27));


function age_req(r_age)
{
	return function(age)
	{
	return (age>=r_age);
    }
}

let vo = age_req(18);
let ma = age_req(21);
let cd= age_req(16);

console.log(vo(11));
console.log(cd(21));
console.log(ma(16));

console.log(vo(27));
console.log(cd(27));
console.log(ma(27));

let father= {
	name:"father",
};

let son1={};
let son = Object.create(father);
var bol=father.isPrototypeOf(son);
console.log (bol);
var bool=father.isPrototypeOf(son1);
console.log(bool);

console.log("\n");
console.log("\n");

console.log(father.__proto__);
console.log(father.prototype);

console.log("\n");

console.log(son.prototype);
console.log(son.__proto__);
console.log(son.__proto__.__proto__);

var parent=
{
	name:"father",
	sing()
	{
         console.log("singing");      
	},
	eat: function()
	{
		console.log("eating");
	},
	drinking: ()=>
	{                                        
		console.log("drinking");
	}
};
var child=
{
	name: "son",
    eat()
    {
    	console.log("eating");
    }
};

child.__proto__=parent;
for (let prop in child)
{
	console.log(prop+" "+child.hasOwnProperty(prop));
}

console.log ("\n");
console.log("\n");

var pri=
{
    name:'Pri Mach',
     print()
    {
    	var priter_machine=function()
    	{
    		console.log("b",this);
    	} 
    	printer_machine();
    }
};      
printer.print();

function agrhr(age)
{
     if (age<16)
     {
          try
          {
          	throw new Error("You are underage")
          }	
//console.log(8);
           catch(error)
           {
                 console.log("error stop "+error);
            }
           finally
           {
      	         console.log("over and out");
           }
      }
      else
      {
      	console.log("You are eligible");
      }

}

agrhr(11);