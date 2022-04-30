export const watch = (req,res) => {
    const photos = [1,2,3,4,5,];
    res.render("watch", { pageTitle: "watch" , photos});
}