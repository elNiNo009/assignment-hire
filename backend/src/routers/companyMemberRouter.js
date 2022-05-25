const express = require("express");
const companyMemberRecord = require("../models/companyMembers");
const router = new express.Router();

router.post("/companyMemberAdd", async (req, res) => {
  const member = new companyMemberRecord(req.body);
  //console.log()
  try {
    await member.save();

    res.status(201).send(member);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/companyMemberDelete/:id", async (req, res) => {
  const member_id = req.params.id;
  console.log(member_id);
  try {
    const member = await companyMemberRecord.findByIdAndDelete(member_id);

    if (!member) {
      return res.status(404).send("user not found");
    }
    res.send("Deleted");
  } catch (e) {
    res.status(500).send(e);
  }
});

router.put("/companyMemberEdit/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const member_id = req.params.id;
  console.log("geting updates")
  console.log(updates)
  const allowUpdates = ["name","createddate"];

  const isValidOperation = updates.every((update) => {
    return allowUpdates.includes(update);
  });

  if (!isValidOperation) {
    
    return res.status(400).send({
      
      error: "Invlaid update",
    });
  }

  try {
    const companyMemberRec = await companyMemberRecord.findById(req.params.id);
    console.log(companyMemberRec)
    updates.forEach((update) => {
      companyMemberRec[update] = req.body[update];
    });

    await companyMemberRec.save();

    res.send(companyMemberRec);
  } catch (e) {
    console.log("error")
    res.status(400).send(e);
  }
});

router.get("/memberRecord/:companyId", async (req, res) => {
  //console.log("get all");
  const company_id=req.params.companyId
  try {
  //  console.log("here");

    const memberRec = await companyMemberRecord.find({companyId:company_id});

    if (!memberRec) {
      return res.status(404).send("No record found");
    }
    res.send(memberRec);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
