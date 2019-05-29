const router = require('express').Router();
const projectController = require('../controllers/projectController');

router.get('/', projectController.getAllProjects);
router.post('/', projectController.createProject);

router.get('/:projectId', projectController.getProject);
router.put('/:projectId', projectController.updateProject);
router.delete('/:projectId', projectController.deleteProject);

module.exports = router;
