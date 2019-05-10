const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SurveySchema = new Schema({
	name: String,
	number: Number,
	title: String,
	comment: String
});

const Survey = mongoose.model("survey", SurveySchema);

module.exports = Survey;