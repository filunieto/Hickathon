const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const absenceController = require('./controllers/absenceController');
const auth = require('./middlewares/auth');

router.post('/login', userController.login);

router.get('/users', auth.isManager, userController.getUsers);
router.post('/users', auth.isManager, userController.createUser);
router.put('/users/:id', auth.isManager, userController.updateUser);
router.delete('/users/:id', auth.isManager, userController.deleteUser);

router.get('/absences', auth.isAuthenticated, absenceController.getAbsences);
router.post('/absences', auth.isAuthenticated, absenceController.createAbsence);
router.put('/absences/:id', auth.isAuthenticated, absenceController.updateAbsence);
router.delete('/absences/:id', auth.isAuthenticated, absenceController.deleteAbsence);
router.post('/absences/:id/approve', auth.isManager, absenceController.approveAbsence);
router.post('/absences/:id/reject', auth.isManager, absenceController.rejectAbsence);

module.exports = router;