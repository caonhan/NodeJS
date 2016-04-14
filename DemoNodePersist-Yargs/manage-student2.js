/**
*   Student Library
*/

var storage = require('node-persist');

//Init function
//Load data storged on disk

storage.initSync({
	dir : "students", //node-modules/node-persist/storage/studens
	ttl : false
});

// Hàm lấy danh sách sinh viên
function getAllStudents()
{
    // Lấy sinh viên từ nơi lưu trữ
    var students = storage.getItemSync('students');
     
    // Nếu không có sinh viên nào thì trả về một mảng rỗng
    if (typeof students === "undefined"){
        return [];
    }
     
    // Ngược lại sẽ trả về danh sách sinh viên
    return students;
}
 
 
// Hàm lấy chi tiết sinh viên
function getStudent(studentId)
{
    // Lấy danh sách sinh viên
    var students = getAllStudents();
     
    // Biến lưu trữ sinh viên được tìm thấy
    var matchedStudent = null;
     
    // Lặp để tìm sinh viên
    for (var i = 0; i < students.length; i++){
        if (students[i].id === studentId){
            matchedStudent = students[i];
            break;
        }
    }
     
    return matchedStudent;
}

// Hàm thêm một sinh viên
function addStudent(id, fullname)
{
    var students = getAllStudents();
     
    students.push({
        id : id,
        fullname : fullname
    });
     
    storage.setItemSync('students', students);
}
 
// Hàm xóa sinh viên
function removeStudent(studentId)
{
    var students = getAllStudents();
     
    for (var i = 0; i < students.length; i++){
        if (students[i].id === studentId){
            students.splice(i, 1);
        }
    }
     
    storage.setItemSync('students', students);
}
 
// Hàm sửa sinh viên
function editStudent(studentId, studentName)
{
    var students = getAllStudents();
 
    for (var i = 0; i < students.length; i++){
        if (students[i].id === studentId){
            students[i].fullname = studentName;
        }
    }
     
    storage.setItemSync('students', students);
}

// Hàm hiển thị danh sách sinh viên
function showStudents()
{
    var students = getAllStudents();
    students.forEach(function(student){
        console.log('Student: ' + student.fullname + ' (' + student.id + ')');
    });
}

/**
*   OPTION ACTION
*/

//Init yargs
var yargs = require('yargs');

var argv = yargs
                .command("list", "Get List Student", function(yargs){
                    // Nothing
                })
                .command('create', 'Create a Student', function(yargs){
                    return yargs.options({
                        id : {
                            demand : true,
                            type : "number"
                        },
                        fullname : {
                            demand : true,
                            type : "string"
                        }
                    });
                })
                .command('delete', 'Delete a Student', function(yargs){
                    return yargs.options({
                        id : {
                            demand : true,
                            type : "number"
                        }
                    });
                })
                .command('edit', 'Edit a Student', function(yargs){
                    return yargs.options({
                        id : {
                            demand : true,
                            type : "number"
                        },
                        fullname : {
                            demand : true,
                            type : "string"
                        }
                    });
                })
                .argv;

// Lấy tên action
var action = argv._[0];
 
if (action === 'list'){
    showStudents();
}
else if (action === 'create'){
    addStudent(argv.id, argv.fullname);
    console.log('Add Successfully!');
    showStudents();
}
else if (action === 'delete'){
    removeStudent(argv.id);
    console.log('Delete Successfully!');
    showStudents();
}
else if (action === 'edit'){
    editStudent(argv.id, argv.fullname);
    console.log('Edit Successfully!');
    showStudents();
}
else{
    console.log('Command not found!');
}


 
 
