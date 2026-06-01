function walkDog(){

    return new Promise ((resolve, reject)=>{

        let dogWalked = true;

        if(dogWalked){
            setTimeout(()=>{
            resolve("Walking a dog.");
        }, 2500);
        }
        else{
            reject("Dog didnt walked.");
        }
        
    }) 
}
    
function cleanKichen(){

    
    return new Promise((resolve, reject) =>{
        let cleanKichen = true;
    
    if(cleanKichen){
        setTimeout(()=>{
        resolve("You clean the kichen."); 
    } ,3000);
    }
    else{
        reject("YOu didnt clean the kichen.")
    }
      
})  }

function takeOutTrash(){
    
    return new Promise((resolve, reject)=>{

        let trash = false;

        if(trash){
            setTimeout(()=>{
        resolve("You take out the trash.");
    } ,1000);
        }
        
        else{
            reject("You didnt take out the trash.");
        }
    })
}

async function doTheWork() {

    try{
         const task1 = await walkDog();
    console.log(task1);

    const task2 = await cleanKichen();
    console.log(task2);

    const task = await takeOutTrash();
    console.log(task);
    }
    
    catch(error){
        console.error(error);
    }
   
}

doTheWork();


// walkDog().then(value => {console.log(value); return cleanKichen();})
//          .then(value => {console.log(value); return takeOutTrash();})
//          .then(value => {console.log(value)})
//          .catch(error => console.error(error));