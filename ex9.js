let kitchenHasGhost = true;
let livingRoomHasGhost = false;
let  isHouseSafe = kitchenHasGhost &&  livingRoomHasGhost;

if (isHouseSafe==true){
    console.log ("he house is safe! No ghosts in the Kitchen or Living Room.")
}else{
    console.log("Danger! The house is NOT safe. Ghosts detected!")
}