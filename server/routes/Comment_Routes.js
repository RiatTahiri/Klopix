const router = require("express").Router();
const auth = require("../middleware/authentication");
const {
  checkComment,
  comment,
  allComments,
} = require("../controllers/Comment_Controller");

router.post("/comment", auth, comment);
router.get("/allComments", auth, allComments);

// })

// router.post('/editComment/:id', auth ,(req,res) => {

// })

// router.post('/deleteComment:/id',  auth ,(req,res) => {

// })

router.get("/checkComment", checkComment);

module.exports = router;
