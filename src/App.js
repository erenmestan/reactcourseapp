import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Courses from './Courses';
import Loading from './Loading';

function App() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchCourses = async () => {
        setLoading(true);
        try{
            const response = await axios.get('http://localhost:3004/courses');
            setCourses(response.data);
            setLoading(false);
        }
        catch (e) {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchCourses();
    }, []);
  return (
    <div className="App">
        {loading ? ( <Loading/>) : <Courses courses={courses}/> }
      <Courses course={courses} />
    </div>
  );
}

export default App;
