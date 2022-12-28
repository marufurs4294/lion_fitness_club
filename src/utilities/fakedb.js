// use local storage to manage cart data
const addToDb = id =>{
    let AddTime = {};

    //get the shopping cart from local storage
    const storedTime = localStorage.getItem('Add-Time');
    if(storedTime){
        AddTime = JSON.parse(storedTime);
    }

    // add quantity
    const quantity = AddTime[id];
    if(quantity){
        const newQuantity = quantity + 1;
        AddTime[id] = newQuantity;
    }
    else{
        AddTime[id] = 1;
    }
    localStorage.setItem('Add-Time', JSON.stringify(AddTime));
}

const getStoredTime = () =>{
let AddTime = {};

const storedTime = localStorage.getItem('Add-Time');
    if(storedTime){
        AddTime = JSON.parse(storedTime);
    } 
    return AddTime;
}

const removeFromDb = id =>{
    const storedTime = localStorage.getItem('Add-Time');
    if(storedTime){
        const AddTime = JSON.parse(storedTime);
        if(id in AddTime){
            delete AddTime[id];
            localStorage.setItem('Add-Time', JSON.stringify(AddTime));
        }
    }
}

const deleteAddTime = () =>{
    localStorage.removeItem('Add-Time');
}

export {
    addToDb, 
    removeFromDb,
    deleteAddTime,
    getStoredTime
}