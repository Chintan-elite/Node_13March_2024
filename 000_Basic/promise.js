
function getst(id){

    return new Promise((resolve,reject)=>{

        
        a = [10,20,30,40,50,60,70]

        myid =  a.find(ele=>{
            return ele==id
        })
        if(myid)
        {
            resolve(myid)
        }
        else{
            reject("Id not found")
        }
    })


}

function stInfo(id)
{       
        return new Promise((resolve,reject)=>{
            resolve("Id of student is"+id+" and name is tops")
        })
        
}

// getst(10).then(data=>{
//     console.log(data);
//     return stInfo(data)
// }).then(result=>{
//     console.log(result);
// }).catch(err=>{
//     console.log(err);
// })




async function myfun()
{

   try {
        var id = await getst(10)
        console.log(id);
        var data = stInfo(id)
        console.log(data);

    } catch (error) {
        console.log(error);
   }

}

myfun()

