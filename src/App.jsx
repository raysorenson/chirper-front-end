import React from 'react';

const App = () => {

    const chirpList = [
        {
            id: 1,
            msg: '@kimchi cannon',
        },
        {
            id: 2,
            msg: 'I luv rotten stuff'
        },
        {
            id: 3,
            msg: '@Pickled Human'
        },
        {
            id: 4,
                msg:'My tastes are more refined'
        },
        {
            id: 5,
                msg:'@Water Eater'
        },
        {
            id: 6,
            msg:'I like powdered water'
        }
    ];

    const myChirpList = chirpList.map(val => {
        return <li key={val.id}>{val.msg}</li>;
    });
    return (
        <>
            <ul>
                {myChirpList}
            </ul>
        </>
    );
}

export default App;