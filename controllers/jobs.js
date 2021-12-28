const createJob = async (req, res) => {
  res.send("create job");
};

const getAllJobs = async (req, res) => {
  res.send("get all Jobs");
};

const getSingleJob = async (req, res) => {
  res.send("Get single Job");
};

const deleteJob = async (req, res) => {
  res.send("Delete Job");
};

const updateJob = async (req, res) => {
  res.send("Update Job");
};

module.exports = {
  createJob,
  getAllJobs,
  getSingleJob,
  deleteJob,
  updateJob,
};
