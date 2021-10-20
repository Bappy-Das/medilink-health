import { useEffect, useState } from 'react';

const useDoctor = () => {
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
        fetch('/doctorData.json')
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])
    return { doctor };
};

export default useDoctor;