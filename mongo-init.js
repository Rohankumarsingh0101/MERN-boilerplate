// MongoDB initialization script
db = db.getSiblingDB('mern_boilerplate');

// Create collections
db.createCollection('users');

// Create indexes
db.users.createIndex({ "email": 1 }, { unique: true });
db.users.createIndex({ "createdAt": 1 });

// Insert sample data (optional)
print('Database initialized successfully');