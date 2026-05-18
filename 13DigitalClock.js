function count(){
    const time = new Date();

    let hour = time.getHours();
    const AP = hour >= 12 ? "PM" :"AM" ;
    hour = hour % 12 || 12 ;
    hour = hour.toString().padStart(2,"0");
    const minutes = time.getMinutes().toString().padStart(2,"0");
    const second = time.getSeconds().toString().padStart(2,"0");

    const Show = `${hour}:${minutes}:${second} ${AP}`;
    document.getElementById("Clock").textContent = Show;
  
}

count();
setInterval(count,1000);