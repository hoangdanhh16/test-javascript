const str = "AABBBCCCCCAADDDDPPPQRRRSTTQQSXYZ";

function printRLE(str) 
{
    let res = '';
    let n = str.length;
    for (let i = 0; i < n; i++) 
    {
        let count = 1;
        while (i < n - 1 && str[i] == str[i + 1]) 
        {
            count++;
            i++;
        }

        count == 1 ? res += str[i] : res += count + str[i];
    }
    return res
}
const result = printRLE(str);
console.log(result);