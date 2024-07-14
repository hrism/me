// src/api.js
export const fetchData = async () => {
    try {
        const response = await fetch('https://8jzw1zwz10.execute-api.ap-southeast-2.amazonaws.com/default/rss');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};