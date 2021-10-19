import { useEffect, useState } from "react";


const useService = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch("/fakeData.json")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return {
        services
    }
};

export default useService;