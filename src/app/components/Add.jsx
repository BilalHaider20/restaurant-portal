import React from 'react'
import RestaurantModal from './RestaurantModal';

const UserInfoForm = () => {
    const [userInfo, setUserInfo] = useState({
      name: '',
      email: '',
      phone: ''
    });
  
    useEffect(() => {
      // Load saved user info when component mounts
      const savedInfo = localStorage.getItem('userInfo');
      if (savedInfo) {
        setUserInfo(JSON.parse(savedInfo));
      }
    }, []);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserInfo(prevInfo => ({
        ...prevInfo,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Save user info to local storage
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      alert('Information saved successfully!');
    };
  }
  <RestaurantModal/>
  


        
export default Add
