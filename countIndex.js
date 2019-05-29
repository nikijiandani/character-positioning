function countingIndex (str){
    let letters = {};

    //look at each letter by looping through
    for(var i = 0; i < str.length; i++){

        //make sure that the char isnt a space
        if (str[i] !== ' '){

            if(!letters[str[i]]){
                letters[str[i]] = [i];
            } else {
                letters[str[i]].push(i);
            }
        }
    }
    console.log(letters);
}
countingIndex("lighthouse in the house");