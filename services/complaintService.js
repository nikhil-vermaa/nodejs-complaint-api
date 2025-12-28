const Complaint = require("../models/complaintModel");

// Create Complaint
function createComplaint(data) {
  return Complaint.create(data);
}

// Get all complaints with pagination, filter, sort
function getComplaints(query) {
  var filter = {};
  if (query.status) filter.status = query.status;

  var page = parseInt(query.page) || 1;
  var limit = parseInt(query.limit) || 10;
  var skip = (page - 1) * limit;

  var sort = {};
  if (query.sortBy && query.order) sort[query.sortBy] = query.order === "desc" ? -1 : 1;

  return Complaint.find(filter).skip(skip).limit(limit).sort(sort);
}

// Get one complaint
function getComplaintById(id) {
  return Complaint.findById(id);
}

// Update complaint
function updateComplaint(id, data) {
  return Complaint.findByIdAndUpdate(id, data, { new: true, runValidators: true });
}

// Delete complaint
function deleteComplaint(id) {
  return Complaint.findByIdAndDelete(id);
}

module.exports = {
  createComplaint,
  getComplaints,
  getComplaintById,
  updateComplaint,
  deleteComplaint
};
