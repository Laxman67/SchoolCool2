import mongoose from 'mongoose';

const DBConnect = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL, {
      dbName: 'SchoolManagement',
    })
    .then(() => {
      console.log('Database is Connected');
    })
    .catch((err) => {
      console.log(`Error Occred in DB Connection: ${err}`);
    });
};

export default DBConnect;
