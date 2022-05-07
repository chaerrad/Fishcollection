import Login from "../models/login";
export const homepage = (req,res) => {
    res.render("home", { pageTitle: "Home" });
}
export const loginpage = (req,res) => {
    
    res.render("login", { pageTitle: "login"});
}
export const joinpage = (req,res) => {
    
    res.render("join", { pageTitle: "join" });
}
export const postlogin = async (req,res) => {
    const {ID, password} = req.body;
    const user = await Login.findOne( {ID : ID} );
    if(!user)
    {
        console.log("please create ID");
        return res.render("Join");
    }
    else {
        if(user.password === password)
        {
            console.log("password correct");
            
            console.log("password correct");
            return res.redirect("/");
        }
        else
        {
            console.log("password wrong");
            return res.redirect("login");
        }
    }
    
}
export const postjoin = async (req,res) => {
    const {ID, password} = req.body;
    const check = await Login.exists({ ID: ID });
    if(check)
    {
        console.log("Already ID exists, find other ID");
        return res.redirect("/");
    }
    if(password===req.body.password_confirm){
    try{
        
        await Login.create({
            ID,
            password
        });
        
        console.log("Join well done");
        return res.redirect("/");
    }
     catch(error) {
        console.log("Error");
        return res.redirect("/");
        
    }

    }
    else{
    console.log("Check your password");
        return res.redirect("/");
    }

    
}