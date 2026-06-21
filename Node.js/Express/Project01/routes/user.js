const express=required('express');

const router=express.router();

// Routes through REST API
router.get('/', (req, res) => {
    res.json(users);
});


router.route('/:id')
    .get(async(req, res) => {
        const user =  await user.findById(req.params.id);
        // const user1 = users.find((user) => user.id === parseInt(id, 10));
        return res.json(user);
    })
    .patch((req, res) => {
        // Edit user id 
        return res.json({message: "User updated successfully"});
    })
    .delete((req, res) => {
        // Delete user id 
        return res.json({message: "User deleted successfully"});
    });



router.post('/',async (req, res) => {
    const body=req.body;
    if(
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ) {
    return res.status(400).json({message: "All fields are required"}); 
    }
    const result =await user.create({
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender,
        job_title:body.job_title,
    });
    console.log("result",result);
    return res.status(201).json({msg:"Success"})
});


module.exports=router