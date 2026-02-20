// exercise1.js
const accordion = document.querySelector('.accordion');

if(accordion){

    accordion.addEventListener('click', function(event) {
    // 1. Find the closest trigger from event.target
    // If null, the click was not on a trigger - return early.
         const trigger = event.target.closest('.accordion-trigger')

         if(!trigger){
            return
         }

    // 2. From the trigger, find the closest .accordion-item
        const item = trigger.closest('.accordion-item')

    // 3. Close ALL accordion items (querySelectorAll + forEach + remove class)
           const accordionItems = document.querySelectorAll('.accordion-item')

           accordionItems.forEach(acI =>{
            acI.classList.remove('open')
           })

    // 4. Toggle .open on the clicked item only
          item.classList.toggle('open')   
    });
}