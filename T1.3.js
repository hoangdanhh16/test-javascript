const A = [10, 15, 3, 7];
const k = 17;

function check(A, x) 
{
    const size = A.length;
    for (i = 0; i < (size - 1); i++) 
    {
        for (j = (i + 1); j < size; j++) 
        {
            if (A[i] + A[j] == x) 
            {
                console.log(A[i], ' ', A[j]);
                return;
            }
        }
    }
    console.log('No valid pair');
}

check(A, k);

