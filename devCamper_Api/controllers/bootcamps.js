// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public

exports.getbootcamps = (req, res, next) => {
  res.status(200).json({ status: false, msg: 'Show all bootCamps' });
};

// @desc        Get single bootcamps
// @route       GET /api/v1/bootcamps/:id
// @access      Public

exports.getbootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ status: false, msg: `Show bootCamps ${req.params.id}` });
};

// @desc        Create new bootcamp
// @route       POST /api/v1/bootcamps/
// @access      Private

exports.createbootcamp = (req, res, next) => {
  res.status(200).json({ status: false, msg: 'Add all bootCamps' });
};

// @desc        Update bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      Private

exports.updatebootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ status: false, msg: `Display bootCamps ${req.params.id}` });
};

// @desc        Delete single bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private

exports.deletebootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ status: false, msg: `Delete bootCamps ${req.params.id}` });
};
