// exercise2.js
const tagInput = document.querySelector('#tag-input');
const tagContainer = document.querySelector('#tag-container');

if(tagInput && tagContainer){
     // -- Add a tag when Enter is pressed --
     tagInput.addEventListener('keydown', function(event) {

     if (event.key !== 'Enter') return;

     const value = tagInput.value.trim();

     if (!value) return;

     // 1. Create a div with class "tag"
         const div = document.createElement('div')
         div.setAttribute("class", "tag")

     // 2. Set its innerHTML to include the label text
     // and a <span class="tag-remove">&times;</span>
         div.innerHTML = value + '<span class="tag-remove">&times;</span>'

     // 3. Append the tag to tagContainer
          tagContainer.appendChild(div)
     // 4. Clear the input
     tagInput.value = '';
     });
  
   // -- Remove a tag via delegation --

   tagContainer.addEventListener('click', function(event) {
      // 1. Check event.target.matches('.tag-remove')
      if(event.target.matches('.tag-remove')){

      // 2. If true, call closest('.tag').remove() on event.target
       event.target.closest('.tag').remove()
    }
   });
}