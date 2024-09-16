import express from 'express';
const router = express.Router();

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

// Create new contact (POST)
router.post('/create', (req, res) => {
    const newContact = req.body;
    res.send('Contact created: ' + JSON.stringify(newContact)); //stringify function sourced from Co-Pilot :)
});

// Update an existing contact
router.put('/update/:id', (req, res) => {
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