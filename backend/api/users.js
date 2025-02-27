import db from '../firebase.js';
import cors from 'cors';

const handler = async (req, res) => {
  await cors()(req, res); // Apply CORS middleware

  if (req.method === 'GET') {
    try {
      const usersSnapshot = await db.collection("users").get();
      const users = usersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send(error.message);
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
};

export default handler;