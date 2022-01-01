import axios from "axios";
import { useEffect, useState } from "react";

const usePackages = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        axios
            .get("https://salty-bayou-85327.herokuapp.com/courses")
            .then((res) => setCourses(res.data));
    }, []);
    return [courses];
};
export default usePackages;
