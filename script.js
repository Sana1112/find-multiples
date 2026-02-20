 function generateMultiples(){ 
     let multiples = document.getElementById("multiples"); 
     multiples.innerHTML = ""; 

     if (this.value === "" || isNaN(this.value)){ 
         multiples.innerHTML += 'Enter a valid number.'; 
         return; 
     } 

     const base = parseInt(this.value); 

     if (base === 0) {
        multiples.innerHTML = "Please enter a number other than 0 to see multiples.";
        return;
    }
     const nums = [1,2,3,4,5,6,7,8,9,10,11,12]; 

    for(let i =0; i < nums.length; i++){ 
    const paragraph = document.createElement('p'); 
    paragraph.innerHTML = base*nums[i]; 

    if (i % 2 === 0){ 
        paragraph.classList.add('a'); 
    } else { 
        paragraph.classList.add('b'); 
    }
    multiples.appendChild(paragraph); 
    } 
} 

window.addEventListener('load', function(){ 
    document.getElementById("userInput").addEventListener("keyup", generateMultiples); 
}); 

