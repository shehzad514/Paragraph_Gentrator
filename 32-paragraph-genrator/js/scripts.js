
const text =[
    ` Lorem ipsum dolor sit, amet consectetur adipisicing
     elit. Voluptas rerum sunt enim similique nihil asperiores 
     voluptatum quasi dignissimos nisi! Quo ipsum temporibus 
     officia, doloremque sequi adipisci deleniti ipsam repellat ad?`,

     ` Lorem ipsum dolor sit, amet consectetur adipisicing
     elit. Voluptas rerum sunt enim similique nihil asperiores 
     voluptatum quasi dignissimos nisi! Quo ipsum temporibus 
     officia, doloremque sequi adipisci deleniti ipsam repellat ad?
     consectetur adipisicing
     elit. Voluptas rerum sunt enim similique nihil asperiores 
     voluptatum quasi dignissimos nisi! Quo ipsum temporibus 
     officia, doloremque sequi adipisci deleniti ipsam repellat ad?`,

     `consectetur adipisicing
     elit. Voluptas rerum sunt enim similique nihil asperiores 
     voluptatum quasi dignissimos nisi! Quo ipsum temporibus 
     officia, doloremque sequi adipisci deleniti ipsam repellat ad?
     consectetur adipisicing
     elit. Voluptas rerum sunt enim similique nihil asperiores 
     voluptatum quasi dignissimos nisi! Quo ipsum temporibus 
     officia, doloremque sequi adipisci deleniti ipsam repellat ad?
     consectetur adipisicing
     elit. Voluptas rerum sunt enim similique nihil asperiores 
     voluptatum quasi dignissimos nisi! Quo ipsum temporibus 
     officia, doloremque sequi adipisci deleniti ipsam repellat ad?`,

     `elit. Voluptas rerum sunt enim similique nihil asperiores 
     voluptatum quasi dignissimos nisi! Quo ipsum temporibus 
     officia, doloremque sequi adipisci deleniti ipsam repellat ad?
     consectetur adipisicing
     elit. Voluptas rerum sunt enim similique nihil asperiores 
     voluptatum quasi dignissimos nisi! Quo ipsum temporibus 
     officia, doloremque sequi adipisci deleniti ipsam repellat ad?`
]

const form = document.querySelector(".para-form");
const amount= document.getElementById("amount");
const result = document.querySelector(".text-sec");


form.addEventListener("submit", function(e)
{
    // by this we can submit our work to server and prevent from defilt
    // if we not use the e.prevanDefult then our work will not show 
    e.preventDefault();

    const value =parseInt( amount.value);
    //esy ik tu value get ho ge r dosra yi k string ko number mai convert kardy ga 


    //now condition for if user doesnot input or input<0 or > 4
    //isNaN mean if no value is enter 

    if(isNaN(value) || value<0 || value>4)
    {
        result.innerHTML="<p> plz enter the value btw 1 and 5 thanks </p>";
    }
    else
    {
        let tempText = text.slice(0,value);
        //it start from 0 to value -1 index 
        // if you enter 3 then start from 0 to 2 ;
        tempText = tempText.map(function(item)
        {
            //map() calling the new array from the index 
            return `<p>${item} </p>`;
        })
        .join("");
        result.innerHTML = tempText;
    }

})