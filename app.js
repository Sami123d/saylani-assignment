 //                               *******ASSIGNMENT ****

//ANSWER NO.1 :
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32443)));

//ANSWER NO.2:
// Write a JavaScript function that checks whether a passed string is palindrome or not? 

function check_Palindrome(str_entry){
    
       var setr = str_entry.toLowerCase();
        var ccount = 0;
   
        if(setr==="") {
            console.log("Nothing found!");
            return false;
        }
    
        if ((setr.length) % 2 === 0) {
            ccount = (setr.length) / 2;
        } else {
    
            if (setr.length === 1) {
                console.log("Entry is a palindrome.");
                return true;
            } else {
    
                ccount = (setr.length - 1) / 2;
            }
        }
        for (var x = 0; x < ccount; x++) {
    
        }
        console.log("The entry is a palindrome.");
        return true;
    }
    check_Palindrome('level');
    check_Palindrome('radar');
    check_Palindrome('madam');

    //ANSWER NO 3:
//Write a JavaScript function that generates all combinations of a string

    function substrings(str1)
{
var array1 = [];
  for (var x = 0, y=1; x < str1.length; x++,y++) 
  {
   array1[x]=str1.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  console.log(combi.join("\n"));
} 

substrings("dog");
//ANSWER NO. 4:
//Write a JavaScript function that returns a passed string with letters in alphabetical order.

function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));

//answer no. 5:
//Write a JavaScript function that accepts a string as a parameter and
// converts the first letter of each word of the string in upper case
function uppercase(sto)
{
  var array1 = sto.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));

//ANSWER NO. 6:
//Write a JavaScript function that accepts a string as a parameter and find the longest
// word within the string.
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));

//ANSWER NO. 7:
//Write a JavaScript function that accepts a string as a parameter
// and counts the number of vowels within the string.
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));
//ANSWER NO. 8:
//Write a JavaScript function that accepts a number as a parameter 
//and check the number is prime or not

function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37));

//ANSWER NO.9:

//Write a JavaScript function which accepts an argument and returns the type
function detect_data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}
console.log(detect_data_type(12));
console.log(detect_data_type('SAMIAHMED'));
console.log(detect_data_type(false));

//ANSWER NO. 10:
//Write a JavaScript function which will take an array of 
//numbers stored and find the second lowest and second greatest numbers, respectively.
function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqu = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqu.push(arr_num[j]);
    }
  }
    result.push(uniqu[1],uniqu[uniqu.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([1,2,3,4,5]));
