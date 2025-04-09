function printObjectKeys(obj){
for (let prop in obj){
    console.log(prop)
}
}

printObjectKeys({name:"alice", age:25});