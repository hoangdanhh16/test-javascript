const str = 'webmaster';

function AlphabetSoup(str) 
{ 
    let sortedStr = str.toLowerCase().split('').sort().join('');
    return sortedStr; 
}

console.log(AlphabetSoup(str));