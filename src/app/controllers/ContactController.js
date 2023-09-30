const ContactRepository = require('../repositories/ContactRepository');
const isValidUUID = require('../utils/isValidUUID');

class ContactController {
  async index(request, response) {
    const { orderBy } = request.query;
    const contacts = await ContactRepository.findAll(orderBy);

    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      response.status(400).json({ error: 'Invalid contact id' });
      return;
    }

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      response.status(404).json({ error: 'Contact not found' });
      return;
    }

    response.json(contact);
  }

  async store(request, response) {
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!name) {
      response.status(400).json({ error: 'Name is required' });
      return;
    }

    if (category_id && !isValidUUID(category_id)) {
      response.status(400).json({ error: 'Invalid category id' });
      return;
    }

    if (email) {
      const contactExists = await ContactRepository.findByEmail(email);

      if (contactExists) {
        response.status(409).json({ error: 'This e-mail is already in use' });
        return;
      }
    }

    const contact = await ContactRepository.create({
      name,
      email: email || null,
      phone: phone || null,
      category_id: category_id || null,
    });

    response.status(201).json(contact);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!isValidUUID(id)) {
      response.status(400).json({ error: 'Invalid contact id' });
      return;
    }

    if (category_id && !isValidUUID(category_id)) {
      response.status(400).json({ error: 'Invalid category id' });
      return;
    }

    if (!name) {
      response.status(400).json({ error: 'Name is required' });
      return;
    }

    const contactExists = await ContactRepository.findById(id);
    if (!contactExists) {
      response.status(404).json({ error: 'Contact not found' });
      return;
    }

    if (email) {
      const contactByEmail = await ContactRepository.findByEmail(email);

      if (contactByEmail && contactByEmail.id !== id) {
        response.status(409).json({ error: 'This e-mail is already in use' });
        return;
      }
    }

    const contact = await ContactRepository.update(id, {
      name,
      email: email || null,
      phone: phone || null,
      category_id: category_id || null,
    });

    response.json(contact);
  }

  async delete(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      response.status(400).json({ error: 'Invalid contact id' });
      return;
    }

    await ContactRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new ContactController();
