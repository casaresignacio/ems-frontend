import React from "react";

const ListEmployeeComponent = () => {
	const dummyData = [
		{
			id: 1,
			firstName: "Ignacio",
			lastName: "Casares",
			email: "casaresignacio@gmail.com",
		},
		{
			id: 2,
			firstName: "Mariano",
			lastName: "Casares",
			email: "casaresmariano@gmail.com",
		},
		{
			id: 3,
			firstName: "Leonel",
			lastName: "Ronaldo",
			email: "roni123@gmail.com",
		},
	];

	return (
		<div className="container">
			<h2 className="text-center">List of Employees</h2>
			<table className="table table-striped table-bordered">
				<thead>
					<tr>
						<th>Employee Id</th>
						<th>Employee First Name</th>
						<th>Employee Last Name</th>
						<th>Employee Email</th>
					</tr>
				</thead>
				<tbody>
					{dummyData.map((employee) => (
						<tr key={employee.id}>
							<td>{employee.id}</td>
							<td>{employee.firstName}</td>
							<td>{employee.lastName}</td>
							<td>{employee.email}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ListEmployeeComponent;
