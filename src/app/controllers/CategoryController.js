const CategoryRepository = require('../repositories/CategoryRepository');
const isValidUUID = require('../utils/isValidUUID');

class CategoryController {
  async index(request, response) {
    const categories = await CategoryRepository.findAll();

    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      response.status(400).json({ error: 'Invalid category id' });
      return;
    }

    const category = await CategoryRepository.findById(id);

    if (!category) {
      response.status(404).json({ error: 'Category not found' });
      return;
    }

    response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      response.status(400).json({ error: 'Name is required' });
      return;
    }

    const category = await CategoryRepository.create({ name });

    response.status(201).json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    if (!isValidUUID(id)) {
      response.status(400).json({ error: 'Invalid category id' });
      return;
    }

    const categoryExists = await CategoryRepository.findById(id);

    if (!categoryExists) {
      response.status(404).json({ error: 'Category not found' });
      return;
    }

    if (!name) {
      response.status(400).json({ error: 'Name is required' });
      return;
    }

    const category = await CategoryRepository.update(id, { name });

    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      response.status(400).json({ error: 'Invalid category id' });
      return;
    }

    await CategoryRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
