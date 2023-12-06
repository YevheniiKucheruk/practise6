let idCounter = {}

const getID = (key = 'default' ) =>{
    if(!idCounter[key]){
        idCounter[key] = 1
    }
    else{
        idCounter[key] ++
    }
    return `${key}_${idCounter[key]}`
}
export default getID