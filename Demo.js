import { useMemo, useState } from 'react';
// import { useEffect } from 'react';

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
       return false;
      }
    }
    return true;
   }


function findNthPrime(n) {
    let count = 0;
    let num = 2;
    while (count < n) {
      if (isPrime(num)) {
       count++;
      }
      num++;
    }
    return num - 1;
   }
  
//    console.log(findNthPrime(10));
//    console.log(findNthPrime(100));

export default function Demo () {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);


  const prime = useMemo(() =>{
    console.log("hello prime");
    return findNthPrime(num);
  }, [num]);
  
  return (
    <>
        <div className=''>
            <h2> Demo </h2>
            <input
                className=''
                type=''
                value={num}
                onChange={(e) => {
                    setNum(e.target.value);
                }}
            />

            <div>
                Prime NO :{prime}
            </div>

            <div>
                <button
                    onClick={() => {
                        setCount(count + 1);
                    }}>

                        Count : {count}
                    </button>
            </div>


        </div>
    </>
  )
}
