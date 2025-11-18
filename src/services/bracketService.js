// Placeholder bracket service - implement bracket generation logic here
const Bracket = require('../models/Bracket');
const Registration = require('../models/Registration');

exports.generateForTournament = async (tournamentId) => {
  const regs = await Registration.find({ tournament: tournamentId, status: { $in: ['paid','approved'] } });
  const teams = regs.map(r => r.team.toString());
  const nodes = teams.map((t,i) => ({ id: 'n'+i, left: t, right: null }));
  const bracket = await Bracket.create({ tournament: tournamentId, type: 'single_elim', nodes });
  return bracket;
};
