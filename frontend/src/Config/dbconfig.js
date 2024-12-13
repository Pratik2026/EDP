import { getDatabase, ref, set, get } from "firebase/database";
import { app } from "./firebaseconfig";

const db = getDatabase(app);

// Write data
const writeData = async (userId, name) => {
    await set(ref(db, 'users/' + userId), {
        username: name,
    });
};

// Read data
const readData = async (userId) => {
    const snapshot = await get(ref(db, 'users/' + userId));
    if (snapshot.exists()) {
        console.log(snapshot.val());
    } else {
        console.log("No data available");
    }
};

export { writeData, readData };
