
 var button=document.querySelectorAll('input')
 var screentext=document.getElementById('screen')
 for ( item of button)
 {
     item.addEventListener('click',(a)=>{
         var text=a.target.value
         console.log(typeof(text))
         if ( text=='C' )
         {
             screentext.value= ""
         }
         else if (text == '=')
         {
             screentext.value=eval(screentext.value)
             
         }
         else{
             screentext.value+=text
         }
        
     })
 }