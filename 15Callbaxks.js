function func1(callback) {
    setTimeout ( ()=> {
            console.log("Task 4");
                      callback() ;
                    } , 3000
                                    );
}

function func2 (){
    console.log("task 1");
    console.log("task 2");
    console.log("task 3");
}

func1(func2);