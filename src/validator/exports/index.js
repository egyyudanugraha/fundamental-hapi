const ExportNotesPayloadSchema = require('./schema');
const InvariantError = require('../../exceptions/InvariantError');

const ExportsValidator = {
  validateExportNotesPayload: (payload) => {
    const validationTesult = ExportNotesPayloadSchema.validate(payload);

    if (validationTesult.error) {
      throw new InvariantError(validationTesult.error.message);
    }
  },
};

module.exports = ExportsValidator;
