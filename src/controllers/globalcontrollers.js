export const homepage = (req,res) => {
    res.render("home", { pageTitle: "Home" });
}
export const loginpage = (req,res) => {
    
    res.render("login", { pageTitle: "login"});
}
export const joinpage = (req,res) => {
    
    res.render("join", { pageTitle: "join" });
}
export const postlogin = (req,res) => {
    
    res.render("login", { pageTitle: "login"});
}
export const postjoin = (req,res) => {
    
    res.render("join", { pageTitle: "join" });
}