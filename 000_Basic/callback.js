

// function add(a,b,result){
//     result(10+20)
// }


// add(10,20,(data)=>{
//     console.log(data);
// })/


// function calc(a,result){
//     result(a*a, a*a*a)
// }

// calc(10, (sq,cb)=>{
//     console.log(sq);
//     console.log(cb);
// })


function getst(id, data){

        a = [10,20,30,40,50,60,70]

        myid =  a.find(ele=>{
            return ele==id
        })
        if(myid)
        {
            data(myid)
        }
        else{
            data(undefined,"id not found")
        }
}

function stInfo(id, info)
{
        info("Id of student is"+id+" and name is tops")
}


getst(100,(data,err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(data);
        stInfo(data,(dt)=>{
            console.log(dt);
        })
    }
})








