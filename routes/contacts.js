import express from 'express';
import multer from 'multer';
import { PrismaClient } from '@prisma/client';

const router = express.Router();

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

// Multer setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public/images/'); // save uploaded files in `public/images` folder
    },
    filename: function (req, file, cb) {
    const ext = file.originalname.split('.').pop(); // get file extension
    const uniqueFilename = Date.now() + '-' + Math.round(Math.random() * 1000) + '.' + ext; // generate unique filename - current timestamp + random number between 0 and 1000.
    cb(null, uniqueFilename);
    }
    });
    const upload = multer({ storage: storage });

    
//
//Routes
//    


router.get('/', (req, res) => {
    res.send('lets goooooooooo');
});

// Get all contacts
router.get('/all', (req, res) => {
    res.send('All contacts');
});

// Get a contact by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send('Contact by id ' + id);
}); 

//To-Do: add post, put, and delete routers

// Create new contact (POST) (with Multer)
router.post('/create', upload.single('image'),(req, res) => {
    // const newContact = req.body;
    const filename = req.file ? req.file.filename : '';
    const { first_name, last_name, email, phone} = req.body; 

    console.log(`Uploaded file: ` + filename);
    console.log(`My contact's name: ${first_name} ${last_name}`);

    res.send('Add a new contact '); 
});

// Update an existing contact (with Multer)
router.put('/update/:id', upload.single('image'),(req, res) => {
    const id = req.params.id;
    const updatedContact = req.body;
    res.send('Contact updated: ' + JSON.stringify(updatedContact));
});
  
  // Delete a contact
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    res.send('Contact deleted with id ' + id);
});

export default router; 