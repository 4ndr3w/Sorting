module.exports = function(app)
{
  app.get("/register/:eventId", function(req,res)
  {
    res.render("register/eventlist");
  });

  app.post("/register/:eventId", function(req,res)
  {
    res.render("register/regform");
  });

  app.get("/schedule", function(req,res)
  {
    res.render("schedule/eventlist");
  });

  app.get("/schedule/:eventId", function(req,res)
  {
    res.render("schedule/schedule");
  });
};
