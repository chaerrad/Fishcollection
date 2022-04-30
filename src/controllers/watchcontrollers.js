export const watch = (req,res) => {
    const photos=[];
    res.render("watch", { pageTitle: "watch" , photos});
}