const con = require("../utils/database");

// READ (servers)
exports.getAllServers = async (req, res) => {
    let servers = await con.execute(`SELECT servers.ID, servers.ServerName, companies.CompanyName, servers.IP, servers.CompanyID, servers.Status, servers.createdAt FROM servers INNER JOIN companies ON servers.CompanyID=companies.ID`);
  res.send(servers[0]);
};
// URL:   http://www.localhost:5004/servers/getAllServers