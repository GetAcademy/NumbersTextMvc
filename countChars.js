function countChars(text, character) {
    let count = 0;
    for(index = 0; index < text.length; index++) {
        const aCharacter = text.charAt(index);
        if(aCharacter == character) count++;
    }
    return count;
}