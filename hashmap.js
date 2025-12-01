// Hashmap- It stored the data in the format of key, value pair.
// It's super fast to acces, like when we call the key it will directly display.
// It stores the keys in hash way.


//Given a string "mahek", count how many times each character appears.
function countCharacters(str){
    let map = {}; // hashmap->like a object- key value pair
    
    for(let char of str){ //loop through each character
        if(map[char]){ //checks if it's already in the hashmap
            map[char]++; // if key exist increase the count
        }else{
            map[char] = 1; // if not start from 1
        }
    }

    return map;
}

let result = countCharacters("maahek");
console.log(result);
// Accessing a specific value
console.log(result["a"]); // 2

// count the frequency of each words.
function wordfrequency(sentence){
    let map = {}; // hashmap->like a object- key value pair
    let words = sentence.split(" ");
    for(let word of words){ //loop through each character
        if(map[word]){ //checks if it's already in the hashmap
            map[word]++; // if key exist increase the count
        }else{
            map[word] = 1; // if not start from 1
        }
    }

    return map;
}

console.log(wordfrequency("i love coding and i love javascript"));
