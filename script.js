const typedEmail=document.querySelector('.email');
const subScribed=document.querySelector('.subscribe');
const emailAddress=document.getElementById('email-address');
const submit_container=document.querySelector('.container');
const newsContainer=document.querySelector('.news-container');
subScribed.addEventListener('click',()=>
{
    if(typedEmail.validity.valid)
    {
        submit_container.removeChild(newsContainer);
        submit_container.innerHTML=`<div class="submit-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" class="submit-svg"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
            <h1 class="h1">
                Thanks for subscribing!
            </h1>
            <p class="body">
                A confirmation email has been sent to 
                <b>
                    ${typedEmail.value}
                </b> 
  Please open it and click the button inside to confirm your subscription.
            </p>
            <button class="submit-button">Dismiss message</button>
        </div>
        `

        const return_button=document.querySelector('.submit-button');
        const submit_cont=document.querySelector('.submit-container');
        ('.submit-container');
        return_button.addEventListener('click',()=>
        {
            submit_container.removeChild(submit_cont);
            submit_container.appendChild(newsContainer);
            typedEmail.value=" ";
        })
    }
    else if(typedEmail.textContent===null)
    {
        // emailAddress.textContent="Enter the Text!!!";
        // console.log(emailAddress.textContent);
        alert("enter the text!!");
        // emailAddress.style.fontSize='10px';
        // emailAddress.style.marginLeft="15vw";

    }
    else
    {
        emailAddress.textContent="valid email required";
        emailAddress.style.fontSize='10px';
        emailAddress.style.marginLeft="12vw";

    }
})

