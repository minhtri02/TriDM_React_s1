import React from "react";

class student_list extends React.Component{
    constructor() {
        super();
        this.state = {
            studens: [
                {
                    name: "Đào Minh Trí",
                    idStudent: "2323",
                    age: "24",
                    idCard:"234456786"
                },
                {
                    name: "Nguyễn Phi Hùng",
                    idStudent: "4564",
                    age: "20",
                    idCard:"456878945"
                },
                {
                    name: "Lương Quang Trường",
                    idStudent: "8989",
                    age: "25",
                    idCard:"435756678"
                },
                {
                    name: "Nguyễn Bá Trọng Lương",
                    idStudent: "2579",
                    age: "30",
                    idCard:"3456767213"
                },
                {
                    name: "Pinky Phú",
                    idStudent: "5464",
                    age: "31",
                    idCard:"456798234"
                },
                {
                    name: "Trần Hoàng Hề",
                    idStudent: "4345",
                    age: "24",
                    idCard:"5642344456"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên</th>
                        <th scope="col">CMND</th>
                        <th scope="col">MSSV</th>
                        <th scope="col">Age</th>
                        <th scope="col" colSpan={2}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.studens.map((student,i) =>
                        <tr >
                            <th scope="row">{i+1}</th>
                            <td>{student.name}</td>
                            <td>{student.idCard}</td>
                            <td>{student.idStudent}</td>
                            <td>{student.age}</td>
                            <td ><a href="/">Edit</a></td>
                            <td><a href="/">Delete</a></td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }

}
export default student_list;
