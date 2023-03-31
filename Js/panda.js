console.log("Js file save")

// All h2 element change to the color
const allHeading=document.getElementsByTagName('h2');

for(var i=0; i<allHeading.length; i++){
    allHeading[i].style.color='lightblue';
}

// this webpage change backpack id background color 
document.getElementById('backpack-section').style.backgroundColor='tomato';


// All card class change to border radius
const allCard=document.getElementsByClassName('card');

for(var i=0; i<allCard.length;i++){
    allCard[i].style.borderRadius="30px"
}

// onclick add to button
const buttonUpdate=document.getElementById('button-carousel').addEventListener('click',function(){
    console.log("Button Clicked");
})

// one button add eventhandler and remove all button
const allButton=document.getElementsByClassName('btn');
 function removebtn(){
    for(var i=0; i<allButton.length;){
        allButton[i].remove();
    }
}

// disable button update enable
document.getElementById('deleteText').addEventListener('keyup',function(event){
    const text=event.target.value;
    console.log(text)
    const deleteButton=document.getElementById('btn-delete');

    if(text === 'email'){
        console.log('clicked')
        deleteButton. disabled = false;  
    }
 
})

// // mouseenter click and image change
// document.getElementById('changeImage');

//     let currentImageid=1;
//     const images=[
//         'Image/bag-1.png',
//         'Image/bag-2.png',
//         'Image/bag-3.png'
//     ];
//     function change(){
      
//         if(currentImageid>=images.length){
//             currentImageid=0;
            
//         }
//         img.src=images[currentImageid];
//         currentImageid++;
//         console.log("khadija")
//     }
