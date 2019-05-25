const database = require('./../configuration/database');
const db = database.db;
const path = require('path');
const {validationResult} = require('express-validator/check');


exports.employees_list = function(req,res){
    var sql = ' SELECT empID,EFirst,ELast,type FROM `Baseis2019`.`employee`';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show_data', {
            table : path.basename(__filename,'.js'), 
            item : results
        });
    });
};

exports.employees_create_get = function(req,res){
    res.sendFile(path.join(__dirname,'../public/forms/insertForm', 'employeeForm.html'));
};

exports.employees_create_post = function(req,res){
    let sql =`INSERT INTO Baseis2019.employee (empID, EFirst, ELast, Salary, type, Information) VALUES (NULL, '${req.body.EFirst}', '${req.body.ELast}', ${req.body.Salary}, '${req.body.type}', '${req.body.Information}')` ;
    db.query(sql, (err,results)=>{
        if(err) throw err;
        res.render('successful_action', {action : 'inserted' , type: 'employee'});
    })
};

exports.employees_update_get = function(req,res){
    res.send('employees_update_get');
}

exports.employees_update_post = function(req,res){
    res.send('employees_update_post');
}

exports.employees_delete_get = function(req,res){
    res.sendFile(path.join(__dirname,'../public/forms/deleteForm', 'employeeForm.html'));       //enw paizei to book 
                                                                                            //afto dn paizei... 
}

exports.employees_delete_post = function(req,res){
    res.send('employees_delete_post');
}