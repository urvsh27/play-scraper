// Import the necessary modules
import gplay from 'google-play-scraper';

// Define an object to hold the function
const appController = {
    // Define the method
    async funGetAppData(req, res) {
        try {
            // Initialize finalData variable
            let finalData;

            // Fetch the list of top free action games
            await gplay.list({
                category: gplay.category.GAME_ACTION,
                collection: gplay.collection.TOP_FREE,
                num: 100000000,
            }).then(data => {
                // Assign fetched data to finalData
                finalData = data;
            });

            // Send the response with finalData
            res.status(201).send({ data: finalData });
        } catch (error) {
            // Send error response if any error occurs
            res.status(400).send({ message: error.message });
        }
    }
};

// Export the object
export default appController;