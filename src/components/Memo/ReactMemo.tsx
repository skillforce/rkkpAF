import React, {useMemo, useState} from 'react'


export const Factorial = () => {


    const [a, setA] = useState(0)
    const [b, setB] = useState(0)


    let resultA = 1;
    let resultB = 1;


    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= tempResultA; i++) {

            let fake = 0;
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }

            tempResultA = tempResultA * i;

        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }


    return <div>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)} type="number"/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)} type="number"/>
        <div>
            Factorial for a({a}) its {resultA}
        </div>
        <div>
            Factorial for b({b}) its {resultB}
        </div>
    </div>
}





