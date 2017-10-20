export const ADD_USER = 
app.post('/api/users/add', function(req, res){
res.setHeader('Content-Type', 'application/json');
User.sync({force: false}).then(() => {
// Table created
return User.create(req.body);
});
  res.send(JSON.stringify(req.body));
});